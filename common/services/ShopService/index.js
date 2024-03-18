export default ($axios) => {
  const url = `/shop/api`
  return {
    getEmployeeShops(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/employeeshop/`, {
        params,
      })
    },
    getAdminShop(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/adminshop/`, {
        params,
      })
    },
    async getGroceryStore(id) {
      const response = await $axios.get(`${url}/shop/${id}/`)
      const data = response.data
      return { data }
    },
    async getBussinessType(param) {
      const params = {}
      if (param?.length) {
        for (let i=0; i < param.length; i++) {
          params[param[i].key] = param[i].value
        }
      }
      const response = await $axios.get(`${url}/bussinesstype/`,{
        params,
      })
      const data = response.data
      if (data.code === 200 && data.message === 'Success') return { isError: false, data: data.data }
      else return { isError: true, error: data.message }
    },
  }
}
