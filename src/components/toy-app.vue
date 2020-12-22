



<template>
	<div class="toy-app">
		<div class="user-welcome">
			<h1 v-if="user">Hi, {{user.username}}</h1>
			<button v-if="user" @click="logout">Logout</button>
			<button v-if="!user" @click="loginRedirect">Login</button>
			<router-link to="/user-profile">Edit User</router-link>

			<router-link to="/dashboard">Dashboard</router-link>
		</div>
		<toyList>
			<div v-if="isShowen" slot="header" class="slots">
				<div slot="header">
					<h1>chat</h1>
				</div>
				<div slot="main">
					<ul>
						<li v-for="word in chat" :key="word.txt">
							<p>You: {{ word }}</p>
						</li>
					</ul>
				</div>
				<div slot="footer">
					<input type="text" placeholder="say somthing" v-model="txt" @keyup.enter="displayInChat" />
					<button @click="displayInChat">send</button>
				</div>
			</div>
		</toyList>
		<div class="chat-container">
			<button class="chat-icon" @click="isShowen = !isShowen">
				<i class="far fa-comment-dots"></i>
			</button>
		</div>
	</div>
</template>


<script>
import toyList from "@/components/toy-list.vue";

export default {
	data() {
		return {
			txt: "",
			chat: [],
			otherChat: "Sure thing honey",
			isShowen: false,
		};
	},
	methods: {
		displayInChat() {
			return this.chat.push(this.txt);
		},
		logout() {
			this.$store.dispatch({
				type: "logout",
			});
		},
		loginRedirect() {
			this.$router.push("/login");
		},
	},
	computed: {
		answer() {
			setTimeout(() => {
				return "sure thing honey";
			}, 1000);
		},
		user() {
			return this.$store.getters.loggedinUser;
		},
	},
	components: {
		toyList,
	},
};
</script>



<style>
</style>