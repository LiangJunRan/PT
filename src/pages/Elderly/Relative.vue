<template>
	<div class="relative">
		<ElderlyHeader></ElderlyHeader>
		<el-container style="height: 100%; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: #F5F5F5">
				<ul class="aside">
					<li @click="godw()">
						<a :class="{cur:'/custody/location'===$route.path}">亲人档案</a>
					</li>
					<li @click="gobj()">
						<a :class="{cur:'/custody/alertQuery'===$route.path}">档案管理</a>
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
		ElderlyHeader,
	}
}
</script>

<style scoped>
.custody{
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