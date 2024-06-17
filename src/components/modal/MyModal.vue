<template>
    <div @click="toggleModal(false);" class="modal" :style="{zIndex:(zIndex ?? 2) - 1}" :class="[isOpen ? ('open ' + className ?? '') : ('closed ' + className ?? '')]">
        <div @click.stop :style="{ maxHeight: height, maxWidth: width, zIndex: zIndex}" :id="id ? id:''" class="modal__content" :class="[isOpen ? ('open ' ?? '') : ('closed ' ?? '')]">
            <slot></slot>
            <button @click="toggleModal(false);">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_198_1747)">
                        <path d="M9.29404 7.89904L15.5 1.68604C15.6857 1.50039 15.79 1.24859 15.79 0.986043C15.79 0.723492 15.6857 0.471695 15.5 0.286043C15.3144 0.100392 15.0626 -0.00390625 14.8 -0.00390625C14.5375 -0.00390625 14.2857 0.100392 14.1 0.286043L7.90004 6.49904L1.68604 0.289043C1.50039 0.103392 1.24859 -0.00090625 0.986043 -0.00090625C0.723492 -0.00090625 0.471695 0.103392 0.286043 0.289043C0.100392 0.474695 -0.00390625 0.726492 -0.00390625 0.989043C-0.00390625 1.25159 0.100392 1.50339 0.286043 1.68904L6.50004 7.89904L0.289043 14.107C0.103392 14.2927 -0.00090625 14.5445 -0.00090625 14.807C-0.00090625 15.0696 0.103392 15.3214 0.289043 15.507C0.474695 15.6927 0.726492 15.797 0.989043 15.797C1.25159 15.797 1.50339 15.6927 1.68904 15.507L7.90004 9.29304L14.108 15.499C14.2937 15.6847 14.5455 15.789 14.808 15.789C15.0706 15.789 15.3224 15.6847 15.508 15.499C15.6937 15.3134 15.798 15.0616 15.798 14.799C15.798 14.5365 15.6937 14.2847 15.508 14.099L9.29404 7.89904Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_198_1747">
                        <rect width="15.794" height="15.793" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </figure>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, watch } from 'vue'

    const props = defineProps({ isOpen: {type: Boolean, required: true}, height: String, width: String, toggleModal: {type: Function, required: true}, zIndex: Number, className: String, id: String })

    watch(() => props.isOpen, (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
</script>

<style lang="scss" scoped>
    @import '@/global/scss/variables.scss';

    .modal {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #292F3150;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
        padding: 10px 0;
        box-sizing: border-box;
        transition: opacity .3s;
        button{
          display: none;
          width: 24px;
          min-width: 24px;
          height: 24px;
          min-height: 24px;
          position: absolute;
          top: 36px;
          right: 23px;
          cursor: pointer;
          figure{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            svg{
                width: 16px;
                min-width: 16px;
                height: 16px;
                min-height: 16px;
                fill: #090909;
                transition: fill .2s;
                &:hover{
                    fill: $fluxoo-primary-color;
                }
            }
          }
        }
        &__content {
            width: 100%;
            height: 100%;
            transition: transform 0.3s, opacity 0.3s;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 24px;
            background-color: white;
            z-index: 1;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            &.closed {
                opacity: 0;
                transform: translateY(-110%);
            }
            &.open {
                opacity: 1;
                transform: translateY(0);
            }
            button{
                display: none;
            }
        }
        &.closed{
            bottom: 100%;
            opacity: 0;
        }
        &.open{
            bottom: 0;
            opacity: 1;
        }
    }

    @media(max-width: 425px) {
        .modal {
            padding: 0;
            &__content{
                max-width: unset !important;
                max-height: unset !important;
                bottom: 0;
                left: 0;
                right: 0;
                transform: translate3d(0, 100vh, 0);
                top: 0;
                opacity: 0;
                transition: all 0.2s ease-out;
                border-radius: 0;
                &.closed {
                    opacity: 0;
                    transform: translateY(110%);
                }
                &.open {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
</style>
