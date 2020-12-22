


<template>
	<section>
		<div class="chat-app">

			<h2>chat app</h2>


			<div class="chat-msgs">
				<ul>
                    
                    <li v-for="(msgz,idx) in msgsHistory" :key="idx + msgz">
						<p>{{msgz.name}}: {{msgz.txt}}</p>
					</li>
                
					<li v-for="(msgz,idx) in msgs" :key="idx">
						<p>{{msgz.name}}: {{msgz.txt}}</p>
					</li>


				</ul>
			</div>



			<div class="chat-form">
            {{room}}
            <p v-if="isTyping">Someone typing...</p>
				<form @submit.prevent="sendMsg">
					<input type="text" v-model="msg.txt" @keydown="isTypingNow" @keyup="isNotTypingNow"/>
					<button>SEND</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import SocketService from "@/services/SocketService.js";
export default {
    props:{
        toyId:String
    },
	data() {
		return {
            msg: {name:'Me',txt:''},
            msgsHistory:[],
            msgs: [],
            room:this.toyId,
            isTyping:false
		};
	},
	methods: {
		sendMsg(){
            SocketService.emit('send message',{msg:this.msg,roomId:this.room});
            this.msg.txt = '';
        },
        isTypingNow(){
            SocketService.emit('is typing',this.isTyping)
            this.isTyping = true;
        },
        isNotTypingNow(){
            SocketService.emit('is not typing',this.isTyping)
            this.isTyping = false;
        }
	},
	created() {
        SocketService.setup();


        SocketService.emit('join room',this.room);


        SocketService.on('chat message',message => {
            this.msgs.push(message)
        })


        SocketService.on('type msg',isTyping => {
                this.isTyping = true;
        })
        SocketService.on('stop type msg',isTyping => {
            this.isTyping = false;
        })


        SocketService.on('message history' , messages => {
            messages.filter(msg => {
                if( msg.roomId === this.toyId){
                    this.msgsHistory.push(msg.msg);
                }
            })
        })
	},
};
</script>

<style>
</style>


// <li v-for="(msgz,idx) in msgsHistory" :key="idx + msgz">
// 						<p>{{msgz.name}}: {{msgz.txt}}</p>
// 					</li>