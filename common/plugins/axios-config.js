export default function ({ $axios, store, app }) {
  $axios.interceptors.request.use(
    config => {
      // const auth = app.$cookies.get('accessToken')
      // config.headers = {
      //   'Content-Type': 'application/json',
      // }
      // if (app.$cookies.get('accessToken')) config.headers.Authorization = `Token ${auth}`
      // return config;
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

}
