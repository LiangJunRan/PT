<template>
	<header class="clearfix">
		<div class="logo">
			<img src="./img/layout_set_logo.png" width="168" height="49"/>
		</div>
		<div class="nav">
			<ul>
				<li :class="{cur: $route.path.startsWith('/elderly') }" @click="goElderlyIndex()">
					<img src="./img/layout_icon.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">首页</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/test') }" @click="goElderlyTest()">
					<img src="./img/layout_icon_test.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">健康检测</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/log') }" @click="goElderlyLog()">
					<img src="./img/layout_icon_log.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">健康日志</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/custody') }" @click="goElderlyCustody()">
					<img src="./img/layout_icon_custody.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">健康监护</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/server') }" @click="goElderlyServer()">
					<img src="./img/layout_icon_server.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">服务预定</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/relative') }" @click="goElderlyRelative()">
					<img src="./img/layout_icon_relative.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">亲人关怀</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/doctorList') }" @click="goElderlyDoctorList()">
					<img src="./img/layout_icon_doctor.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">家庭医生</span>
				</li>
			</ul>
		</div>
		<div class="user" style="float: right;">
			<img src="./img/user_male_portrait.png" width="40" height="40"/>
			<div class="btn1">
				<span>老人</span><br/>
				<span>帮助</span> &nbsp;&nbsp; <span>退出</span>
			</div>
		</div>
	</header>
</template>

<script>
export default{
	methods:{
		goElderlyIndex(){
			this.$router.push({ path: '/elderly' })
		},
		goElderlyTest(){
			this.$router.push({ path: '/test' })
		},
		goElderlyLog(){
			this.$router.push({ path: '/log' })
		},
		goElderlyCustody(){
			this.$router.push({ path: '/custody' })
		},
		goElderlyServer(){
			this.$router.push({ path: '/server' })
		},
		goElderlyRelative(){
			this.$router.push({ path: '/relative' })
		},
		goElderlyDoctorList(){
			this.$router.push({ path: '/doctorList' })
		}
	}
}
</script>

<style scoped>
header{
	width: 100%;
	min-width: 1260px;
	height: 90px;
	background: url(./img/yy_01.jpg) no-repeat left top/100% 150px;
	overflow: hidden;
}

header>div{
	float: left;
}

.logo{
	width: 205px;
	height:85px;
	text-align: center;
}

.logo img{
	display: inline-block;
	margin: 0 auto;
	transform: translateY(16px);
}

.nav{
	background: #499F58;
}

.nav ul li{
	float: left;
	cursor: pointer;
	width: 90px; 
	height: 90px; 
	display: flex; 
	flex-direction:column;
}

.nav ul li:hover{
	background: #32894F;
}

.nav ul li.cur{
	background: #32894F;
}

.user{
	display: flex;
	margin: 20px 20px 0px 0px;
	text-align: left;
	color: #FFFFFF;
	font-size:14px;
}

.user img{
	border-radius:50%;
	border: 2px #FFFFFF solid;
	margin-right: 5px;
}

.user .btn1{
	line-height: 24px;
}
</style>