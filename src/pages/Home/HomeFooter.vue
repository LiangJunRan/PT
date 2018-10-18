<template>
	<footer id="footer" role="contentinfo"> 
		<ul class="footabout"> 
			<li> 
				<h4>主办单位</h4> 
				<img src="./img/cdyy_logo.png" width="319" height="48" style="margin-bottom: 30px;"><br> 
				<p style="color:#bbcddf; font-size:19px;">“医养结合”大数据 · 健康就在您身边</p> 
			</li> 
			<li class="cpfw"> 
					<h4>产品与服务</h4> 
					<a href="#" target="_blank">个人健康档案</a> 
					<a href="#" target="_blank">居家养老电视端</a><br> 
					<a href="#" target="_blank">健康宝</a> 
					<a href="#" target="_blank">家庭医生</a><br> 
					<a href="#" target="_blank">亲人自助中心 </a> 
					<a href="#" target="_blank">社区服务中心 </a> 
			</li> 
			<li> 
				<h4>智慧城市驻四川华迪办事处</h4> 
				<div class="lxdh"> 售后：400-856-4288 / 028-84628008 </div> 
				<div class="gsemail">www.nuc.edu.cn/</div> 
				<div class="gsaddress"> 山西省太原市尖草坪区学院路三号中北大学 </div> 
			</li> 
		</ul> 
	</footer>
</template>

<script>
	
</script>

<style scoped>
/* 尾部 */
footer{
	text-align: center;
  background: url(./img/foot_bg.png) no-repeat left/100% 100%;
  font-size: 16px;
  color: #fff;
}

footer .footabout {
    overflow: hidden;
    margin: 0 auto;
    list-style: none;
    width: 1160px;
    padding-bottom: 10px;
}

footer .footabout li {
    float: left;
    text-align: left;
    min-width: 360px;
    padding: 0 0 20px 10px;
    line-height: 35px;
}

footer .footabout li h4{
	font-size: 18px;
    margin: 30px 0;
}

footer .footabout img{
	   max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
}

footer .footabout p{
	margin: 0 0 10px;
}

footer .footabout .cpfw{
		line-height: 49px;
		
}

footer .cpfw a{
	  width: 170px;
    display: block;
    float: left;
		color: #FFFFFF;
}

footer .lxdh{
	  background: url(./img/phone.png) no-repeat left center;
    padding-left: 40px;
}

footer .gsemail{
	background: url(./img/yx.png) no-repeat left center;
	padding-left: 40px;
}

footer .gsaddress{
	background: url(./img/dw.png) no-repeat left center;
	padding-left: 40px;
}

</style>