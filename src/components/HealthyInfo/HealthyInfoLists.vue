<template>
	<div class="surfaceList">
		<ul>
			<li @click="goxueya()">
				<div>
					<img src="./img/layout_icon_xueya.png" width="40"/>
					<span>血压指标</span>
				</div>
			</li>
			<li @click="goxuetang()">
				<div>
					<img src="./img/layout_icon_xuetang.png" width="40"/>
					<span>血糖指标</span>
				</div>
			</li>
			<li @click="goxueyang()">
				<div>
					<img src="./img/layout_icon_xueyang.png" width="40"/>
					<span>血氧指标</span>
				</div>
			</li>
			<li @click="goshengao()">
				<div>
					<img src="./img/layout_icon_shengao.png" width="40"/>
					<span>身高体重指标</span>
				</div>
			</li>
			<li @click="godanguchun()">
				<div>
					<img src="./img/layout_icon_danguchun.png" width="40"/>
					<span>胆固醇指标</span>
				</div>
			</li>
			<li @click="goniaosuan()">
				<div>
					<img src="./img/layout_icon_niaosuan.png" width="40"/>
					<span>尿酸指标</span>
				</div>
			</li>
			<li @click="gogumidu()">
				<div>
					<img src="./img/layout_icon_gumidu.png" width="40"/>
					<span>骨密度指标</span>
				</div>
			</li>
			<li @click="goshuimian()">
				<div>
					<img src="./img/layout_icon_shuimian.png" width="40"/>
					<span>睡眠指标</span>
				</div>
			</li>
			<li @click="goxinlv()">
				<div>
					<img src="./img/layout_icon_xinlv.png" width="40"/>
					<span>心率指标</span>
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
    width: 200px;
    margin: 10px;
    padding: 30px 20px;
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
	transform: translate(5px,-15px);
}


</style>