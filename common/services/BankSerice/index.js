export default ($axios) => {
  const url = `/bank/api`

  return {
    async getListBanks(keySearch) {
      const response = await $axios.get(`${url}/bank/?short_name__icontains=${keySearch}`)
      if (response.data.count >= 0 && response.data.code === 200) {
        const data = response.data
        return { isError: false, data: data.data }
      }
    },
    async checkCard(payload) {
      const response = await $axios.post(`${url}/checkcard/`, payload)
      const data = response.data
      if (data.code === 200 && data.message === 'Success') return { isError: false, data: data.data }
      else return { isError: true, error: data.message }
    },
    async updateCard(payload) {
      const response = await $axios.put(`${url}/card/${payload.id}/`, payload)
      const data = response.data
      if (data.code === 200 && data.message === 'Success') return { isError: false, data: data.data }
      else return { isError: true, error: data.message }
    },
    async createAccountBank(payload) {
      const response = await $axios.post(`${url}/card/`, payload)
      if (response.data.count >= 0 && response.data.code === 200) {
        const data = response.data
        return { isError: false, data: data.data }
      } else return { isError: true, message: data.message }
    },
  }
}
