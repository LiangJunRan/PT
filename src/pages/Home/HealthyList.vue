<template>
	<div class="healthyList">
		<HomeHeader></HomeHeader>
		<div class="content">
			<div class="list">
				<div class="list_title">
					<h4>老年病防治与保健</h4>
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
						
						<div class="paging">
							<button>首页</button>
							<button>上一页</button>
							<span>1/100</span>
							<button>下一页</button>
							<button>末页</button>
						</div>
						
					</ul>
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
	}
	
}
</script>

<style scoped>
.healthyList{
	width: 100%;
}
.content{
	width: 100%;
	min-height: 100px;
	
}

.list{
	
	width:1160px;
	margin: 0 auto;
	margin-bottom: 10px;
	margin-top: 20px;
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
	padding: 15px 0px;
	border-bottom: 1px dashed #ccc;
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
	float: right;
	transform: translateX(-10px);
}

.list .paging{
	height:35px;
	width: 100%;
	padding: 10px 0;
}
</style>