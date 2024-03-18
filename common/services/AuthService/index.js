export default ($axios) => {
  const url = `/auth/api`
  return {
    login(data) {
      return $axios.post(`${url}/login/`, data)
    },
    forgotPassword(data) {
      return $axios.post(`${url}/forgotpassword/`, data)
    },
    confirmOtp(data) {
      return $axios.post(`${url}/verifyforgot/`, data)
    },
    resetPassword(data) {
      return $axios.post(`${url}/resetpassword/`, data)
    },
    
  }
}
