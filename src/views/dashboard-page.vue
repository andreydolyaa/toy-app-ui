

<template>
	<section v-if="toys">
		<h1>Toy Prices - </h1>
		<router-link to="/toy">Back to main page</router-link>
		<chart :toys="toys"/>
	</section>
</template>


<script>
	import chart from '@/components/chart.vue';

export default {
	computed:{
		toys(){
			return this.$store.getters.getToysToDisplay;
		}
	},
	components:{
		chart
	}
};
</script>

<style>
</style>