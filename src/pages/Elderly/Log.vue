<template>
	<div class="log">
		<ElderlyHeader></ElderlyHeader>
		<el-container style="height: 100%; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: #F5F5F5">
				<ul class="aside">
					<li @click="gogrda()">
						<a :class="{cur:'/log/archives'===$route.path}">个人档案</a>
					</li>
					<li @click="gorz()">
						<a :class="{cur:'/log/active'===$route.path}">日志</a>
					</li>
					<li @click="goyybl()">
						<a :class="{cur:'/log/hospitalization'===$route.path}">医院病历</a>
					</li>
					<li @click="gojyxm()">
						<a :class="{cur:'/log/inspect'===$route.path}">检验项目</a>
					</li>
					<li @click="goyyjl()">
						<a :class="{cur:'/log/drug'===$route.path}">用药记录</a>
					</li>
					<li @click="gossjl()">
						<a :class="{cur:'/log/operation'===$route.path}">手术记录</a>
					</li>
					<li @click="goywgm()">
						<a :class="{cur:'/log/drugAllergy'===$route.path}">药物过敏</a>
					</li>
				</ul>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import ElderlyHeader from './ElderlyHeader.vue'

export default{
	
	methods:{
		gogrda(){
			this.$router.push({ path: '/log/archives' })
		},
		gorz(){
			this.$router.push({ path: '/log/active' })
		},
		goyybl(){
			this.$router.push({ path: '/log/hospitalization' })
		},
		gojyxm(){
			this.$router.push({ path: '/log/inspect' })
		},
		goyyjl(){
			this.$router.push({ path: '/log/drug' })
		},
		gossjl(){
			this.$router.push({ path: '/log/operation' })
		},
		goywgm(){
			this.$router.push({ path: '/log/drugAllergy' })
		},
	},
	
	components:{
		ElderlyHeader,
	}
}
</script>

<style scoped>
.log{
	text-align: left;
	width: 100%;
	min-height: 200px;
}


.aside{
	width: 100%;
	min-height: 200px;
}

.aside li{
	line-height: 30px;
    text-align: left;
    border-bottom: 0;
    background: #f5f7f8;
	cursor: pointer;
}

.aside li a{
	padding-left: 36px;
    font-weight: normal;
    color: #787878;
    font-size: 14px;
    background: whitesmoke url(./img/yymap_03.png) left center no-repeat;
    height: 36px;
    line-height: 36px;
    display: block;
    border-bottom: 1px solid #e6e6e6;
}

.aside li a:hover{
	color: #fff;
    background: #22955a url(./img/yymap_04.png) left center no-repeat;
    display: block;
}

.aside li a.cur{
	color: #fff;
    background: #22955a url(./img/yymap_04.png) left center no-repeat;
    display: block;
}
</style>

<style>
	.log main{
		/* padding-left: 0; */
	}
</style>