export default ($axios, config) => {
  const url = `/warehouse/api`
  return {
    getListWarehouse() {
      return $axios.get(`${url}/warehouse/`)
    },
    getDetailWarehouse(data) {
      return $axios.get(`${url}/warehouse/${data.id}/`)
    },
    getAmountWarehouse(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/amount/`, {
        params,
      })
    },
    updateAmountWarehouse(payload) {
      return $axios.put(`${url}/amount/`, payload)
    },
  }
}