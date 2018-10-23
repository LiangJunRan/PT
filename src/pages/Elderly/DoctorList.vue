<template>
	<div>
		<ElderlyHeader></ElderlyHeader>
		<el-container style="height: 100%; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: #F5F5F5">
				<ul class="aside">
					<li @click="goysxxk()">
						<a :class="{cur:'/doctorList/doctorListS'===$route.path}">医生信息库</a>
					</li>
					<li @click="gowdzx()">
						<a :class="{cur:'/doctorList/active'===$route.path}">我的咨询</a>
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
	components:{
		ElderlyHeader
	},
	methods:{
		goysxxk(){
			this.$router.push({ path: '/doctorList/doctorListS' })
		},
		gowdzx(){
			this.$router.push({ path: '/doctorList/doctorListS' })
		}
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