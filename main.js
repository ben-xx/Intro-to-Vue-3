const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id);
            console.log('Item['+ id +'] added to cart:'+ this.cart.length);
        }
    }
})
