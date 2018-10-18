<template>
	<div>
		<DoctorHeader/>
		<div style="padding: 20px 20px 0px 20px;">
			<el-table 
				:data="AlertSetList.slice((currpage - 1) * pagesize, currpage * pagesize)" 
				border 
				ref="multipleTable"
				style="width: 100%"
				tooltip-effect="dark"
				height="450"
				max-height="450"
				size="mini"
				stripe
				
				>
				
				<el-table-column
					prop="id"
					label="序号"
					width="80"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="userName"
					label="姓名"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="title"
					label="标题"
					width="120"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="PolicePosition"
					label="最大值"
					width="150"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="PoliceTime"
					label="最小值"
					width="150"
					align=center>
				</el-table-column>
	
				<el-table-column
					fixed="right"
					label="操作"
					width="120">
					<div slot-scope="scope" class="asd" style="height:23px;line-height: 23px;" >
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, AlertSetList)" type="text" size="small">移除</el-button>
					</div>
				</el-table-column>
				
				
			</el-table>
			<el-pagination background 
				layout="prev, pager, next, sizes, total, jumper"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="pagesize"
				:total="AlertSetList.length"
				@current-change="handleCurrentChange"  
				@size-change="handleSizeChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import DoctorHeader from './DoctorHeader.vue'
export default{
	data(){
			return{
				msg: 8888,
				pagesize: 10,
				currpage: 1,
				AlertSetList:[
					{
						id:1,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:2,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:3,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:4,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:5,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					},{
						id:6,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:7,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:8,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:9,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:10,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					},{
						id:11,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:12,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:13,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:14,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:15,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					},{
						id:16,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:17,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:18,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:19,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:20,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					},{
						id:21,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:22,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:23,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:24,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:25,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					},{
						id:26,
						PoliceName:'低密度脂蛋白胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.22',
						PoliceTime:'3.12'
					},{
						id:27,
						PoliceName:'体温',
						Unit:'℃',
						PolicePosition:'35.8',
						PoliceTime:'37.0'
					},{
						id:28,
						PoliceName:'尿酸',
						Unit:'umol/L',
						PolicePosition:'90.0',
						PoliceTime:'420.0'
					},{
						id:29,
						PoliceName:'心率',
						Unit:'次/分钟',
						PolicePosition:'60.0',
						PoliceTime:'120.0'
					},{
						id:30,
						PoliceName:'总胆固醇',
						Unit:'mmol/L',
						PolicePosition:'2.9',
						PoliceTime:'5.17'
					}
				]
			}
		},
	
	methods:{
		deleteRow(index, rows) {
			console.log(index,rows)
			rows.splice(index, 1);
		},
		handleCurrentChange(cpage) {
			this.currpage = cpage;
		},
		handleSizeChange(psize) {
			this.pagesize = psize;
		},
	},
	components:{
		DoctorHeader,
	}
}
</script>

<style scoped>
	
</style>