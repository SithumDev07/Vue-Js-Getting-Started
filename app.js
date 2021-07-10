const app = Vue.createApp({
    //data, functions

    //instead of using this use  in html file template: '<h2>This is injected by Vue Js</h2>'

    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sandorson',
            age: 45,
            showBooks: true
        }
    },
    methods: {

        changeTitle(title) {
            console.log('You Clicked Me')
            this.title = title
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount('#app')