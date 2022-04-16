<template>
	<div class="loader fixed mx-auto inset-0 pt-24" v-if="active">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="280 250 500 500">
			<g>
				<svg x="360.66" y="301">
					<path
						d="M172.81 366.06C77.3701 366.06 0 330.949 0 260.246V128.021C0 57.3175 77.3701 0 172.81 0C268.25 0 345.62 57.3175 345.62 128.021V260.246C345.62 330.949 268.25 366.06 172.81 366.06Z"
						fill="transparent"
					></path>
				</svg>
			</g>
			<path
				id="right-ear"
				fill="#7d4921"
				stroke-width="8px"
				d="M732.53,469.08c0,14.78-9.29,26.76-20.75,26.76a15.12,15.12,0,0,1-2.43-.19A190.61,190.61,0,0,0,711.22,469a233.27,233.27,0,0,0-1.6-26.51,15.47,15.47,0,0,1,2.16-.15C723.24,442.32,732.53,454.3,732.53,469.08Z"
			></path>
			<path
				id="left-ear"
				fill="#7d4921"
				stroke-width="8px"
				d="M354.86,495.8c-.39,0-.78,0-1.18,0-11.46,0-20.75-12-20.75-26.76s9.29-26.76,20.75-26.76q.45,0,.9,0A235.55,235.55,0,0,0,353,469,189.63,189.63,0,0,0,354.86,495.8Z"
			></path>
			<path
				id="right-brow"
				fill="gray"
				d="M391.67,401.76c24.8-12.75,58.09-15.91,82,0,4.24,2.82,8.19-4,4-6.81-26.29-17.5-62.75-14-90,0-4.51,2.32-.53,9.13,4,6.81Z"
			></path>
			<path
				id="left-brow"
				fill="gray"
				d="M676.65,395c-27.21-14-63.66-17.5-90,0-4.2,2.8-.26,9.64,4,6.81,23.91-15.91,57.2-12.75,82,0,4.51,2.32,8.5-4.48,4-6.81Z"
			></path>
			<g class="shift" data-v-d8d38ba6="">
				<circle
					id="right-eye"
					cx="440.66"
					cy="466.78"
					r="20.52"
					fill="black"
					data-v-d8d38ba6=""
				></circle>
				<circle
					fill="#fff"
					cx="446.89"
					cy="456.78"
					r="3.78"
					data-v-d8d38ba6=""
				></circle>
				<circle
					id="left-eye"
					cx="623.63"
					cy="466.78"
					r="20.52"
					fill="black"
					data-v-d8d38ba6=""
				></circle>
				<circle
					fill="#fff"
					cx="629.86"
					cy="456.78"
					r="3.78"
					data-v-d8d38ba6=""
				></circle>
			</g>
			<!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if-->
			<path
				id="mouth"
				stroke="#000"
				fill="#fff"
				stroke-miterlimit="10"
				stroke-width="5.22px"
				d="M577.33,557.49c6.49,0,10.9,5,8.31,9.54-7.72,13.38-29.41,28.57-54.95,28.57s-47.23-15.19-55-28.57c-2.59-4.5,1.82-9.54,8.31-9.54Z"
			></path>
			<g>
				<path
					id="glasses-right"
					fill="#fff"
					opacity="0.08"
					d="M706.51,458.27c0,39.71-30.38,71.9-67.86,71.9S570.8,498,570.8,458.27s30.38-46,67.85-46S706.51,418.55,706.51,458.27Z"
				></path>
				<path
					id="glasses-left"
					fill="#fff"
					opacity="0.08"
					d="M495.39,458.27c0,39.71-30.38,71.9-67.86,71.9s-67.86-32.19-67.86-71.9,30.38-46,67.86-46S495.39,418.55,495.39,458.27Z"
				></path>
				<path
					id="glass-frame"
					stroke-miterlimit="10"
					fill="none"
					stroke="#00000a"
					stroke-width="6.37px"
					d="M493.92,444.51A54.47,54.47,0,0,1,528,432.59h5.77a54.53,54.53,0,0,1,37.83,15.2"
				></path>
				<path
					id="glass-frame"
					stroke-miterlimit="10"
					fill="none"
					stroke="#00000a"
					stroke-width="6.37px"
					d="M495.39,458.27c0,39.71-30.38,71.9-67.86,71.9s-67.86-32.19-67.86-71.9,30.38-46,67.86-46S495.39,418.55,495.39,458.27Z"
				></path>
				<path
					id="glass-frame"
					stroke-miterlimit="10"
					fill="none"
					stroke="#00000a"
					stroke-width="6.37px"
					d="M706.51,458.27c0,39.71-30.38,71.9-67.86,71.9S570.8,498,570.8,458.27s30.38-46,67.85-46S706.51,418.55,706.51,458.27Z"
				></path>
			</g>
			<path
				id="hair"
				fill="black"
				d="M647.15,314.18v9a37,37,0,0,1-37,37H456.45a37,37,0,0,1-37-37v-9a36.9,36.9,0,0,1,.56-6.44c1.6-1.16,3.24-2.28,4.89-3.36,29.89-19.6,67-27.18,107.16-27.18,35.63,0,68.84,6,96.74,21a135.92,135.92,0,0,1,18,11.58A35.81,35.81,0,0,1,647.15,314.18Z"
			></path>
			<path
				id="hair"
				fill="black"
				d="M427.53,324.22a77.28,77.28,0,0,1-2.3,18.72c-7.41,29.61-32,53.07-63.48,60.78,7-27.26,17.85-53.28,31.81-70.76A133.46,133.46,0,0,1,420,307.74c1.6-1.16,3.24-2.28,4.89-3.36A76.62,76.62,0,0,1,427.53,324.22Z"
			></path>
			<path
				id="hair"
				fill="black"
				d="M701.46,400c-30.47-4.17-55.89-22.81-67.91-48.19a77.2,77.2,0,0,1-4.72-53.61,135.92,135.92,0,0,1,18,11.58A133.73,133.73,0,0,1,670.63,333C684,349.64,694.48,374.1,701.46,400Z"
			></path>
		</svg>

		<p class="block">Caching ML models, this might take a while 😅</p>q
	</div>
</template>

<script setup>
import {useLoading} from '@/composibles/useNotification'

const {active, message} = useLoading()
</script>


<style scoped>

svg {
  fill: rgb(183, 178, 166);
  max-width: 350px;
  max-height: 100%;
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
svg path {
  stroke: #242318;
  stroke-width: 1;
  stroke-dasharray: 1600;
  stroke-dashoffset: 0;
  animation: everydayBK 5s infinite linear forwards;
}

/* @keyframes draw {
  to {
    stroke-dashoffset: 0;
    stroke-dasharray: 0;
  }
} */


@keyframes everydayBK{
  0%{opacity: 0;
    fill:none;
    stroke-dashoffset: 2000;}
  50%{opacity: 10;
    fill:none;
    stroke-dashoffset: 1000;}
  50%{
    fill:rgba(255,255,255,0);}
  100%{opacity: 10;
    fill:rgba(255, 255, 255, 0.219);
    stroke-dashoffset: 0;}
}






</style>
