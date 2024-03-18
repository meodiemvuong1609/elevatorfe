import services from '~/common/services'

export default (ctx, inject) => {
  inject('services', services(ctx.$axios, ctx.$config))
}
