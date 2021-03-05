app.component('product-display',{
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
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" 
              @mouseover="setSelected(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
              <!-- could also use kebab-case 'background-color': variant.color -->
              <!-- to use CSS property name instead of Typescript property -->
              <!-- Another option is create a styles object in data() 
                    that contains all our desired style properties. e.g.
                  styles: {
                    fontSize: '14px'
                    backgroundColor: 'orange'
                  }
                  -->
            </div>
            <button class="button" @click="addCart" :disabled="noStock" 
              :class="{disabledButton: noStock}">
              <!-- variant syntax :class="noStock ? 'disabledButton' : ''" -->
              Add to Cart
            </button>
          </div>
        </div>
      </div>`
})