export default (_$axios) => {
  const url = '/location/api'
  return {
    getArea(data) {
      return _$axios.get(`${url}/area/`)
    },
    getWards(code) {
      return _$axios.get(`${url}/ward/${code}/`)
    },
    getDistricts(code) {
      return _$axios.get(`${url}/district/${code}/`)
    },
    getProvinces() {
      return _$axios.get(`${url}/province/`)
    },
    //

  }
}
