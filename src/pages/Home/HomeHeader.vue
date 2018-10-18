<template>
	<header>
		<div class="content">
			<div class="logo">
				<img src="./img/layout_set_logo.png" />
			</div>
			<div class="nav">
				<ul>
					<li :class="{cur: '/home'===$route.path}" @click="goHome()">
						<span>首页</span>
					</li>
					<li :class="{cur: '/healthy'===$route.path}" @click="goHealthy()">
						<span>健康教育</span>
					</li>
					<li :class="{cur: '/new'===$route.path}" @click="goNew()">
						<span>新闻资讯</span>
					</li>
					<li :class="{cur: '/product'===$route.path}" @click="goProduct()">
						<span>产品介绍</span>
					</li>
					<li :class="{cur: '/about'===$route.path}" @click="goAbout()">
						<span>关于我们</span>
					</li>
				</ul>
			</div>
			<div class="login">
				<div class="btn_login">
					<span @click="goLogin()">登录</span>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default{
	methods:{
		goHome(){
			this.$router.push('/home')
		},
		goHealthy(){
			this.$router.push('/healthy')
		},
		goNew(){
			this.$router.push('/new')
		},
		goProduct(){
			this.$router.push('/product')
		},
		goAbout(){
			this.$router.push('/about')
		},
		goLogin(){
			this.$router.push('/login')
		}
		
	}
}

</script>

<style scoped>
header{
	width: 100%;
	height: 70px;
	background: url(./img/nav_bg.jpg) no-repeat left/100% 100%;
}

.content{
	width: 1170px;
	height: 70px;
	margin: 0 auto;
}

.content .logo{
	float: left;
	margin: 10px 0 0 0;
}

.nav{
	margin-left:10px;
	float: left;
}

.nav ul li{
	height:65px;
	float: left;
	line-height:68px;
	/* width: 64px; */
	cursor: pointer;
}

.cur{
	border-bottom: 2px solid #FFFFFF;
}

.nav ul li:hover{
	border-bottom: 2px solid #FFFFFF;
}

.nav li span{
	margin: 14px 16px;
	color: #FFFFFF;
	font-size: 16px;
}

.login{
	float: right;
	
}

.login .btn_login{
	transform: translateY(15px);
	border: 2px solid #FFFFFF;
	border-radius: 5px;
	padding: 5px 16px;
	cursor: pointer;
}

.login span{
	color: #FFFFFF;
}
</style>