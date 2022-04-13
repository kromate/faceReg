<template>
	<div class="p-4 mt-12">
		<div>database</div>
		<Table
			class="w-full"
			:loading="loading"
			:headers="headers"
			:table-data="data"
			:new-design="true"
		>
			<template #item="{ item }">
				<div v-if="item.status">
					<Badge name="success" :index="0"/>
				</div>
		
			</template>
		</Table>
	</div>
	

	
</template>

<script setup>
import Table from '../components/Table.vue'

const data = [
	{
		'Email': 'ifeoluwa@gmail.com',
		'number': '07030574218',
		'customerName': 'Ifeoluwa Mibiola',
		'type': 'Individual',
	},
	{
		'Email': 'ifeoluwa@gmail.com',
		'number': '07030574218',
		'customerName': 'Ifeoluwa Mibiola',
		'type': 'Business',
	},
	{
		'Email': 'ifeoluwa@gmail.com',
		'number': '07030574218',
		'customerName': 'Ifeoluwa Mibiola',
		'type': 'Individual',
	},
	{
		'Email': 'ifeoluwa@gmail.com',
		'number': '07030574218',
		'customerName': 'Ifeoluwa Mibiola',
		'type': 'Business',
	},
]

const headers = [
	{ text: 'Name ', value: 'customerName' },
	{ text: 'Email Address', value: 'Email' },
	{ text: 'Phone Number', value: 'number' },
	{ text: 'TYPE', value: 'type' },
]
</script>

<style scoped>



table.neumorphic{
  width: 600px;
  border-spacing: 0;
  color: #212121;
  text-align: center;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
  -9px -9px 16px rgba(255, 255, 255, 0.6);
}
table.neumorphic thead{
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6);
}
table.neumorphic th{
  padding: 7px;
}

table.neumorphic>tbody>tr>td {
  padding: 10px;
  font-size: 14px;
  position: relative;
}


table.neumorphic>tbody>tr:hover {
  padding: 20px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
  -9px -9px 16px rgba(255, 255, 255, 0.6);
}

table.neumorphic tr td:first-child::before {
  content: "";
  position: absolute;
  padding: 7px;
  top: 0;
  left: -5000px;
  width: 10000px;
  height: 100%;
  z-index: -10;
}


</style>