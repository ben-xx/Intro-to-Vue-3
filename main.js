const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Meister',
            socks_img: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', 
                    image: './assets/images/socks_blue.jpg',
                    inStock: false,
                    quantity: 0
                },
                { id: 2235, color: 'blue', 
                    image: './assets/images/socks_green.jpg',
                    inStock: true,
                    quantity: 50
                },
            ],
            selected: 0
        }
    },
    methods: {
        addCart() {
            this.cart++
            console.log('Cart items:'+ this.cart)
        },
        setSelected(index) {
            this.selected = index;
            //console.log('selected:'+ this.selected)
        }
    },
    computed: {
        activeVariant() {
            return this.variants[this.selected]
        },
        activeImage() {
            return this.socks_img = this.activeVariant.image
        },
        noStock() {
            return this.activeVariant.quantity <= 0
            //return !this.activeVariant.inStock
        },
        productTitle() {
            return this.brand +' '+ this.product
        }
    }

})
