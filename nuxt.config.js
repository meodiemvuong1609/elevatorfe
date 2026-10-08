const path = require("path");

// URL công khai và quyền index được đọc từ biến môi trường để cùng một code
// chạy được cho production (hungphatelevator.com) và subdomain staging.
const SITE_URL = (process.env.SITE_URL || "https://hungphatelevator.com").replace(/\/$/, "");
const ALLOW_INDEXING = process.env.ALLOW_INDEXING !== "false";
const SITE_NAME = "Thang máy Hưng Phát";
const SITE_TITLE = "Công ty thang máy Uy Tín - Chất lượng | Thang máy Hưng Phát";
const SITE_DESCRIPTION =
  "Công ty thang máy Hưng Phát chuyên cung cấp các loại thang máy liên doanh và cầu thang máy nhập khẩu Uy Tín - Giá Rẻ hàng đầu Việt Nam.";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // Trang chủ: "Công ty thang máy Uy Tín - Chất lượng | Thang máy Hưng Phát",
    // các trang con đặt title riêng trong head(). titleTemplate phải là chuỗi:
    // hàm sẽ bị serialize sang client/server bundle và mất biến bên ngoài.
    title: "Công ty thang máy Uy Tín - Chất lượng",
    titleTemplate: `%s | ${SITE_NAME}`,
    htmlAttrs: {
      lang: "vi",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: SITE_DESCRIPTION },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Thang máy, Hưng Phát, Thang máy chất lượng, Thang máy an toàn, thang máy elevator, Thang máy elevator, Hưng Phát elevator, Thang máy Hưng Phát",
      },
      ...(ALLOW_INDEXING ? [] : [{ hid: "robots", name: "robots", content: "noindex, nofollow" }]),
      // Open Graph
      { property: "og:locale", content: "vi_VN" },
      { property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: SITE_TITLE },
      { hid: "og:description", property: "og:description", content: SITE_DESCRIPTION },
      { hid: "og:url", property: "og:url", content: `${SITE_URL}/` },
      { hid: "og:image", property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:site_name", content: SITE_NAME },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:title", name: "twitter:title", content: SITE_TITLE },
      { hid: "twitter:description", name: "twitter:description", content: SITE_DESCRIPTION },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      },
    ],
    script: [
      // Zalo chat widget. Thẻ <script> đặt trong template Vue bị trình biên dịch
      // bỏ qua, nên SDK phải được nạp từ đây.
      { src: "https://sp.zalo.me/plugins/sdk.js", async: true, defer: true, body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "aos/dist/aos.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/common/plugins/globals.js", mode: "client" },
    { src: "~/common/plugins/toastr", mode: "client" },
    { src: "~/common/plugins/vue-flickity.js", mode: "client" },
    { src: "~/common/plugins/mixins.js" },
    { src: "~/common/plugins/aos.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/common/components"],
  },

  dir: {
    layouts: "common/layouts",
  },

  // scripts/deploy.sh build vào thư mục tạm rồi mới đổi tên thành .nuxt,
  // để server đang chạy không bị hỏng trong lúc build.
  buildDir: process.env.NUXT_BUILD_DIR || ".nuxt",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/robots",
    // sitemap phải đứng cuối danh sách module
    "@nuxtjs/sitemap",
  ],

  pwa: {
    icon: false,
    manifest: {
      name: SITE_NAME,
      short_name: "Hưng Phát",
      lang: "vi",
    },
  },

  sitemap: {
    hostname: SITE_URL,
    gzip: true,
    exclude: ALLOW_INDEXING ? [] : ["/**"],
  },

  robots: ALLOW_INDEXING
    ? [{ UserAgent: "*", Allow: "/", Sitemap: `${SITE_URL}/sitemap.xml` }]
    : [{ UserAgent: "*", Disallow: "/" }],

  publicRuntimeConfig: {
    API_ENVIRONMENT: process.env.API_ENVIRONMENT || "",
    ACCESS_TOKEN_MAP_BOX: process.env.ACCESS_TOKEN_MAP_BOX || "",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient, isDev }) {
      // Source map chỉ dùng khi dev; production không public mã nguồn và
      // giảm mạnh dung lượng thư mục build.
      if (isClient && isDev) {
        config.devtool = "source-map";
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "tailwindcss/nesting": {},
          tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
          autoprefixer: {},
        },
      },
    },
  },
};
