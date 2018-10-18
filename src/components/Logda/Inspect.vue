<template>
	<div>
		检验项目
<!-- 		<BootstrapTable :columns="columns" :options="options">
			
		</BootstrapTable> -->
	</div>
</template>

<script>
import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css'
// import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-table/dist/bootstrap-table.min.js'


// import BootstrapTable from './BootstrapTable.vue'

export default{
	components:{
		// BootstrapTable:BootstrapTable
	},
	data(){
		return{
			columns: [
				[{
					field: 'state',
					checkbox: true,
					rowspan: 2,
					align: 'center',
					valign: 'middle'
				}, {
					title: 'Item ID',
					field: 'id',
					rowspan: 2,
					align: 'center',
					valign: 'middle',
					sortable: true
				}, {
					title: 'Item Detail',
					colspan: 3,
					align: 'center'
				}],
				[{
					field: 'name',
					title: 'Item Name',
					sortable: true,
					editable: true,
					align: 'center'
				}, {
					field: 'price',
					title: 'Item Price',
					sortable: true,
					align: 'center'
				}, {
					field: 'operate',
					title: 'Item Operate',
					align: 'center',
					clickToSelect: false,
					events: {
						'click .like': function(e, value, row, index) {
							alert('You click like action, row: ' + JSON.stringify(row));
						},
						'click .remove': function(e, value, row, index) {
							alert('You click delete action, row: ' + JSON.stringify(row));
						}
					},
					formatter: function(value, row, index) {
						return [
							'<a class="like" href="javascript:void(0)" title="Like">',
							'<i class="glyphicon glyphicon-heart"></i>',
							'</a>  ',
							'<a class="remove" href="javascript:void(0)" title="Remove">',
							'<i class="glyphicon glyphicon-remove"></i>',
							'</a>'
						].join('');
					}
				}]
			],
			options: {
				pagination: true,
				showPaginationSwitch: true,
				showRefresh: true,
				showToggle: true,
				showColumns: true,
				search: true,
				clickToSelect: true,
				maintainSelected: true,
				minimumCountColumns: 2,
				url: '/json/data1.json'
			}
		}
		
	}
}

</script>

<style scoped>
	
</style>