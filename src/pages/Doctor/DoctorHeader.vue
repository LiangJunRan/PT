<template>
	<header class="clearfix">
		<div class="logo">
			<img src="./img/layout_set_logo.png" width="168" height="49"/>
		</div>
		<div class="nav">
			<ul>
				<li :class="{cur: $route.path.startsWith('/doctor') }" @click="goDoctorIndex()">
					<img src="./img/layout_icon.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">首页</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/consult') }" @click="goConsultTest()">
					<img src="./img/layout_icon_wenti.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">咨询问题</span>
				</li>
				<li :class="{cur: $route.path.startsWith('/evaluate') }" @click="goEvaluate()">
					<img src="./img/layout_icon_pinggu.png" width="48" height="48" style="margin: 6px auto;"/>
					<span style="color: #FFFFFF;text-align: center;">健康评估</span>
				</li>
				
				
			</ul>
		</div>
		<div class="user" style="float: right;">
			<img src="./img/user_male_portrait.png" width="40" height="40"/>
			<div class="btn1">
				<span>医生</span><br/>
				<span>帮助</span> &nbsp;&nbsp; <span>退出</span>
			</div>
		</div>
	</header>
</template>

<script>
export default{
	methods:{
		goDoctorIndex(){
			this.$router.push({path:'/doctor'})
		},
		goConsultTest(){
			this.$router.push({path:'/consult'})
		},
		goEvaluate(){
			this.$router.push({path:'/evaluate'})
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