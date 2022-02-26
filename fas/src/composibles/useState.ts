import { ref } from 'vue';

export const loadingPage = ref(true)    

export const toggleLoading = () => {
    console.log("logging ");
    
    loadingPage.value = !loadingPage.value
}