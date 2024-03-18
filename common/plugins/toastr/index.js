import toastr from './toastr'

export default ({ app, store }, inject) => {
  inject('toastr', {
    success(message, options) {
      toastr.success(message, options)
    },
    warning(message, options) {
      toastr.warning(message, options)
    },
    error(message, options) {
      toastr.error(message, options)
    },
    info(message, options) {
      toastr.info(message, options)
    },
  })
}
