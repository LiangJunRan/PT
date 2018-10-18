<template>
	<div class="hospitalization" style="font-size: 14px !important;" >
		
		 <el-table
			ref="multipleTable"
			:data="Hospitalization"
			tooltip-effect="dark"
			style="width: 100%"
			height="450"
			max-height="450"
			size="mini"
			stripe
			border
			:default-sort = "{prop: 'id'}"
			>
			
			<el-table-column
			  prop="id"
			  label="序号"
			  width="80"
			  sortable
			  align=center>
			</el-table-column>
			
			<el-table-column
			  prop="HospitalName"
			  label="医院"
			  width="120"
			  show-overflow-tooltip
			  align=center>
			</el-table-column>
			
			<el-table-column
			  prop="HospId"
			  label="科室"
			  width="80"
			  show-overflow-tooltip
			  align=center>
			</el-table-column>
			
			<el-table-column
			  prop="Sickroom"
			  label="病房"
			  width="80"
			  show-overflow-tooltip
			  align=center>
			</el-table-column>
			
			<el-table-column
				prop="HospNumber"
				label="住院号"
				width="60"
				show-overflow-tooltip
				align=center>
			</el-table-column>
			
			<el-table-column
				prop="HospStartTime"
				label="住院时间"
				width="100"
				show-overflow-tooltip
				align=center>
			</el-table-column>
			
			<el-table-column
				prop="HospEndTime"
				label="出院时间"
				:formatter="formatter"
				show-overflow-tooltip
				width="100"
				>
			</el-table-column>
			
			<el-table-column
				prop="HospDescribe"
				label="描述"
				show-overflow-tooltip
				align=center>
			</el-table-column>
			<el-table-column
			  fixed="right"
			  label="操作"
			  width="120">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button @click.native.prevent="deleteRow(scope.$index, Hospitalization)" type="text" size="small">移除</el-button>
				</template>
			</el-table-column>
		  </el-table>
	</div>
</template>

<script>

import VueBootstrapTable from 'vue2-bootstrap-table2'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import IconBtn from './IconBtn'
export default{
	
	components:{
		VueBootstrapTable:VueBootstrapTable,
		IconBtn,
	},
	
	data(){
		return{
			Hospitalization: [
				{
					id:1,
					HospitalName:'郫县人民医院,郫县人民医院,郫县人民医院,郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G1',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:2,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G2',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:3,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G3',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:4,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G4',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:5,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G5',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:6,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G6',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:7,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G7',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:8,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G8',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:9,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G9',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:10,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:11,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:12,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:13,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:14,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:15,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:16,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:17,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:18,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:19,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:20,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:21,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:22,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:23,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:24,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:25,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:26,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				},{
					id:27,
					HospitalName:'郫县人民医院',
					HospId:'消化内科',
					Sickroom:'G409',
					HospNumber:'G10',
					HospStartTime:'2018-01-01',
					HospEndTime:'2018-02-01',
					HospDescribe:'食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.食管、胃及十二指肠的溃疡和黏膜糜烂导致的出血.'
				}
				
			],
			
		}
		
	},
	
	methods:{
		greet:function(entry){
			alert(JSON.stringify(entry))
		},
		handleClick(row) {
			console.log(row);
		},
		deleteRow(index, rows) {
			console.log(index,rows)
			rows.splice(index, 1);
		},
		formatter(row, column){
			// console.log(row,column.property)
			// console.log(typeof row,typeof column)
			// console.log(JSON.stringify(row),JSON.stringify(column))
			return row[column.property]
		}	
	},
}

window.onload = function(){
	
}


</script>

<style>
.hospitalization{

}
</style>