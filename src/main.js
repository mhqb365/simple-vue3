import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'

const myMixin = {
    data() {
        return {
            isAuthenticated: false,
            isAdmin: false
        }
    },
    created() {
        this.isAuthenticated = localStorage.getItem('token') ? true : false
        this.isAdmin = localStorage.getItem('permission') > 0 ? true : false
        this.hello()
    },
    methods: {
        hello() {
            console.log('isAuthenticated:', this.isAuthenticated)
            console.log('isAdmin:', this.isAdmin)
        }
    }
}

// define an app that uses this mixin
createApp({
    mixins: [myMixin],
    render: () => h(App)
}).use(router).mount('#app')