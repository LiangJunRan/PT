<template>
	<div style="text-align: center;" class="table">
	  <el-table
		ref="multipleTable"
		:data="tableData3"
		tooltip-effect="dark"
		style="width: 100%"
		height="450"
		size="mini"
		stripe
		border
		:default-sort = "{prop: 'id'}">
		
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
			:formatter="formatter"
			show-overflow-tooltip>
		</el-table-column>
		
		<el-table-column
			prop="timeLength"
			label="活动时长"
			width="100"
			align=center>
		</el-table-column>
	  </el-table>
	  
	  
	  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
			id:1,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
        }, {
			id:2,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }, {
			id:3,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }, {
			id:4,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }, {
			id:5,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }, {
			id:6,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }, {
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
        },{
			id:16,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        },{
			id:17,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        },{
			id:18,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        },{
			id:19,
			name: '王小虎',
			type: '午餐',
			consume: '+230',
			content: '畜肉及其制品',
			dateTime: '2016-05-03 12:02:20',
			timeLength: '0.5',
			describe: '上海市普陀区金沙江路 1518 弄',
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
			formatter(row, column) {
				return row.describe;
			}
    }
  }
</script>

<style>
	
.table{
	color: #000000;
}

</style>