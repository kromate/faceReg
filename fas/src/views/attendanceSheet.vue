<template>
	<div class="p-4 mt-12">
		<div>database</div>
		<div class="container overflow-x-auto mt-24 mx-auto grid place-items-center">
			<table class="neumorphic">
				<thead>
					<tr>
						<th>Column 1</th>
						<th>Column 2</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
					<tr>
						<td>Cell 1</td>
						<td>Cell 2</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	

	
</template>

<script>
export default {

}
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