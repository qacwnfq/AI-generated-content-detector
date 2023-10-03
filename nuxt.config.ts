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

export default {
  target: 'static',
  router: {
    base: ' http://qacwnfq.github.io/AI-generated-content-detector>'
  }}
