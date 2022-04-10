


<template>
	<loader v-if=" active"/>
	<router-view v-else></router-view>
</template>



<script setup  >
import Loader from './components/Loader.vue'
import {useLoading} from '@/composibles/useNotification'

const { active} = useLoading()
</script>