<template>
	<div class="login">
		<HomeHeader></HomeHeader>
		<div class="main">
			<div>
				<div class="img">
					<img src="./img/2.png"/>
				</div>
				<div class="from">
					<h2>用户登录</h2>
					<div class="input">
						<div class="inputName">
							<i class="iconfont icon-user"></i><input placeholder="请输入用户名" type="text" v-model="username" />
						</div>
						<div class="inputPassword">
							<i class="iconfont icon-password"></i><input placeholder="请输入密码" type="password" v-model="password" />
						</div>
					</div>
					
					<div class="btn_login" @click="goElderly()">
						<span>登录</span>
					</div>
					<div class="btn_login" style="transform: translateY(-40px);" @click="goRegister()">
						<span>注册</span>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import HomeHeader from '../Home/HomeHeader'

export default{
	
	data(){
		return{
			username:'',
			password:''
		}
	},
	
	components:{
		HomeHeader,
	},
	
	methods:{
		goElderly(){
			
			if (this.username === 'lr') {
				
				this.$router.push({path: 'elderly'})
			} else if(this.username === 'ys'){
				this.$router.push({path: 'doctor'})
			}
			
			
		},
		goRegister(){
			this.$router.push({path:'register'})
		}
	}
}

</script>

<style scoped>
.login{
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.main{
	width: 100%;
	margin: 0 auto;
	height: 598px;
	background: url(./img/loginbg.png) no-repeat center top;
}

.main>div{
	width: 1160px;
	margin: 0 auto;
}

.main .img{
	float: left;
	width: 600px;
	height: 395px;
	transform: translateY(140px);
}

.main .from{
	color: #FFFFFF;
	text-align: left;
	float: right;
	width: 335px;
	height: 598px;
	background: rgba(38,43,45,0.3);
	padding: 60px 30px 0 35px;
}

.from h2{
	font-size: 24px;
	font-weight: 800;
	letter-spacing:5px;
	margin-bottom: 60px;
}

.from .input>div{
	line-height: 55px;
	width: 100%;
	padding-left:5px;
	height: 55px;
	background: #2A953B;
	border: 1 solid #000000;
	border-radius: 5px;
	margin-bottom: 5px;
}

.from .input i{
	font-size: 24px;
}

.from .input input{
	border-radius:5px;
	height: 30px;
	width: 220px;
	transform: translateY(-5px);
	margin-left: 10px;
	padding-left: 10px;
	color: #000000;
}

.from .btn_login{
	text-align: center;
	line-height: 50px;
	margin-top: 70px;
	width: 100%;
	height: 50px;
	background: rgb(18,110,213);
	cursor: pointer;
}
</style>