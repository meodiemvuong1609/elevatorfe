export default function ({ $axios, store, app }) {
  $axios.interceptors.request.use(
    config => {
      const auth = app.$cookies.get('accessToken')
      config.headers = {
        'Content-Type': 'application/json',
      }
      if (app.$cookies.get('accessToken')) config.headers.Authorization = `Token ${auth}`
      return config;
    }
  )
  
  $axios.interceptors.response.use((response) => {
      return response
    },
    async function (error) {
      const originalRequest = error.config
      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshAccessToken();
        if(accessToken) {
          $axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
          return $axios.request(originalRequest)
        } else {
          return store.dispatch('auth/logout')
        }
      }
      return Promise.reject(error);
    }
  )
  
  const refreshAccessToken = async () => {
    const payload = {
      refresh: app.$cookies.get('refreshToken')
    }
    try {
      const res = await $axios.post(`/micro-account-${app.$config.API_ENVIRONMENT}/account/api/refresh_token`, payload)
      app.$cookies.set('accessToken', res.data.access, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      return res.data.access
    } catch (error) {
      return null
    }
    
  }
}
