const app = Vue.createApp({
    //data, functions

    //instead of using this use  in html file template: '<h2>This is injected by Vue Js</h2>'

    data() {
        return {
            // title: 'The Final Empire',
            // author: 'Brandon Sandorson',
            // age: 45,
            showBooks: true,
            url: 'https://hellomayuko.com',
            // x: 0,
            // y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rotherson', img: 'assets/1.png', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.png', isFav: false},
                { title: 'the final empire', author: 'patrick rotherson', img: 'assets/3.png', isFav: true },
            ]
        }
    },
    methods: {

        // changeTitle(title) {
        //     console.log('You Clicked Me')
        //     this.title = title
        // },

        // toggleShowBooks() {
        //     this.showBooks = !this.showBooks;
        // },
        // handleEvent(e, data){
        //     console.log(e)
        //     if(data)
        //         console.log(data);
        // },
        // handleMouseMove(e){
        //     this.x = e.offsetX;
        //     this.y = e.offsetY;
        // },
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    }
})

app.mount('#app')