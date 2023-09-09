// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/icons.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/app.min.css'
        }

        // {
        //     rel: 'stylesheet',
        //     href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
        //     integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
        //     crossorigin: 'anonymous'
        // },
      ],
      script: [
        // {
        //     src: '/js/plugin.js'
        // },
        {
            src: '/js/jquery/jquery.min.js',
            body: true
        },
        {
            src: '/js/bootstrap/js/bootstrap.bundle.min.js',
            body: true
        },
        {
            src: 'js/metismenu/metisMenu.min.js',
            body: true
        },
        {
            src: '/js/simplebar/simplebar.min.js',
            body: true
        },
        {
            src: '/js/node-waves/waves.min.js',
            body: true
        },
        // {
        //     src: '/js/apexcharts/apexcharts.min.js',
        //     body: true
        // },
        // {
        //     src: '/js/dashboard.init.js',
        //     body: true
        // },
        {
            src: '/js/app.js',
            body: true
        }

        // {
        //     src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
        //     integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
        //     crossorigin: 'anonymous'
        // }
      ],
      bodyAttrs: {
        'data-topbar': 'light',
        'data-layout': 'horizontal'
      },
      plugins: [
        {src: '~/plugins/apexcharts.client.js'}
      ]
    },
  }
})
