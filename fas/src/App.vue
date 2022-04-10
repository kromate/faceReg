


<template>
	<router-view v-if="loadingState.cacheLoading"></router-view>
</template>



<script setup  >
import { loadingState } from '@/composibles/useNotification'

</script>