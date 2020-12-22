

<template>
	<section>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>{{toy.name}}</span>
				<el-button style="float: right; padding: 3px 0" type="text"
					>
                    <router-link :to="'/toy/details/'+toy._id">Toy Details</router-link>
                    </el-button
				>
			</div>
			<div class="text item">
                <p>type: {{toy.type}}</p>
				<p>Price: {{toy.price}}</p>
			</div>
		</el-card>
	</section>
</template>

<script>
export default {
	props: {
		toy: Object,
	},
	methods: {},
};
</script>

<style>

</style>



// <div class="toy-preview clearfix" slot="header">
//         <p>{{toy._id}}</p>
//         <p>Name: {{toy.name}}</p>
//         <p>Price: {{toy.price}}</p>
//         <p>type: {{toy.type}}</p>
//         <router-link :to="'toy/'+toy._id">Toy Details</router-link>
        
//     </div>