
<template>
	<div class="toy-list">
		<div class="add-toyz">




			<div class="add-panel">
				<h3>Add / Edit:</h3>
			<div class="ok">
				<el-input class="inp" type="text" placeholder="Toy Name" v-model="toy.name" />
				<el-input class="inp" type="text" placeholder="Toy Price" v-model.number="toy.price" />
			</div>

			<div class="ok2">
				<el-input  class="inp" type="text" placeholder="Toy Type" v-model=" toy.type " />
				<el-button plain class="btn" @click="saveToy">Save</el-button>
				</div>
			</div>



			<div class="search-panel">
				<h3>Search:</h3>
			<div class="search">
				<el-input type="text" placeholder="Search By Name" @keyup.enter.native="searchQuery()" v-model="search.name" />
				<el-button type="info" plain @click="searchQuery()" >Search</el-button>
			</div>
				<div class="search2">
				<el-button type="info" plain @click="searchAll()">Show all</el-button>
				<el-button type="info" plain @click="searchQuery();search.inStock = true">Show toys in stock</el-button>
				<el-select v-model="search.type" @change="searchQuery()" placeholder="Search By Type">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				
			</div>
			</div>




		</div>





		<ul class="list">
			<li v-for="toy in toys" :key="toy._id">
				<toyPreview :toy="toy" />
				<div class="add-btns">
					<el-button type="success" plain><router-link :to="'toy/'+toy._id">edit</router-link></el-button>
					<el-button type="danger" plain @click="deleteToy(toy)">Delete</el-button>
				</div>
			</li>
		</ul>
		<div class="slot-container">
			<slot name="header"></slot>
			<slot name="main"></slot>
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
import { toyService } from "@/services/toyService.js";
import toyPreview from "@/components/toy-preview.vue";
import ToyPreview from "./toy-preview.vue";

export default {
	data() {
		return {
			search:{
				name:'',
				inStock:'',
				sortBy:'',
				type:'',

			},
			selected: "",
			name: "",
			toy: toyService.getEmptyToy(),
			options: [
				{
					value: "all",
					label: "All",
				},
				{
					value: "Educational",
					label: "Educational",
				},
				{
					value: "Funny",
					label: "Funny",
				},
				{
					value: "Adult",
					label: "Adult",
				},
				{
					value: "Fun",
					label: "Fun",
				},
			],
			value: "",
		};
	},
	computed: {
		toys() {
			return this.$store.getters.getToysToDisplay;
		},
		loggedinUser(){
			return this.$store.getters.loggedinUser;
		}
	},
	methods: {
		saveToy() {
			this.$store.dispatch({
				type: "saveToy",
				toy: this.toy,
				user:this.loggedinUser
			});
		},
		searchAll(){
			this.search.name = ''
			this.search.inStock = ''
			this.search.sortBy = ''
			this.search.type = ''
		},
		editToy(toy) {
			
			this.toy = JSON.parse(JSON.stringify(toy));
		},
		deleteToy(toy) {
			this.$store.dispatch({
				type: "deleteToy",
				toy,
				user:this.loggedinUser
			});
		},
		searchQuery(){
			this.$store.dispatch({
				type:'searchQuery',
				search:this.search
			})
		}
	},
	components: {
		toyPreview,
	},
};
</script>

<style>
</style>