

<template>
	<section>
			<router-link :to="'/toy'">back to main page</router-link>
		<div v-if="toy" class="toy-details">
			<h2>{{toy.name}}</h2>
			<img :src="toy.imgUrl" alt="">
			<p>type: {{toy.type}}</p>
			<p>added at: {{toy.createdAt}}</p>
			<p>in stock?: {{toy.inStock}}</p>
			<h2>price: {{toy.price}}</h2>
		</div>

		<div class="add-reviews">
			<form @submit.prevent="addReview">
				<input type="text" placeholder="Add new review" v-model="review" />
				<button>Add</button>
			</form>
		</div>
		<div class="show-reviews">
			<h3>Reviews:</h3>
			<ul v-if="toy">
				<li v-for="(review,idx) in filtredReviews" :key="idx">
					<h4>Review by: {{review.byUser.username}}</h4>
					<p>~ {{review.review}}</p>
				</li>
			</ul>
		</div>
		<div class="caht" v-if="toy">
			<chatApp :toyId="toy._id"/>
		</div>
	</section>
</template>

<script>
import { toyService } from "@/services/toyService.js";
import chatApp from '@/components/chat-app.vue';

export default {
	data() {
		return {
			toy: null,
			review: "",
			reviews: [],
		};
	},
	methods: {
		addReview() {
			this.$store.dispatch({
				type: "addReview",
				review: this.review,
				toyId: this.$route.params.toyId,
			});
			this.review = ''
		},
	},
	computed: {
		filtredReviews(){
			return this.reviewsGet.filter(review => review.toyId === this.toy._id)
		},
		reviewsGet() {
			return this.$store.getters.reviews;
		},
	},
	created() {
		
		const toyId = this.$route.params.toyId;
		toyService.getById(toyId).then((toy) => {
			this.toy = toy;
		});
	},
	components:{
		chatApp
	}
};
</script>

<style>
</style>