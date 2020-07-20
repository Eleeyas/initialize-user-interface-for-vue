import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: require('../assets/lang/en.json'),
  th: require('../assets/lang/th.json')
}
const i18n = new VueI18n({
  locale: 'th',
  messages
})

export default i18n
