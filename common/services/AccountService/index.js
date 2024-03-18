export default ($axios) => {
  const url = `/account/api`
  const authUrl = `/auth/api`

  return {
    getInforAccount() {
      return $axios.get(`${url}/infoaccount/`)
    },
    getListAccount(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/admin/account/`, {
        params,
      })
    },
    updateInforAccount(data) {
      return $axios.put(`${url}/infoaccount/`, data)
    },
    // TODO: account employee 
    createEmployee(data) {
      return $axios.post(`${url}/employee/`, data)
    },
    getListEmployee(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/employee/`, {
        params,
      } )
    },
    getEmployeeById(data) {
      return $axios.get(`${url}/employee/${data.id}/`, data)
    },
    updateEmployee(data) {
      return $axios.put(`${url}/employee/${data.id}/`, data.data)
    },
    resetPasswordEmployee(data) {
      return $axios.put(`${url}/updatepassword/${data.id}/`, data)
    },
    deleteEmployee(data) {
      return $axios.delete(`${url}/employee/${data.id}/`, data)
    },
    updateStatusEmployee(data) {
      return $axios.put(`${url}/admin/updatestatusaccount/`, data)
    },
    async createGroceryStore(payload) {
      const response = await $axios.post(`${url}/chth/admincreate/`, payload)
      const data = response.data
      return { data }
    },
    // TODO: Position account
    createPosition(data) {
      return $axios.post(`${url}/accounttype/`, data)
    },
    getListPosition(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/accounttype/`, {
        params,
      } )
    },
    getPositionById(data) {
      return $axios.get(`${url}/accounttype/${data.id}/`, data)
    },
    updatePosition(data) {
      return $axios.put(`${url}/accounttype/${data.id}/`, data)
    },
    deletePosition(data) {
      return $axios.delete(`${url}/accounttype/${data.id}/`, data)
    },
    // TODO: adress account
    updateAddress(data) {
      return $axios.put(`location/api/address/${data.id}/`, data)
    },
    async changePassword(payload) {
      const response = await $axios.put(`${authUrl}/changepassword/`, payload)
      const data = response.data
      return { data }
    },
    async deactiveGrocery(payload) {
      const response = await $axios.put(`${url}/admin/updatestatusaccount/`, payload)
      const data = response.data
      if (data.code === 200) return { isError: false }
      if (data.code === 400) return { isError: true }
    },
  }
}
