<template>
	<div>
		<vue-bootstrap-table
            :columns="columns"
            :values="AlertLists"
            :show-filter="true"
            :show-column-picker="true"
            :sortable="true"
            :paginated="true"
            :multi-column-sortable="true"
            :filter-case-sensitive="false">
		</vue-bootstrap-table>
	</div>
</template>

<script>
	
import VueBootstrapTable from 'vue2-bootstrap-table2'
export default{
	components:{
		VueBootstrapTable: VueBootstrapTable
	},
	data(){
		return{
			columns:[{
					title:'id',
				},{
					title:'PoliceName',
				},{
					title:'PoliceContent',
				},{
					title:'PolicePosition',
				},{
					title:'PoliceTime',
				},{
					title:'PoliceType'
				}
			],
			AlertLists:[{
					id:1,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:2,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:3,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:4,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:5,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:6,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:7,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:8,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:9,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:10,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:11,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:12,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:13,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:14,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:15,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:16,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:17,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:18,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:19,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:20,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:21,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				},{
					id:22,
					PoliceName:"BMI",
					PoliceContent:"2017-09-23 15:39:45,测量了BMI：BMI:18.2,该BMI超出正常范围值，正常范围为：18.5-23.9,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 15:39:45",
					PoliceType:"1"
				},{
					id:23,
					PoliceName:"收缩血压",
					PoliceContent:"2017-09-23 14:04:30,测量了血压：收缩血压:154.0,该血压超出正常范围值，正常范围为：60.0-90.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 14:04:30",
					PoliceType:"0"
				},{
					id:24,
					PoliceName:"舒张血压",
					PoliceContent:"2017-09-23 12:54:30,测量了血压：舒张血压:49.0,该血压超出正常范围值，正常范围为：90.0-140.0,请注意观察！",
					PolicePosition:"",
					PoliceTime:"2017-09-23 12:54:30",
					PoliceType:"0"
				}
			]
		}
	}
}
</script>

<style scoped>
	
</style>