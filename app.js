const app = Vue.createApp({
    //data, functions

    //instead of using this use  in html file template: '<h2>This is injected by Vue Js</h2>'

    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sandorson'
        }
    }
})

app.mount('#app')