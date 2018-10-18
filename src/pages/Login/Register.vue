<template>
	<div class="login">
		<HomeHeader></HomeHeader>
		<div class="main">
			<div>
				<div class="img">
					<img src="./img/2.png"/>
				</div>
				<div class="from">
					<h2>用户注册</h2>
					<div class="input">
						<div class="inputName">
							<i class="iconfont icon-user"></i><input placeholder="请输入用户名" type="text" v-model="username" />
						</div>
						<div class="inputPassword">
							<i class="iconfont icon-password"></i><input placeholder="请输入密码" type="password" v-model="password" />
						</div>
						<div class="inputPassword">
							<i class="iconfont icon-password"></i><input placeholder="请再次输入密码" type="password" v-model="repassword" />
						</div>
						<div class="inputUserType">
							<el-select v-model="userType" size="mini" placeholder="请选择">
								<el-option
								  v-for="item in options"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
							  </el-select>
						</div>
					</div>
					<div class="btn_login"  @click="goElderly()">
						<span>注册</span>
					</div>
					<div class="btn_login" style="transform: translateY(-40px);" @click="goLogin()">
						<span>登录</span>
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
			password:'',
			repassword:'',
			userType:'',
			options: [{
			value: '1',
			label: '老人'
			}, {
			value: '2',
			label: '医生'
			}, {
			value: '3',
			label: '服务商'
			}, {
			value: '4',
			label: '龙须面'
			}, {
			value: '5',
			label: '北京烤鸭'
			}],
		}
		
	},
	
	components:{
		HomeHeader,
	},
	
	methods:{
		goElderly(){
			console.log("开始注册")
			if(this.password == this.repassword){
				
				console.log("密码核对")
				console.log(this.userType)
				switch(this.userType)
				{
					case "1" : 
						this.$router.push({ path: 'elderly' })
						break;
					case "2" : 
						this.$router.push({ path: 'doctor' })
						break;
					default:
						alert("类型不对")
				}
				
			}else{
				alert("两次密码不一致")
			}
			
		},
		goLogin(){
			this.$router.push( { path:'login' })
		}
	},
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
	margin-bottom: 30px;
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
	color: #000000;
	margin-left: 10px;
	padding-left: 10px;
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