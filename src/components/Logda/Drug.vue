<template>
	<div>
		<el-table 
			:data="list.slice((currpage - 1) * pagesize, currpage * pagesize)" 
			border 
			style="width: 100%"
			tooltip-effect="dark"
			height="450"
			size="mini"
			stripe
			:default-sort = "{prop: 'id'}"
			@sort-change = "sortchange"
			>
			
	    	<el-table-column
				prop="id"
				label="序号"
				width="80"
				sortable
				align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
				prop="type"
				label="活动类型"
				width="120"
				align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
				prop="consume"
				label="活动消耗"
				width="80"
				align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
				prop="content"
				label="活动内容"
				width="120"
				align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
	    		prop="dateTime"
	    		label="活动时间"
	    		width="160"
	    		align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
	    		prop="timeLength"
	    		label="活动时长"
	    		width="100"
	    		align=center>
	    	</el-table-column>
	    	
	    	<el-table-column
	    		prop="describe"
	    		label="备注"
	    		show-overflow-tooltip>
	    	</el-table-column>
	    	
	    	<el-table-column
	    		prop="timeLength"
	    		label="活动时长"
	    		width="100"
	    		:formatter="formatter"
	    		align=center>
	    	</el-table-column>
	    </el-table>
		<el-pagination background 
			layout="prev, pager, next, sizes, total, jumper"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pagesize"
			:total="list.length"
			@current-change="handleCurrentChange"  
			@size-change="handleSizeChange">
		</el-pagination>
	</div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap'
export default{
	

	
	data(){
		return{
			msg: 8888,
			list: [{
					id:1,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
				},{
					id:2,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:3,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:4,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:5,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:6,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:7,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:8,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:9,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:10,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:11,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:12,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:13,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:14,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				},{
					id:15,
					name: '王小虎',
					type: '午餐',
					consume: '+230',
					content: '畜肉及其制品',
					dateTime: '2016-05-03 12:02:20',
					timeLength: '0.5',
					describe: '上海市普陀区金沙江路 1518 弄',
				}],
			pagesize: 10,
			currpage: 1
		}
	},
	methods: {
		getlist() {
			let starttime = new Date();
// 			axios('/mockDrink').then(data => {
// 				console.log(new Date() - starttime)
// 				this.list = data.data.data;
// 			}).catch(err => {
// 				console.error(err)
// 				this.$alert('请求超时，刷新重试！')
// 			})
		},
		handleCurrentChange(cpage) {
			this.currpage = cpage;
		},
		handleSizeChange(psize) {
			this.pagesize = psize;
		},
		formatter(row,column){
			// console.log(row,column)
		},
		sortchange(column, prop, order){
			console.log(column, prop, order)
		}
	},
	mounted() {
		this.getlist()
	}
}
</script>

<style scoped>
	
</style>