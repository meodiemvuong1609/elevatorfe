export default ($axios, config) => {
  const url = `/customer/api`
  return {
    getListCustomer(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/customer/`, {
        params,
      
      })
    },
    getDetailCustomer(data) {
      return $axios.get(`${url}/customer/${data.id}/`)
    },
    createCustomer(data) {
      return $axios.post(`${url}/customer/`, data)
    },
    updateCustomer(data) {
      return $axios.put(`${url}/customer/${data.id}/`, data.data)
    },
    deleteCustomer(data) {
      return $axios.delete(`${url}/customer/${data.id}/`)
    }
  }
}