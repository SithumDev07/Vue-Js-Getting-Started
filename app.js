const app = Vue.createApp({
    //data, functions

    //instead of using this use  in html file template: '<h2>This is injected by Vue Js</h2>'

    data() {
        return {
            // title: 'The Final Empire',
            // author: 'Brandon Sandorson',
            // age: 45,
            showBooks: true,
            // x: 0,
            // y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rotherson' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'patrick rotherson' },
            ]
        }
    },
    methods: {

        changeTitle(title) {
            console.log('You Clicked Me')
            this.title = title
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data){
            console.log(e)
            if(data)
                console.log(data);
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')