export default ($axios, config) => {
  const url = `/report/api`
  return {
    getReportDaily(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/daily/`, {
        params
      })
    },
    getReportProduct(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/product/`, {
        params
      })
    },
  
  }
}