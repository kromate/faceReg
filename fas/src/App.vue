<script setup >
import Loader from './components/Loader.vue'
import {loadingPage} from '@/composibles/useNotification'
</script>


<template>
	<loader v-if="loadingPage"/>
	<router-view v-else></router-view>
</template>



