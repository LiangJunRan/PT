<template>
	<div>
		<ElderlyHeader></ElderlyHeader>
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: #F5F5F5">
				<ul class="aside">
					<li @click="goList()">
						<a :class="{cur:'/test/healthyInfoLists'===$route.path}">健康检测</a>
					</li>
					<li @click="goxueya()">
						<a :class="{cur:'/test/bloodPressureInfo'===$route.path}">血压指标</a>
					</li>
					<li @click="goxuetang()">
						<a :class="{cur:'/test/bloodSugerInfo'===$route.path}">血糖指标</a>
					</li>
					<li @click="goxueyang()">
						<a :class="{cur:'/test/bloodOxygenInfo'===$route.path}">血氧指标</a>
					</li>
					<li @click="goshengao()">
						<a :class="{cur:'/test/heightWeightInfo'===$route.path}">身高体重指标</a>
					</li>
					<li @click="godanguchun()">
						<a :class="{cur:'/test/cholesterolInfo'===$route.path}">胆固醇指标</a>
					</li>
					<li @click="goniaosuan()">
						<a :class="{cur:'/test/uricAcidInfo'===$route.path}">尿酸指标</a>
					</li>
					<li @click="gogumidu()">
						<a :class="{cur:'/test/boneDensityInfo'===$route.path}">骨密度指标</a>
					</li>
					<li @click="goshuimian()">
						<a :class="{cur:'/test/sleepInfo'===$route.path}">睡眠指标</a>
					</li>
					<li @click="goxinlv()">
						<a :class="{cur:'/test/heartRateInfo'===$route.path}">心率指标</a>
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
		goList(){
			this.$router.push({ path: '/test/healthyInfoLists' })
		},
		goxuetang(){
			this.$router.push({ path: '/test/bloodSugerInfo' })
		},
		goxueya(){
			this.$router.push({ path: '/test/bloodPressureInfo' })
		},
		goxueyang(){
			this.$router.push({ path: '/test/bloodOxygenInfo' })
		},
		goshengao(){
			this.$router.push({ path: '/test/heightWeightInfo' })
		},
		godanguchun(){
			this.$router.push({ path: '/test/cholesterolInfo' })
		},
		goniaosuan(){
			this.$router.push({ path: '/test/uricAcidInfo' })
		},
		gogumidu(){
			this.$router.push({ path: '/test/boneDensityInfo' })
		},
		goshuimian(){
			this.$router.push({ path: '/test/sleepInfo' })
		},
		goxinlv(){
			this.$router.push({ path: '/test/heartRateInfo' })
		}
	},
	
	components:{
		ElderlyHeader,
	}
}
</script>

<style scoped>
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
.surface{
	width: 100%;
	min-height: 200px;
}
</style>