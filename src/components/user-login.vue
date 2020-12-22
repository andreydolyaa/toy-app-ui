<template>
	<div class="home">
		<h1>Welcome to Toys store</h1>

		<form @submit.prevent="login">
			<input type="text" placeholder="User name" v-model="cerdentials.email" />
			<input type="text" placeholder="Password" v-model="cerdentials.password" />
			<button>Login</button>
		</form>
		<div>
			<button @click="signup">Signup</button>
		</div>
		<pre>
        </pre>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cerdentials: {
				email: "andrey@gmail.com",
				password: "123",
			},
		};
	},
	computed: {
		loggedinUser() {
			return this.$store.getters.loggedinUser;
		},
	},
	methods: {
		login() {
			this.$store.dispatch({
				type: "login",
				userCred: this.cerdentials,
			});
			this.$router.push("/toy");
		},
		signup() {
			this.$router.push("/signup");
		},
	},
	watch: {},
	created() {},
	components: {},
};
</script>