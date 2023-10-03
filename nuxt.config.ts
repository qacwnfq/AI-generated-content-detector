// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   ssr: false,
//   devtools: { enabled: true },
//   routes: {
//     '/': {prerender: true},
//     '/*': {CORS: true}
//   },
//   allowFromAnyOrigin: false
// })

  export default defineNuxtConfig({
    app: {
      baseURL: '/AI-generated-content-detector/',
      buildAssetsDir: 'assets'
    }
  })