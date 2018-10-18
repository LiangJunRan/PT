<template>
	<div class="elderly">
		<ElderlyHeader></ElderlyHeader>
		<div class="content">
			
			<el-row :gutter="20">
				<!-- 预警信息 -->
				<el-col :span="16">
					<div class="warning port">
						<div class="title">
							<h3 class="disinbl">预警信息</h3>
							<span class="disinbl" @click="goyjxx()" >查看更多>></span>
						</div>
						<div class="lists">
							<ul>
								<li v-for="(warningList,index) in warningLists" :key="index">
									<div>
										<img src="./img/warning.png" width="40"/>
										<h5>{{warningList.value}}</h5>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</el-col>
				<!-- 个人信息 -->
				<el-col :span="8">
					<div class="PersonalInfo port">
						<div class="title">
							<h3 class="disinbl">个人信息</h3>
							<span class="disinbl">查看更多>></span>
						</div>
						<div class="clearfix" style="display: flex;">
							<div class="img" style="">
								<img src="./img/QQ头像.jpg" width="150"/>
							</div>
							<div class="perInfo" style=" width: 240px; margin:15px 0px 50px 15px;transform: rotateX(150px);">
								<p> <i class="iconfont icon-yonghu"></i>姓名：<span>姓名</span> </p>
								<p> <i class="iconfont icon-weibiaoti-"></i>电话：<span>188-0000-0000</span> </p>
								<p> <i class="iconfont icon-zan1" style="color:red;"></i>年龄：<span>60</span> </p>
								<p> <i class="iconfont icon-dizhi"></i>地址：<span>山西省太原市尖草坪区学院路3号</span> </p>
							</div>
						</div>
						
					</div>
				</el-col>
			</el-row>
			
			<el-row :gutter="0">
				
				<!-- 指标标题 -->
				<el-col :span="8">
					<div class="BloodPressure port">
						<div class="title" @click="goxueya()">
							<h3 class="disinbl" :class="{cur:'/elderly/bloodPressureInfo'===$route.path}">血压指标</h3>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="BloodSuger port">
						<div class="title" @click="goxuetang()">
							<h3 class="disinbl" :class="{cur:'/elderly/bloodSugerInfo'===$route.path}">血糖指标</h3>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="BloodOxygen port">
						<div class="title" @click="goxueyang()">
							<h3 class="disinbl" :class="{cur:'/elderly/bloodOxygenInfo'===$route.path}">血氧指标</h3>
						</div>
					</div>
				</el-col>
				
				<!-- 指标表格 -->
				<div class="surface">
					<router-view></router-view>
				</div>
			</el-row>
		</div>
	</div>
</template>

<script>
import ElderlyHeader from './ElderlyHeader.vue'



export default{
	
	data(){
		return{
			warningLists:[
				{
					id:1,
					value:"2017-09-23 16:26:42,测量了BMI：BMI:26.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察!请注意观察!请注意观察!",
				},
				{
					id:2,
					value:"2017-09-30 16:26:42,测量了BMI：BMI:26.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察!请注意观察!请注意观察!",
				},
				{
					id:3,
					value:"2017-10-23 16:26:42,测量了BMI：BMI:26.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察!请注意观察!请注意观察!",
				},
				{
					id:4,
					value:"2017-11-23 16:26:42,测量了BMI：BMI:26.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察!请注意观察!请注意观察!",
				},
			]
		}
	},
	
	methods:{
		goxueya(){
			this.$router.push({ path: '/elderly/bloodPressureInfo' })
		},
		goxuetang(){
			this.$router.push({ path: '/elderly/bloodSugerInfo' })
		},
		goxueyang(){
			this.$router.push({ path: '/elderly/bloodOxygenInfo' })
		},
		goyjxx(){
			this.$router.push( {path: '/custody/alertQuery'} )
		}
	},
	
	components:{
		ElderlyHeader,
	}
}

</script>

<style scoped>
.elderly{
	text-align: left;
	width: 100%;
	min-height: 200px;
}

.content{
	width: 1260px;
	margin: 10px auto 0 auto;
	min-height: 200px;
}

.port{
	border: 1px solid #E5E5E5;
}

.port .cur{
	color: #2A953B;
}

.port .title{
	height:40px;
	border-width: 1px 1px 2px;
	border-style:solid ;
	border-color: #E5E5E5 #E5E5E5 #00af90;  
	border-radius: 5px;
	cursor: pointer;
}


.port .title h3{
	height: 40px;
	width: 200px;
	margin-left: 15px;
	line-height:40px;
	font-size: 24px;
	font-weight:600;
	letter-spacing: 3px;
}

.port .title span{
	float: right;
	font-size: 14px;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	color: #2A953B;
	padding-right:10px;
}

.lists li{
	height:60px;
	border-bottom: 1px solid #E5E5E5;
}

.lists li div{
	height: 60px;
	line-height:60px;
}

.lists li img{
	transform: translate(5px,10px); 
	float: left;
}

.lists li h5{
	float: left;
	padding-left: 20px; 
	line-height:60px;
	font-size:14px; 
	width: 700px; 
	height: 60px; 
	white-space:nowrap; 
	overflow: hidden; 
	text-overflow:ellipsis;
}

.PersonalInfo .img{
	width: 150px;
	height: 150px;
	margin: 15px 0 0 15px;
}

.PersonalInfo .perInfo p{
	height: 30px;
	font-size: 16px;
	width: 200px;
}

.PersonalInfo .perInfo i{
	margin-right:5px;font-size: 20px;color: #2A953B;
}

.surface{
	width: 100%;
	height: 300px;
	border: 1px solid #E5E5E5;
}

</style>