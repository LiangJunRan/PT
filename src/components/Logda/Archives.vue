<template>
	<div class="surfaceList">
		<ul>
			<li @click="goxueya()">
				<div>
					<img src="./img/layout_icon_xueya.png" width="40"/>
					<span style="transform: translate(5px,-15px);" >血压指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">舒张压：</span> <span>71.0</span> </p>
					<p> <span class="title">收缩压：</span> <span>130.0</span> </p>
					<p> <span class="title">脉搏：</span> <span>71</span> </p>
				</div>
			</li>
			
			<li @click="goxuetang()">
				<div>
					<img src="./img/layout_icon_xuetang.png" width="40"/>
					<span style="transform: translate(5px,-15px);">血糖指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">血糖值：</span> <span>8.6</span> </p>
				</div>
			</li>
			<li @click="goxueyang()">
				<div>
					<img src="./img/layout_icon_xueyang.png" width="40"/>
					<span style="transform: translate(5px,-15px);">血氧指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">氧气值：</span> <span>98.0</span> </p>
				</div>
			</li>
			<li @click="goshengao()">
				<div>
					<img src="./img/layout_icon_shengao.png" width="40"/>
					<span style="transform: translate(5px,-15px);">身高体重指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">身高：</span> <span>163.5</span> </p>
					<p> <span class="title">体重：</span> <span>65.8</span> </p>
					<p> <span class="title">BMI：</span> <span>24.6</span> </p>
					
				</div>
			</li>
			<li @click="godanguchun()">
				<div>
					<img src="./img/layout_icon_danguchun.png" width="40"/>
					<span style="transform: translate(5px,-15px);">胆固醇指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">胆固醇值：</span> <span>145.0</span> </p>
				</div>
			</li>
			<li @click="goniaosuan()">
				<div>
					<img src="./img/layout_icon_niaosuan.png" width="40"/>
					<span style="transform: translate(5px,-15px);">尿酸指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">尿酸值：</span> <span>345.0</span> </p>
				</div>
			</li>
			<li @click="gogumidu()">
				<div>
					<img src="./img/layout_icon_gumidu.png" width="40"/>
					<span style="transform: translate(5px,-15px);">骨密度指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">T值：</span> <span>-5.35</span> </p>
					<p> <span class="title">Z值：</span> <span>-1.32</span> </p>
				</div>
			</li>
			<li @click="goshuimian()">
				<div>
					<img src="./img/layout_icon_shuimian.png" width="40"/>
					<span style="transform: translate(5px,-15px);">睡眠指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">睡眠总时长：</span> <span>12.0</span> </p>
					<p> <span class="title">深度睡眠：</span> <span>12.0</span> </p>
					<p> <span class="title">浅度睡眠：</span> <span>12.0</span> </p>
				</div>
			</li>
			<li @click="goxinlv()">
				<div>
					<img src="./img/layout_icon_xinlv.png" width="40"/>
					<span style="transform: translate(5px,-15px);">心率指标</span>
				</div>
				<div class="Info">
					<p> <span class="title">时间：</span> <span>2018-07-02 21:07:29</span> </p>
					<p> <span class="title">心率：</span> <span>87.0</span> </p>
				</div>
			</li>

		</ul>
	</div>
</template>

<script>
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
}
</script>

<style scoped>
.surfaceList{
	width: 100%;
	min-height: 200px;
}

ul{
	width: 100%;
	height: auto;
	overflow: hidden;
}

ul li{
	background: #fff;
    float: left;
    width: 230px;
    margin: 10px;
    padding: 30px 10px;
    border: 1px #ccc solid;
    box-shadow: 1px 1px 5px #ccc;
	cursor: pointer;
}

ul li:hover{
	box-shadow: 1px 2px 5px #2A953B;
}

ul li>div{
	text-align:left;
	height: 40px;
}

ul li>div span{
	display: inline-block;
}

.Info{
	margin-top: 10px;
	width: 100%;
	height: 80px;
	overflow: hidden;
	font-size: 12px;
	color: #8FC3AF;
}

.Info:hover{
	color:red;
}

.Info p{
	width: 100%;
	height: 20px;
	line-height: 20px;
	margin: 0 !important;
}

.Info p .title{
	width: 75px;
}

</style>