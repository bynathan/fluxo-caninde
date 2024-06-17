<template>
    <div class="backdrop" :style="{zIndex:(zIndex ?? 2) - 1}" ></div>
    <div :style="{ zIndex: zIndex}" class="loader">
        <div class="col-3">
            <div class="snippet" data-title="dot-flashing">
              <div class="stage">
                <div class="dot-flashing"></div>
              </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({ zIndex: { type: Number, required: true }})
</script>

<style lang="scss" scoped>
$primary-color: #079F72;

.backdrop{
    background: #292F3150;
    position:fixed;
    left:0;
    width:100%;
    bottom:0;
    top:0
}

.loader{
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}

.dot-flashing {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: $primary-color;
    color: #ff8080;
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;
  }
  .dot-flashing::before, .dot-flashing::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: $primary-color;
    color: $primary-color;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
  }
  .dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: $primary-color;
    color: $primary-color;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
  }
  
  @keyframes dot-flashing {
    0% {
      background-color: $primary-color;
    }
    50%, 100% {
      background-color: rgba(#000000, 0.2);
    }
  }
</style>
