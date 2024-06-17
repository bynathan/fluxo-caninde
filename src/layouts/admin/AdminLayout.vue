<template>
    <main id="admin">
        <AdminLayoutMenu/>
        <RouterView/>
        <!-- <Loader v-if="isPerformingRequest" :zIndex="99"/> -->
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AdminLayoutMenu from './components/AdminLayoutMenu.vue';
import { useAxios, isPerformingRequest } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { user } from '@/global/states/GlobalState'
import Loader from '@/components/loader/Loader.vue'
import router from '@/router';

// const axios = useAxios()

// onMounted(() => {
//     axios.get('/api/user').then((response: AxiosResponse) => {
//         user.value = response.data
//     }).catch(() => {
//         router.push({name: 'login'})
//     })
// })

</script>

<style lang="scss">
    #admin{
        height: 100%;
        min-height: 100dvh;
        position: relative;
        padding: 0 15px 0 81px;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 425px){
        #admin{
            padding: 0 15px;
            display: flex;
        }
    }
</style>
