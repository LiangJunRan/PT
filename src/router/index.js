import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Healthy from '@/pages/Home/Healthy'
import HealthyList from '@/pages/Home/HealthyList'
import New from '@/pages/Home/New'
import Product from '@/pages/Home/Product'
import About from '@/pages/Home/About'

import Login from '@/pages/Login/Login'
import Register from '@/pages/Login/Register'

import Elderly from '@/pages/Elderly/Elderly'
import Test from '@/pages/Elderly/Test'
import Log from '@/pages/Elderly/Log'
import Custody from '@/pages/Elderly/Custody'
import Server from '@/pages/Elderly/Server'
import Relative from '@/pages/Elderly/Relative'
import DoctorList from '@/pages/Elderly/DoctorList'

// 健康信息表
import HealthyInfoLists from '@/components/HealthyInfo/HealthyInfoLists'	//列表
import BloodSugerInfo from '@/components/HealthyInfo/BloodSugerInfo'		//血糖
import BloodPressureInfo from '@/components/HealthyInfo/BloodPressureInfo'		//血压
import BloodOxygenInfo from '@/components/HealthyInfo/BloodOxygenInfo'		//血氧
import HeightWeightInfo from '@/components/HealthyInfo/HeightWeightInfo'		//身高体重
import CholesterolInfo from '@/components/HealthyInfo/CholesterolInfo'		//胆固醇
import UricAcidInfo from '@/components/HealthyInfo/UricAcidInfo'		//尿酸
import BoneDensityInfo from '@/components/HealthyInfo/BoneDensityInfo'		//骨密度
import SleepInfo from '@/components/HealthyInfo/SleepInfo'		//睡眠
import HeartRateInfo from '@/components/HealthyInfo/HeartRateInfo'		//心率

// 日志子目录
import Archives from '@/components/Logda/Archives'	//个人档案
import Active from '@/components/Logda/Active'		//活动
import Hospitalization from '@/components/Logda/Hospitalization'		//住院
import Inspect from '@/components/Logda/Inspect'		//检验项目
import Drug from '@/components/Logda/Drug'		//用药记录
import Operation from '@/components/Logda/Operation'		//手术记录
import DrugAllergy from '@/components/Logda/DrugAllergy'		//药物过敏

//健康监护
import Location from '@/components/CustodyInfo/Location'	//定位
import AlertQuery from '@/components/CustodyInfo/AlertQuery'	//警报查询
import AlertSetting from '@/components/CustodyInfo/AlertSetting'	//警报设置

//服务预定
import ServerInfo from '@/components/Server/ServerInfo'	//服务列表
import ServerRecord from '@/components/Server/ServerRecord'	//预定记录

//家庭医生
import DoctorListS from '@/pages/Elderly/DoctorListS'



//医生
import Doctor from '@/pages/Doctor/Doctor'

import Consult from '@/pages/Doctor/Consult'

import HealthyEvaluate from '@/pages/Doctor/HealthyEvaluate'

Vue.use(Router)

export default new Router({
  routes: [
		{path:'/',redirect:'/home'},
		{path: '/home',component: Home},
		{path:'/healthy',component: Healthy,},
		{path:'/healthyList',component:HealthyList,},
		{path:'/new',component: New,},
		{path:'/product',component: Product},
		{path:'/about',component: About,},
		{path:'/login',component:Login,},
		{path:'/register',component:Register,},
		
		//老人阶段
		//老人首页
		{
			path:'/elderly',
			component:Elderly,
			children:[
				{	//默认显示
            path:'',
            redirect:'/elderly/bloodSugerInfo'
        },
				{
						path:'bloodSugerInfo',	//血糖
						component:BloodSugerInfo,
				},
				{
						path:'bloodPressureInfo',	//血压
						component:BloodPressureInfo,
				},
				{
						path:'bloodOxygenInfo',	//血氧
						component:BloodOxygenInfo,
				},
			]
		},
		//健康列表信息
		{
			path:'/test',
			component:Test,
			children:[
				{	//默认显示
						path:'',
						redirect:'/test/healthyInfoLists'
				},
				{
						path:'healthyInfoLists',	//列表页
						component:HealthyInfoLists,
				},
				{
						path:'bloodPressureInfo',	//血压
						component:BloodPressureInfo,
				},
				{
						path:'bloodSugerInfo',	//血糖
						component:BloodSugerInfo,
				},
				{
						path:'bloodOxygenInfo',	//血氧
						component:BloodOxygenInfo,
				},
				{
						path:'heightWeightInfo',	//身高体重
						component:HeightWeightInfo,
				},
				{
						path:'cholesterolInfo',	//胆固醇
						component:CholesterolInfo,
				},
				{
						path:'uricAcidInfo',	//尿酸
						component:UricAcidInfo,
				},
				{
						path:'boneDensityInfo',	//骨密度
						component:BoneDensityInfo,
				},
				{
						path:'sleepInfo',	//睡眠
						component:SleepInfo,
				},
				{
						path:'heartRateInfo',	//心率
						component:HeartRateInfo,
				},
			]
		},
		{
			path:'/log',
			component:Log,
			children:[
				{	//默认显示
						path:'',
						redirect:'/log/archives'
				},
				{
						path:'archives',	//个人档案
						component:Archives,
				},
				{
						path:'active',	//日志<
						component:Active,
				},
				{
						path:'hospitalization',	//医院病历
						component:Hospitalization,
				},
				{
						path:'inspect',	//检验项目
						component:Inspect,
				},
				{
						path:'drug',	//用药记录
						component:Drug,
				},
				{
						path:'operation',	//手术记录
						component:Operation,
				},
				{
						path:'drugAllergy',	//药物过敏
						component:DrugAllergy,
				},
			]
		},
		//健康监护
		{
			path:'/custody',
			component:Custody,
			children:[
				{	//默认显示
						path:'',
						redirect:'/custody/location'
				},
				{
						path:'location',	//定位
						component:Location,
				},
				{
						path:'alertQuery',	//报警查询
						component:AlertQuery,
				},
				{
						path:'alertSetting',	//医院病历
						component:AlertSetting,
				},
			]
		},
		{
			path:'/server',
			component:Server,
			children:[
				{	//默认显示
					path:'',
					redirect:'/server/serverInfo'
				},
				{
					path:'serverInfo',
					component:ServerInfo
				},
				{
					path:'serverRecord',
					component:ServerRecord
				}
			]
		},
		{path:'/relative',component:Relative},
		{
			path: '/doctorList',
			component:DoctorList,
			children:[
				{
					path:'',
					redirect:'/doctorList/doctorListS'
				},
				{
					path:'doctorListS',
					component:DoctorListS
				}
			]
		},
		
		
		
		//医生
		{path:'/doctor',component:Doctor},
		{path:'/consult',component:Consult},
		{path:'/evaluate',component:HealthyEvaluate}
  ]
})
