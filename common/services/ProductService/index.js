export default ($axios) => {
  const url = `/product/api`
  const urlPromotion = `/promotion/api`
  return {
    getProduct(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/product/`, {
        params,
      })
    },
    async createProduct(payload) {
      const response = await $axios.post(`${url}/product/`, payload)
      const data = response.data
      return { data }
    },
    updateProduct(id, payload) {
      return $axios.put(`${url}/product/${id}/`, payload)
    },
    detailProduct(data) {
      return $axios.get(`${url}/product/${data.id}/`, data)
    },
    deleteProduct(data) {
      return $axios.delete(`${url}/product/${data.id}/`, data)
    },
    // TODO: Promotion
    getPromotion(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${urlPromotion}/promotion/`, {
        params,
      })
    },
    createPromotion(payload) {
      return $axios.post(`${urlPromotion}/promotion/`, payload)
    },
    updatePromotion(id, payload) {
      return $axios.put(`${urlPromotion}/promotion/${id}/`, payload)
    },
    detailPromotion(data) {
      return $axios.get(`${urlPromotion}/promotion/${data.id}/`, data)
    },
    deletePromotion(data) {
      return $axios.delete(`${urlPromotion}/promotion/${data.id}/`, data)
    },
    getPromotionVariants(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/variantwithpromotion/`, {
        params,
      })
    },
    // TODO: Variant
    getVariants(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/variant/`, {
        params,
      })
    },
    getVariantsById(data) {
      return $axios.get(`${url}/variant/${data.id}/`, data)
    },
    updateVariant(payload) {
      return $axios.put(`${url}/variant/${payload.id}/`, payload.formData)
    },
    async createVariants(payload) {
      const response = await $axios.put(`${url}/variant/${id}/`, payload)
      const data = response.data
      return { data }
    },
    async deleteVariant(id) {
      const response = await $axios.delete(`${url}/variant/${id}/`)
      const data = response.data
      return { data }
    },
    // TODO: ProductBrand
    getProductBrand(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/productbrand/`, {
        params,
      })
    },
    createProductBrand(data) {
      return $axios.post(`${url}/productbrand/`, data)
    },
    getProductBrandById(data) {
      return $axios.get(`${url}/productbrand/${data.id}/`, data)
    },
    updateProductBrand(payload) {
      return $axios.put(`${url}/productbrand/${payload.id}/`, payload.formData)
    },
    deleteProductBrand(data) {
      return $axios.delete(`${url}/productbrand/${data.id}/`, data)
    },
    // TODO: ProductCategory
    getProductCategory(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/productcategory/`, {
        params,
      })
    },
    createProductCategory(data) {
      return $axios.post(`${url}/productcategory/`, data)
    },
    getProductCategoryById(data) {
      return $axios.get(`${url}/productcategory/${data.id}/`, data)
    },
    updateProductCategory(data) {
      return $axios.put(`${url}/productcategory/${data.id}/`, data)
    },
    deleteProductCategory(data) {
      return $axios.delete(`${url}/productcategory/${data.id}/`, data)
    },
    // TODO: ProductGroup
    getProductGroup(data) {
      const params = {}
      if (data?.length) {
        for (let i=0; i < data.length; i++) {
          params[data[i].key] = data[i].value
        }
      }
      return $axios.get(`${url}/productgroup/`, {
        params,
      })
    },
    createProductGroup(data) {
      return $axios.post(`${url}/productgroup/`, data)
    },
    getProductGroupById(data) {
      return $axios.get(`${url}/productgroup/${data.id}/`, data)
    },
    updateProductGroup(data) {
      return $axios.put(`${url}/productgroup/${data.id}/`, data)
    },
    deleteProductGroup(data) {
      return $axios.delete(`${url}/productgroup/${data.id}/`, data)
    },
    //
    scanBarCode(data) {
      return $axios.get(`${url}/scanproduct/${data.barcode}/`, data)
    },
    scanBarCodeVariant(data) {
      return $axios.get(`${url}/variant/?barcode__icontains=${data.barcode}`)
    },
  }
}
