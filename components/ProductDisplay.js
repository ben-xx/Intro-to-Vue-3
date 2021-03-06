app.component('product-display',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Meister',
            socks_img: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', 
                    image: './assets/images/socks_blue.jpg',
                    inStock: false,
                    quantity: 25
                },
                { id: 2235, color: 'blue', 
                    image: './assets/images/socks_green.jpg',
                    inStock: true,
                    quantity: 50
                },
            ],
            selected: 0,
            productReviews: []
        }
    },
    methods: {
        addCart() {
            // broadcast this payload (an id) to 'add-to-cart' listener in
            // hosting template where a method can ingest payload
            this.$emit('add-to-cart', this.variants[this.selected].id)
            
            //this.cart++
            //console.log('Cart:'+ this.cart)
        },
        setSelected(index) {
            this.selected = index;
            //console.log('selected:'+ this.selected)
        },
        submitReview(review) {
            this.productReviews.push(review);
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
        },
        shipping() {
            return this.premium ? 'Free' : '$4.99';
        }
    },
    template: 
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="activeImage">
                </div>
                <div class="product-info">
                    <h1>{{ productTitle }}</h1>
                    <p v-if="!noStock">In Stock</p>
                    <!-- <p v-else-if="inventory > 0 && inventory < 10">almost sold out</p> -->
                    <p v-show="noStock">Out of Stock</p>
                    <p>Shipping {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" :key="variant.id" 
                        @mouseover="setSelected(index)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                    </div>
                        <!-- could also use kebab-case 'background-color': variant.color -->
                        <!-- to use CSS property name instead of Typescript property -->
                        <!-- Another option is create a styles object in data() 
                                that contains all our desired style properties. e.g.
                            styles: {
                                fontSize: '14px'
                                backgroundColor: 'orange'
                            }
                            -->
                    
                    <button class="button" @click="addCart" :disabled="noStock" 
                        :class="{disabledButton: noStock}">
                        <!-- variant syntax :class="noStock ? 'disabledButton' : ''" -->
                        Add to Cart
                    </button>
                </div>
                <review-display v-show="productReviews.length" :reviews="productReviews"></review-display>
                <product-review @review-submitted="submitReview"></product-review>
            </div>
        </div>`
})