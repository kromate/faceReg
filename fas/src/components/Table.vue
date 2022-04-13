<template>
	<div >
		<!-- table loader -->
	


		<table class="w-full">
			<thead>
				<tr class="h-20">
					<th 	v-for="(header, i) in headers"
						:key="i"
						class=" uppercase text-sm text-gray400 font-medium text-left	"
						:style="`width: ${header.width ? header.width : defaultColWidth}%;`"
					>
						{{ header.text }}
					</th>
				</tr>
			</thead>

			<tbody >
				<transition-group v-for="(data, i) in displayTable" :key="i+1" appear name="orderupList"
					mode="in-out"
					tag="tr"
					class="border-t border-gray50 py-8 font-medium h-20">

					<td v-if="checkbox">
						<span>{{ value }}</span>
					</td>
					<td 	v-for="(value, key) of populateTable(data)"
						:key="key + 1">
						<slot name="item" :item="{ [key]: key, data }">
							<span>{{ value }}</span>
						</slot>
					</td>
					
				</transition-group>
	
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Table',
	props: {
		headers:{
			type:Array,
			default:()=>[]
		},
		tableData:{
			type:Array,
			default:()=>[]
		},
		tableHeight:{
			type:Number,
			default:200
		},
		loading:{
			type:Boolean,
			default:true
		},
		checkbox:{
			type:Boolean,
			default:false
		},
		pageSync:{
			type:String,
			default:''
		},
		itemPerPage:{
			type:String,
			default:''
		},
		page:{
			type:String,
			default:''
		},
	},
	data() {
		return {
			itemLength: 0,
			checked: [],
			dot: false,
			pages: 0
		}
	},
	computed: {
		displayTable() {
			if (this.pageSync) {
				return this.paginate(this.tableData)
			} else {
				return this.tableData
			}
		},

		getItemsWithColWidth() {
			let length = 0

			this.headers.forEach((item) => {
				if (!item.width) {
					length++
				}
			})
			return length
		},
		defaultColWidth() {
			return this.roundToTwo(100 / this.getItemsWithColWidth)
		},
		checkboxed: {
			get() {
				this.isPresent()
				this.$emit('rowSelected', this.checked)
				return this.tableData
					? this.checked.length === this.tableData.length
					: false
			},
			set(value) {
				const checked = []
				if (value) {
					this.tableData.forEach(function(table) {
						checked.push(table)
					})
				}
				this.checked = checked
			}
		}
	},
	watch: {
		tableData() {
			this.setPages()
		}
	},
	methods: {
		setPages() {
			const numberOfPages = Math.ceil(this.tableData.length / this.itemPerPage)
			this.$emit('page-count', numberOfPages)
		},
		paginate(data) {
			const page = this.page
			const perPage = this.itemPerPage
			const from = page * perPage - perPage
			const to = page * perPage
			return data.slice(from, to)
		},
		isPresent() {
			let result
			this.tableData.forEach((element) => {
				result = this.checked.find((item) => item.id === element.id)
				if (result) {
					this.dot = true
					return this.$emit('activeUser', this.dot)
				} else {
					this.dot = false
					return this.$emit('activeUser', this.dot)
					// return (this.dot = false);
				}
			})
		},
		roundToTwo(num) {
			return +(Math.round(num + 'e+2') + 'e-2')
		},
		getColWidth(key) {
			for (const item of this.headers) {
				if (item.width && item.value === key) return item.width
			}
		},
		populateTable(data) {
			const element = {}

			this.headers.forEach((item) => {
				for (const key in data) {
					if (key === item.value) {
						element[key] = data[key]
						// item.width ? (data.width = item.width) : "";
					}
				}
			})
			return element
		}
	}
}
</script>

<style scoped >
.orderupList-enter-active,.orderupList-leave-active{
        transition: all 0.5s;
    }
.orderupList-enter,.orderupList-leave-to{
        opacity: 0;
        transform: translateY(30px);

    }

</style>