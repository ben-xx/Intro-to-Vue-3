app.component('review-display', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }}: {{ review.rating}}<br/>
            <div v-show="review.review">"{{ review.review }}"</div>
        </li>
      </ul>
    </div>
    `
})