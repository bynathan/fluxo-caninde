<template>
    <main id="admin">
        <AdminLayoutMenu/>
        <RouterView/>
    </main>
</template>

<script setup lang="ts">
    import AdminLayoutMenu from './components/AdminLayoutMenu.vue';
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