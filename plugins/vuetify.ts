// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {
            defaultTheme: 'starWarsTheme',
            variations: {
                colors: ['primary', 'secondary', 'background', 'typography'],
                lighten: 1,
                darken: 1
            },
            themes: {
                starWarsTheme: {
                    colors: {
                        primary: '#DBA90D',
                        'primary-darken-1': '#DBA90D',
                        background: '#000',
                        'background-lighten-1': '#434343',
                        'background-darken-1': '#151515',
                        typography: '#FFF',
                        'typography-lighten-1': '#8D8D8D',
                        'icon-color': '#9D9D9D',
                        'icon-background': '#A5A29A'
                    }
                }
            }
        }
    })
    app.vueApp.use(vuetify)
})