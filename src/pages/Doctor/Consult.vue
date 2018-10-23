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
					width="80"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="title"
					label="咨询主题"
					width="180"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="SymptomDescribe"
					label="症状描述"
					
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="SendTime"
					label="咨询时间"
					width="150"
					align=center>
				</el-table-column>
				
				<el-table-column
					prop="ReplyType"
					label="回复状态"
					width="150"
					align=center>
					<div slot-scope="scope" style="height:23px;line-height: 23px;" >
						<el-button v-if="(scope.row.ReplyType)"  type="text" size="small">已回复</el-button>
						<el-button v-else style="color:red;"  type="text" size="small">未回复</el-button>
					</div>
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
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:2,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:1,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:3,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:4,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:1,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:5,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:6,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:7,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:8,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:9,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:10,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:11,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:12,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:13,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:14,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:15,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:16,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:17,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:18,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:19,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:20,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:21,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:22,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:23,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:24,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:25,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:26,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:27,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},{
						id:28,
						userName:'老人',
						title:'慢性支气管炎',
						SymptomDescribe:'多年患有慢性支气管炎',
						SendTime:'2018-06-26 03:49:50',
						ReplyType:0,
						ReplyTime:'2018-06-26 12:49:50',
						ReplyContent:'回复内容',
						ReplyEvaluate:3
					},
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