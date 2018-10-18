<template>
	<div class="healthy">
		<HomeHeader></HomeHeader>
		<div class="content">
			<div class="top">
				<img src="./img/Healthy.jpg" />
			</div>
			
			<div class="main clearfix">
				
				
				<div class="list">
					<div class="list_title">
						<h4>老年病防治与保健</h4>
						<span @click="goHealthyList()">更多>></span>
					</div>
					
					<div class="items">
						<ul>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
						</ul>
					</div>
				</div>
				
				
				<div class="list" style="padding-left: 25px;">
					<div class="list_title">
						<h4>老年病防治与保健</h4>
						<span>更多>></span>
					</div>
					
					<div class="items">
						<ul>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
						</ul>
					</div>
				</div>
				
				
				<div class="list">
					<div class="list_title">
						<h4>老年病防治与保健</h4>
						<span>更多>></span>
					</div>
					
					<div class="items">
						<ul>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
						</ul>
					</div>
				</div>
				
				
				<div class="list" style="padding-left: 25px;">
					<div class="list_title">
						<h4>老年病防治与保健</h4>
						<span>更多>></span>
					</div>
					
					<div class="items">
						<ul>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
						</ul>
					</div>
				</div>
				
				
				<div class="list">
					<div class="list_title">
						<h4>老年病防治与保健</h4>
						<span>更多>></span>
					</div>
					
					<div class="items">
						<ul>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
							<li>
								<a href="#">[生活方式管理]中医药健康教育处方-冠心病</a>
								<span>(2018-08-28)</span>
							</li>
						</ul>
					</div>
				</div>
				
				
				
			</div>
		</div>
		<HomeFooter></HomeFooter>
	</div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'
export default{
	
	components:{
		HomeHeader,
		HomeFooter,
	},
	
	methods:{
		goHealthyList(){
			this.$router.push('/healthyList')
		}
	}
	
}
</script>

<style scoped>
.healthy{
	width: 100%;
}
.content{
	width: 100%;
	min-height: 100px;
	padding-top:20px;
	margin: 0 auto;
}
.top{
	height: 120px;
	width: 1160px;
	margin: 0 auto;
}

.main{
	width: 1160px;
	padding-top: 30px;
	margin: 0 auto;
	min-height: 100px;
	font-size: 14px;
}

.list{
	float: left;
	/* width: 560px; */
	margin-bottom: 10px;
}

.list_title{
	height: 36px;
	border-bottom: 2px solid #3a9000;
	color: #3a9000;
    font-size: 18px;
	text-align: left;
}

.list h4{
	display: inline-block;
	font-size: 18px;
    font-weight: bold;
    line-height: 36px;
	width: 500px;
}

.list .list_title span{
	display: inline-block;
	transform: translateX(10px);
	font-size: .8em;;
	color: #333333;
	cursor: pointer;
}

.list .items{
	width: 100%;
	padding: 12px 10px 10px 10px;
	text-align:left;
}

.list .items ul li{
	padding: 10px 0px;
}

.list .items li a{
	display: inline-block;
	width: 450px;
	color: #333333;
	font-weight: 200;
}

.list .items li a:hover{
	color: #000000;
	font-weight: 500;
}

.list .items li span{
	display: inline-block;
	text-align: right;
}
</style>