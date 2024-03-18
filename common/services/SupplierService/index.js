export default ($axios, config) => {
  const url = `/supplier/api`
  return {
    getListSupplier(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/supplier/`, {
        params,      
      })
    },
    getDetailSupplier(data) {
      return $axios.get(`${url}/supplier/${data.id}/`)
    },
    createSupplier(data) {
      return $axios.post(`${url}/supplier/`, data)
    },
    updateSupplier(data) {
      return $axios.put(`${url}/supplier/${data.id}/`, data)
    },
    deleteSupplier(data) {
      return $axios.delete(`${url}/supplier/${data.id}/`)
    },
  }
}