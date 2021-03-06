import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

Vue.config.productionTip = false

Vue.use(VuetifyDialog, {
    context: {
        vuetify
    }
})

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')