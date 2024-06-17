<template>
    <label class="mySelect" :class="{open: isSelectOpen}" for="">
        <input type="text" placeholder="Selecione" :value="currentValue" @click="isSelectOpen = !isSelectOpen;" @blur="closeSelect" id="my-select" :name="name" readonly>
        <ul>
            <slot/>
        </ul>
    </label>
</template>

<script setup lang="ts">
  import { defineProps, ref } from 'vue'

  defineProps<{name: string, currentValue: string}>()

  /*SCRIPT SELECT*/
  const isSelectOpen = ref<boolean>(false);

  const closeSelect = () => {
      setTimeout(() => {
        isSelectOpen.value = false;
      }, 80);
  }
</script>

<style lang="scss">
    @import '@/global/scss/variables.scss';

    .mySelect{
      position: relative;
      input{
        width: 100%;
        height: 55px;
        border-radius: 14px;
        border: 1px solid #D3D3D3;
        color: #090909;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 15px 20px;
        box-sizing: border-box;
        transition: border-color .2s, color .2s, background .2s;
        cursor: pointer;
        &:focus{
          outline: none;
        }
        &::placeholder{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          transition: color .2s;
        }
      }
      ul{
        width: 100%;
        max-height: 150px;
        display: none;
        flex-direction: column;
        border-radius: 16px;
        background: #FFF;
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
        padding: 20px;
        margin: 0;
        box-sizing: border-box;
        position: absolute;
        row-gap: 24px;
        top: calc(100% + 5px);
        z-index: 1;
        overflow-y: auto;
        &::-webkit-scrollbar{
          width: 0;
        }
        li{
          display: flex;
          align-items: center;
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: color .2s;
          cursor: pointer;
          &:hover{
            color: $fluxoo-primary-color;
            text-decoration: underline
          }
        }
      }
      &.open{
        &::before{
          top: 24px;
          border-color: $fluxoo-primary-color;
          transform: rotate(405deg);
        }
        input{
          border: 2px solid $fluxoo-primary-color;
          color: $fluxoo-primary-color;
          padding: 14px 19px;
          &::placeholder{
            color: $fluxoo-primary-color;
          }
        }
        ul{
          display: flex;
        }
      }
      &::before{
        content: "";
        width: 10px;
        height: 10px;
        border-left: 2px solid #292D32;
        border-top: 2px solid #292D32;
        border-radius: 2px;
        position: absolute;
        top: 19px;
        right: 30px;
        transform: rotate(225deg);
        transition: border-color .2s;
      }
    }
</style>
