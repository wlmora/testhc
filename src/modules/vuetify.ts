import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.red.base,
            secondary: colors.red.lighten4,
          },
        },
      },
    },
  })
  app.use(vuetify)
}
export default install
