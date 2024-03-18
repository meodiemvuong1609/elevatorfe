export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Thang máy Hưng Phát',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/common/plugins/globals.js',
      mode: 'client',
    },
    {
      src: '~/common/plugins/barcode.js',
      mode: 'client',
      ssr: false,
    },
    {
      src: '~/common/plugins/services.js',
      mode: 'client',
    },
    {
      src: '~/common/plugins/toastr',
      mode: 'client',
    },
    {
      src: '~/common/plugins/vue-carousel.js',
      mode: 'client',
    },
    {
      src: '~/common/plugins/axios-config.js',
      mode: 'client',
    },
    {
      src: '~/common/plugins/vue-apexchart.js',
      ssr: false,
    },
    {
      src: '~/common/plugins/vue-calendar.js',
      ssr: false,
    },
    {
      src: '~/common/plugins/ultiEvents.js',
    },
    {
      src: '~/common/plugins/vue-multiselect.js',
    },
    {
      src: '~/common/plugins/vue-flickity.js',
      ssr: false,
    }
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/common/components', '~/common/middlewares'],
  },

  dir: {
    // layouts: 'common/layouts',
    middleware: 'common/middlewares',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://www.vue2editor.com/guide.html#modular-version
    "vue2-editor/nuxt",
    // https://www.npmjs.com/package/@nuxtjs/firebase
    '@nuxtjs/tailwindcss',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || '',
    debug: process.env.DEBUG || false,
  },

  publicRuntimeConfig: {
    API_ENVIRONMENT: process.env.API_ENVIRONMENT || '',
    ACCESS_TOKEN_MAP_BOX: process.env.ACCESS_TOKEN_MAP_BOX || '',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
