<template>
	<div class="home">
		<h1>Welcome to Toys store</h1>



		<router-link to="/login">LOGIN</router-link>
        <pre>
            
        </pre>

	</div>
</template>

<script>
import userLogin from '@/components/user-login.vue';
export default {
    components:{
        userLogin
    }
    
};
</script>
