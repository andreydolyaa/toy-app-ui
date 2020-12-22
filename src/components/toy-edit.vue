


<template>
	<section v-if="toy">
		<h1>Edit Toy</h1>
		<div class="edit-inputs">
            <router-link to="/toy">back to main page</router-link>
			<div class="editz">
				<p>Toy name:</p>
			<input type="text" placeholder="toy name" v-model="toy.name" />
			<p>Toy price:</p>
			<input type="text" placeholder="toy price" v-model="toy.price" />
			<p>Toy type:</p>
			<input type="text" placeholder="toy type" v-model="toy.type" />
			<div class="uploadI">
			<label for="imgUploader">Toy img upload:</label>
			<input v-if="!isLoading" type="file" id="imgUploader" @change="onUploadImg">
			<img v-else src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif" alt="">
			</div>
			<button @click="saveToy">Save</button>
			</div>
		</div>
	</section>
</template>

<script>
import { toyService } from "@/services/toyService.js";
import {uploadImg} from '../services/img-upload.service.js';
export default {
	data() {
		return {
			isLoading:false,
			toy: null,
			url:''
		};
	},
	computed: {
		loggedinUser(){
			return this.$store.getters.loggedinUser;
		}
	},
	methods: {
		saveToy() {
			this.$store.dispatch({
				type: "updateToy",
				toy: this.toy,
				user:this.loggedinUser,
				
            });
            this.$router.push('/toy');
		},
		async onUploadImg(ev){
			this.isLoading = true;
			const res = await uploadImg(ev);
			this.toy.imgUrl = res.url;
			this.isLoading = false;
		}
	},
	created() {
		const toyId = this.$route.params.toyId;
		toyService.getById(toyId).then((toy) => {
			this.toy = toy;
		});
	},
	
};
</script>

<style>
</style>