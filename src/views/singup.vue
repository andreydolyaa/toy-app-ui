


<template>
    <section>
        <h1>SIGNUP</h1>
        <form @submit.prevent="signup">
           
            <input type="text" placeholder="User Name" v-model="userCred.username">
            <input type="text" placeholder="Email" v-model="userCred.email">
            <input type="text" placeholder="Password" v-model="userCred.password">
           <button>Signup!</button>
        </form>
        <router-link to="/toy">back to main page</router-link>
        <pre>
            {{userCred.username}}
            {{userCred.email}}
            {{userCred.password}}
        </pre>
    </section>
</template>

<script>
export default {
    data(){
        return{
            userCred:{
                username:'',
                email:'',
                password:''
            }
        }
    },
    methods: {
        signup(){
            this.$store.dispatch({
                type:'signup',
                userCred:this.userCred
            })
        }
    },
}
</script>

<style>

</style>