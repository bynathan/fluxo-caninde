<template>
  <label class="option" :class="{open: optionsOpen}" @click="optionsOpen = !optionsOpen" for="">
    <div class="top">
      <p :class="{selected: currentValue != 'Selecione'}">{{currentValue}}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 12H18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 18V6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="itens">
      <slot/>
    </div>
  </label>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{currentValue: string}>()

  const optionsOpen = ref<boolean>(false);
</script>

<style lang="scss">
  @import '@/global/scss/variables.scss';
  @import '@/global/scss/animations.scss';

  .option{
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    border-radius: 14px;
    border: 1px solid #D3D3D3;
    padding: 15px 20px;
    box-sizing: border-box;
    transition: height .2s, border-color .2s;
    cursor: pointer;
    div{
      &.top{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0;
          transition: color .2s;
          &.selected{
            color: $fluxoo-primary-color;
          }
        }
        svg{
          stroke: #292D32;
          transition: stroke .2s;
          path{
            transition: opacity .2s;
          }
        }
      }
      &.itens{
        display: none;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        margin: 16px 0 0 0;
        .item{
          input{
            display: none;
            &:checked{
              & ~ label{
                background: $fluxoo-primary-color;
                span{
                  border-color: #FFF;
                  background: #FFF;
                  svg{
                    fill: $fluxoo-primary-color;
                  }
                }
                p{
                  color: #FFF
                }
              }
            }
          }
          label{
            border-radius: 30px;
            background: #F5F5F5;
            display: flex;
            align-items: center;
            column-gap: 8px;
            padding: 16px 20px 16px 18px;
            box-sizing: border-box;
            transition: background .2s;
            cursor: pointer;
            span{
              width: 24px;
              min-width: 24px;
              height: 24px;
              min-height: 24px;
              border: 1px solid #6F6F6F;
              background: transparent;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: border-color .2s, background .2s;
              svg{
                width: 12.5px;
                min-width: 12.5px;
                height: 10px;
                min-height: 10px;
                fill: transparent;
                transition: fill .2s;
              }
            }
            p{
              color: #090909;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              margin: 0;
              transition: color .2s;
            }
          }
        }
      }
    }
    &.open{
      height: unset;
      border: 2px solid $fluxoo-primary-color;
      border-color: $fluxoo-primary-color;
      padding: 14px 19px;
      div{
        &.top{
          p{
            color: $fluxoo-primary-color;
          }
          svg{
            stroke: $fluxoo-primary-color;
            path{
              &:last-child{
                opacity: 0;
              }
            }
          }
        }
        &.itens{
          display: flex;
          opacity: 1;
        }
      }
    }
  }
</style>
