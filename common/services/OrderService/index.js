export default ($axios) => {
  const url = `/order/api`
  return {
    // TODO: Order
    getOrder(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/order/`,{
        params,
      })
    },
    getStatusOrder() {
      return $axios.get(`${url}/statusorder/`)
    },
    createOrder(data) {
      return $axios.post(`${url}/order/`, data)
    },
    getOrderById(data) {
      return $axios.get(`${url}/order/${data.id}/`, data)
    },
    updateOrder(data) {
      return $axios.put(`${url}/order/${data.id}/`, data)
    },

    getOrderEmployee(data) {
      const params = {}
      if (data?.params?.length) {
        for (let i=0; i < data.params.length; i++) {
          params[data.params[i].key] = data.params[i].value
        }
      }
      return $axios.get(`${url}/orderemployee/${data.id}/`,{
        params,
      })
    },

    updateStatusOrder(data) {
      return $axios.patch(`${url}/order/${data.id}/`, data)
    },

    renderQrCode(data) {
      return $axios.post(`vietqr/api/createqrcodepayment/`, data)
    },
  }
}
