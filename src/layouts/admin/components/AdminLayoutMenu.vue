<template>
    <nav class="desktop" :class="{ open: menuOpen }">
        <img src="../../../assets/images/prefeitura-caninde.png" alt="Logo Prefeitura de Canindé." @click="menuOpen = false; $router.push('/admin/home'); checkMenuIsOpen();">
        <button class="menu" @click="menuOpenOrClose()">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 5.8335H17.5" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2.5 10H17.5" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2.5 14.1665H17.5" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </figure>
        </button>
        <button :class="{ 'active': $route.path === '/admin/home' || $route.path === '/admin/results' }" @click="$router.push('/admin/home'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15.5V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.39172 2.85004L2.61672 7.47504C1.96672 7.9917 1.55006 9.08337 1.69172 9.90004L2.80006 16.5334C3.00006 17.7167 4.13339 18.675 5.33339 18.675H14.6667C15.8584 18.675 17.0001 17.7084 17.2001 16.5334L18.3084 9.90004C18.4417 9.08337 18.0251 7.9917 17.3834 7.47504L11.6084 2.85837C10.7167 2.1417 9.27506 2.1417 8.39172 2.85004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </figure>
        </button>
        <button class="options" :class="{ 'active': $route.path === '/admin/documents', opened: optionListDocuments }" @click="optionListDocuments = !optionListDocuments; openListOptionsDocuments();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/folder">
                        <g id="folder">
                            <path id="Vector" d="M18.3334 9.6665V14.6665C18.3334 17.9998 17.5001 18.8332 14.1667 18.8332H5.83341C2.50008 18.8332 1.66675 17.9998 1.66675 14.6665V6.33317C1.66675 2.99984 2.50008 2.1665 5.83341 2.1665H7.08341C8.33342 2.1665 8.60841 2.53317 9.08341 3.1665L10.3334 4.83317C10.6501 5.24984 10.8334 5.49984 11.6667 5.49984H14.1667C17.5001 5.49984 18.3334 6.33317 18.3334 9.6665Z" stroke-width="1.5" stroke-miterlimit="10"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
        <ul>
            <li v-for="(option, index) in optionsListDocuments" :class="{ selected: optionsListDocuments[index].selected }">
                <p>{{ option.name }}</p>
                <span></span>
            </li>
        </ul>
        <button :class="{ 'active': $route.path === '/admin/help' }" @click="$router.push('/admin/help'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/message-question">
                        <g id="message-question">
                            <path id="Vector" d="M14.167 15.8583H10.8337L7.12532 18.3249C6.57532 18.6916 5.83366 18.3 5.83366 17.6333V15.8583C3.33366 15.8583 1.66699 14.1916 1.66699 11.6916V6.69157C1.66699 4.19157 3.33366 2.5249 5.83366 2.5249H14.167C16.667 2.5249 18.3337 4.19157 18.3337 6.69157V11.6916C18.3337 14.1916 16.667 15.8583 14.167 15.8583Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M9.99952 9.9668V9.79183C9.99952 9.22516 10.3495 8.92515 10.6995 8.68348C11.0412 8.45015 11.3828 8.15016 11.3828 7.60016C11.3828 6.83349 10.7662 6.2168 9.99952 6.2168C9.23286 6.2168 8.61621 6.83349 8.61621 7.60016" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_3" d="M9.99592 11.9582H10.0034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
        <div></div>
        <button :class="{ 'active': $route.path === '/admin/profile' }" @click="$router.push('/admin/profile'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/profile-circle">
                        <g id="profile-circle">
                            <path id="Vector" d="M10.0999 10.6502C10.0416 10.6419 9.9666 10.6419 9.89994 10.6502C8.43327 10.6002 7.2666 9.40023 7.2666 7.92523C7.2666 6.41689 8.48327 5.19189 9.99993 5.19189C11.5083 5.19189 12.7333 6.41689 12.7333 7.92523C12.7249 9.40023 11.5666 10.6002 10.0999 10.6502Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_3" d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
        <button @click="$router.push('/login')">
            <figure>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4417 14.62L20.0017 12.06L17.4417 9.5M9.76172 12.06H19.9317M11.7617 20C7.34172 20 3.76172 17 3.76172 12C3.76172 7 7.34172 4 11.7617 4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </figure>
        </button>
    </nav>
    <nav class="mobile" :class="{ opened: optionListDocuments}">
        <ul>
            <li>
                <h1>Documentos</h1>
                <svg @click="optionListDocuments = !optionListDocuments; checkMenuIsOpen();" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li v-for="(option, index) in optionsListDocuments" :class="{ selected: optionsListDocuments[index].selected }" @click="optionListDocuments = false; openListOptionsDocuments();">
                <p>{{ option.name }}</p>
                <span></span>
            </li>
        </ul>
        <button :class="{ 'active': $route.path === '/admin/home' || $route.path === '/admin/results' }" @click="$router.push('/admin/home'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15.5V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.39172 2.85004L2.61672 7.47504C1.96672 7.9917 1.55006 9.08337 1.69172 9.90004L2.80006 16.5334C3.00006 17.7167 4.13339 18.675 5.33339 18.675H14.6667C15.8584 18.675 17.0001 17.7084 17.2001 16.5334L18.3084 9.90004C18.4417 9.08337 18.0251 7.9917 17.3834 7.47504L11.6084 2.85837C10.7167 2.1417 9.27506 2.1417 8.39172 2.85004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </figure>
        </button>
        <button :class="{ 'active': $route.path === '/admin/documents', opened: optionListDocuments}" @click="optionListDocuments = !optionListDocuments; openListOptionsDocuments();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/folder">
                        <g id="folder">
                            <path id="Vector" d="M18.3334 9.6665V14.6665C18.3334 17.9998 17.5001 18.8332 14.1667 18.8332H5.83341C2.50008 18.8332 1.66675 17.9998 1.66675 14.6665V6.33317C1.66675 2.99984 2.50008 2.1665 5.83341 2.1665H7.08341C8.33342 2.1665 8.60841 2.53317 9.08341 3.1665L10.3334 4.83317C10.6501 5.24984 10.8334 5.49984 11.6667 5.49984H14.1667C17.5001 5.49984 18.3334 6.33317 18.3334 9.6665Z" stroke-width="1.5" stroke-miterlimit="10"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
        <button class="notify" @click="isNotificationsModalOpen = true">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5206 3.41016C9.21058 3.41016 6.52058 6.10016 6.52058 9.41016V12.3002C6.52058 12.9102 6.26058 13.8402 5.95058 14.3602L4.80058 16.2702C4.09058 17.4502 4.58058 18.7602 5.88058 19.2002C10.1906 20.6402 14.8406 20.6402 19.1506 19.2002C20.3606 18.8002 20.8906 17.3702 20.2306 16.2702L19.0806 14.3602C18.7806 13.8402 18.5206 12.9102 18.5206 12.3002V9.41016C18.5206 6.11016 15.8206 3.41016 12.5206 3.41016Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M14.3699 3.69994C14.0599 3.60994 13.7399 3.53994 13.4099 3.49994C12.4499 3.37994 11.5299 3.44994 10.6699 3.69994C10.9599 2.95994 11.6799 2.43994 12.5199 2.43994C13.3599 2.43994 14.0799 2.95994 14.3699 3.69994Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5195 19.5601C15.5195 21.2101 14.1695 22.5601 12.5195 22.5601C11.6995 22.5601 10.9395 22.2201 10.3995 21.6801C9.85953 21.1401 9.51953 20.3801 9.51953 19.5601" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
        </button>
        <button  :class="{ 'active': $route.path === '/admin/help' }" @click="$router.push('/admin/help'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/message-question">
                        <g id="message-question">
                            <path id="Vector" d="M14.167 15.8583H10.8337L7.12532 18.3249C6.57532 18.6916 5.83366 18.3 5.83366 17.6333V15.8583C3.33366 15.8583 1.66699 14.1916 1.66699 11.6916V6.69157C1.66699 4.19157 3.33366 2.5249 5.83366 2.5249H14.167C16.667 2.5249 18.3337 4.19157 18.3337 6.69157V11.6916C18.3337 14.1916 16.667 15.8583 14.167 15.8583Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M9.99952 9.9668V9.79183C9.99952 9.22516 10.3495 8.92515 10.6995 8.68348C11.0412 8.45015 11.3828 8.15016 11.3828 7.60016C11.3828 6.83349 10.7662 6.2168 9.99952 6.2168C9.23286 6.2168 8.61621 6.83349 8.61621 7.60016" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_3" d="M9.99592 11.9582H10.0034" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
        <button :class="{ 'active': $route.path === '/admin/profile' }" @click="$router.push('/admin/profile'); menuOpen = false; checkMenuIsOpen();">
            <figure>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/profile-circle">
                        <g id="profile-circle">
                            <path id="Vector" d="M10.0999 10.6502C10.0416 10.6419 9.9666 10.6419 9.89994 10.6502C8.43327 10.6002 7.2666 9.40023 7.2666 7.92523C7.2666 6.41689 8.48327 5.19189 9.99993 5.19189C11.5083 5.19189 12.7333 6.41689 12.7333 7.92523C12.7249 9.40023 11.5666 10.6002 10.0999 10.6502Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M15.6166 16.1498C14.1333 17.5081 12.1666 18.3331 9.99997 18.3331C7.8333 18.3331 5.86663 17.5081 4.3833 16.1498C4.46663 15.3665 4.96663 14.5998 5.8583 13.9998C8.14163 12.4831 11.875 12.4831 14.1416 13.9998C15.0333 14.5998 15.5333 15.3665 15.6166 16.1498Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_3" d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </g>
                </svg>
            </figure>
        </button>
    </nav>
    <div class="blackdrop"  @click="menuOpenOrClose()"></div>
    <div class="blackdrop-mobile"  @click="optionListDocuments = !optionListDocuments; openListOptionsDocuments(); checkMenuIsOpen();"></div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { isNotificationsModalOpen } from '../../../global/states/ModalState'

    /* Defines whether the menu is open or not. */
    const menuOpen = ref<boolean>(false);

    /* Open or close menu. */
    const menuOpenOrClose = () => {
        menuOpen.value = !menuOpen.value;
        optionListDocuments.value = false;
        checkMenuIsOpen();
    }

    /* Open list menu options */
    const openListOptionsDocuments = () => {
        menuOpen.value = true;
        checkMenuIsOpen();
    }

    /* List menu options */
    const menuOptions = ref<{ name: string; selected: boolean }[]>([
        { name: 'Home', selected: true },
        { name: 'Documentos', selected: false },
        { name: 'Ajuda', selected: false },
        { name: 'Perfil', selected: false }
    ]);

    /* Here are the item variables that have options. */
    const optionListDocuments = ref<boolean>(false);

    /* List menu options */
    const optionsListDocuments = ref<{ name: string; selected: boolean }[]>([
        { name: 'Criar', selected: false },
        { name: 'Gerenciar', selected: false },
        { name: 'Exceções', selected: false }
    ]);

    /* Assigns false to all options and assigns true to the selected options documents. */
    const toggleOptionDocumentsSelected = (index: number) => {
        optionsListDocuments.value.forEach((option, i) => {
            option.selected = i === index;
        });
        menuOpen.value = !menuOpen.value;
        checkMenuIsOpen();
    };

    /* Check if the menu is open. */
    const checkMenuIsOpen = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 425) {
            if (menuOpen.value) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        } else {
            console.log(optionListDocuments.value)
            if (optionListDocuments.value) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../global/scss/variables.scss';
    @import '../../../global/scss/animations.scss';

    nav{
        &.desktop{
            width: 66px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: start;
            background: #FFF;
            position: fixed;
            z-index: 3;
            top: 0;
            left: 0;
            padding: 30px 0 14px;
            row-gap: 1px;
            overflow-y: auto;
            box-sizing: border-box;
            transition: width .2s;
            &::-webkit-scrollbar{
                width: 0;
            }
            img{
                width: 35px;
                margin: 0 auto 15px 16px;
                cursor: pointer;
            }
            div{
                margin: auto 0;
            }
            button{
                padding: 0 10px;
                width: calc(100% - 26px);
                height: 40px;
                min-height: 40px;
                display: flex;
                align-items: center;
                justify-content: start;
                background: transparent;
                border: none;
                border-radius: 50%;
                transition: background .2s;
                margin: 13px 13px 14px;
                figure{
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: background .2s;
                    svg{
                        width: 20px;
                        min-width: 20px;
                        height: 20px;
                        min-height: 20px;
                        stroke: #090909;
                        transition: stroke .2s;
                        cursor: pointer;
                    }
                }
                &.active{
                    background: $fluxoo-primary-color !important;
                    cursor: default !important;
                    &::before{
                        color: #FFF !important;
                    }
                    svg{
                        stroke: #FFF !important;
                    }
                }
                &.options{
                    position: relative;
                    &.active{
                        cursor: pointer !important;
                        &.opened{
                            background: $fluxoo-primary-color !important;
                        }
                        &::after{
                            border-color: #FFF !important;
                        }
                    }
                    &::after{
                        content: '';
                        opacity: 0;
                        width: 10px;
                        height: 10px;
                        border-left: 2px solid #090909;
                        border-top: 2px solid #090909;
                        position: absolute;
                        top: 24px;
                        right: 25px;
                        transform: rotate(225deg);
                        border-radius: 2px;
                        transition: border-color .2s, transform .2s, top .2s;
                    }
                    &:hover{
                        &::after{
                            border-color: $fluxoo-primary-color;
                        }
                    }
                    &.opened{
                        background: $fluxoo-menu-primary-color-hover !important;
                        &::after{
                            transform: rotate(45deg);
                            top: 30px;
                            border-color: $fluxoo-primary-color;
                        }
                        &::before{
                            color: $fluxoo-primary-color;
                        }
                        figure{
                            svg{
                                stroke: $fluxoo-primary-color;
                            }
                        }
                    }
                    & ~ ul{
                        display: none;
                    }
                }
                &:hover{
                    background: $fluxoo-menu-primary-color-hover;
                    &::before{
                        color: $fluxoo-primary-color;
                    }
                    svg{
                        stroke: $fluxoo-primary-color;
                    }
                }
                &::before{
                    content: '';
                    color: #090909;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    position: absolute;
                    left: -100%;
                    opacity: 0;
                    transition: left .2s ease-out, color .2s;
                }
                &.menu{
                    figure{
                        svg{
                            path{
                                transition: all 0.2s;
                            }
                        }
                    }
                    &:hover{
                        background: unset;
                        svg{
                        stroke: $fluxoo-primary-color;
                        }
                    }
                    &::before{
                        content: '';
                    }
                }
                &:nth-child(3){
                    &::before{
                        content: 'Home';
                    }
                }
                &:nth-child(4){
                    &::before{
                        content: 'Documentos';
                    }
                }
                &:nth-child(6){
                    &::before{
                        content: 'Ajuda';
                    }
                }
                &:nth-child(8){
                    &::before{
                        content: 'Perfil';
                    }
                }
                &:nth-child(9){
                    &::before{
                        content: 'Sair';
                    }
                }
            }
            ul{
                display: none;
            }
            &.open{
                width: 220px;
                align-items: start;
                button{
                    width: calc(100% - 13px);
                    justify-content: start;
                    box-sizing: content-box;
                    border-radius: 30px;
                    height: 66px;
                    min-height: 66px;
                    margin: 0;
                    padding: 0 0 0 13px;
                    outline: none;
                    margin: 0 0 1px 0;
                    position: relative;
                    &::before{
                        opacity: 1;
                        left: 60px;
                        animation: enterContent ease-in-out .6s;
                    }
                    figure{
                        width: 100%;
                        max-width: 40px;
                        height: 100%;
                        max-height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #FFF;
                    }
                    &.active{
                        figure{
                            svg{
                                stroke: $fluxoo-primary-color !important;
                            }
                        }
                    }
                    &.options{
                        &.opened{
                            & ~ ul{
                                margin: 9px 0 10px;
                                display: flex;
                                animation: enterContentOptionsMenu ease-in-out .2s;
                            }
                        }
                        &::after{
                            opacity: 1;
                            animation: enterContent ease-in .6s;
                        }
                    }
                    &:hover{
                        &:before{
                            color: $fluxoo-primary-color;
                        }
                    }
                    &.menu{
                        figure{
                            svg{
                                path{
                                    &:nth-child(1){
                                        transform: rotate(45deg) translate(2px, -6px);
                                    }
                                    &:nth-child(2){
                                        opacity: 0;
                                    }
                                    &:nth-child(3){
                                        transform: rotate(-45deg) translate(-10px, -2px);
                                    }
                                }
                            }
                        }
                    }
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    row-gap: 10px;
                    margin: 0;
                    animation: leaveContentOptionsMenu ease-in-out .2s;
                    li{
                        height: 43px;
                        width: 170px;
                        border-radius: 30px;
                        background: #F5F5F5;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 13px 22px 13px 16px;
                        box-sizing: border-box;
                        transition: background .2s;
                        cursor: pointer;
                        p{
                            color: #D3D3D3;
                            font-family: 'Inter', sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            margin: 0;
                            transition: color .2s;
                        }
                        span{
                            width: 10px;
                            height: 10px;
                            border-left: 2px solid #D3D3D3;
                            border-top: 2px solid #D3D3D3;
                            transform: rotate(135deg);
                            border-radius: 2px;
                            transition: border-color .2s;
                        }
                        &:hover{
                            background: #F5F5F5;
                            p{
                                color: #6F6F6F;
                            }
                            span{
                                border-color: #6F6F6F;
                            }
                        }
                        &.selected{
                            cursor:  default !important;
                            background: $fluxoo-menu-primary-color-hover;
                            p{
                                color: $fluxoo-primary-color;
                            }
                            span{
                                border-color: $fluxoo-primary-color;
                            }
                        }
                    }
                }
                & ~ .blackdrop{
                    display: flex;
                    opacity: 1;
                    animation: enterContent ease-in .2s;
                }
            }
        }
        &.mobile{
            display: none;
        }
    }

    .blackdrop{
        width: 100dvw;
        height: 100dvh;
        background: #00000060;
        display: none;
        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        opacity: 0;
    }

    .blackdrop-mobile{
        width: 100dvw;
        height: 100dvh;
        background: #00000060;
        display: none !important;
        position: fixed;
        z-index: 2;
        left: 0;
        top: 0;
        opacity: 0;
    }

    @media(max-width: 425px){
        nav{
            &.desktop{
                display: none;
            }
            &.mobile{
                display: flex;
                width: 100%;
                height: 80px;
                position: fixed;
                bottom: 0;
                left: 0;
                padding: 0 15px;
                border-radius: 16px 16px 0px 0px;
                background: #FFF;
                box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                z-index: 3;
                button{
                    width: 40px;
                    min-width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    transition: background .2s;
                    cursor: pointer;
                    figure{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0;
                        svg{
                            width: 20px;
                            min-width: 20px;
                            height: 20px;
                            min-height: 20px;
                            stroke: #090909;
                            transition: stroke .2s;
                        }
                    }
                    &.notify{
                        width: unset;
                        min-width: unset;
                        height: unset;
                        background: unset !important;
                        svg{
                            width: 24px;
                            min-width: 24px;
                            height: 25px;
                            min-height: 25px;
                            stroke: #090909;
                        }
                    }
                    &.active{
                        background: $fluxoo-primary-color !important;
                        svg{
                            stroke: #FFF !important;
                        }
                    }
                    &.opened{
                        background: $fluxoo-menu-primary-color-hover !important;
                        svg{
                            stroke: $fluxoo-primary-color !important;
                        }
                        &.active{
                            background: $fluxoo-primary-color !important;
                            svg{
                                stroke: #FFF !important;
                            }
                        }
                    }
                    &:hover{
                        background: $fluxoo-menu-primary-color-hover;
                        svg{
                            stroke: $fluxoo-primary-color;
                        }
                    }
                }
                ul{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px 16px 0px 0px;
                    background: #FFF;
                    box-shadow: -5px -28px 63px -49px rgba(0, 0, 0, 0.5);
                    position: fixed;
                    bottom: -100%;
                    opacity: 0;
                    left: 0;
                    margin: 0;
                    padding: 20px 0;
                    z-index: -1;
                    transition: bottom .6s ease-out, opacity .9s;
                    li{
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 15px;
                        margin: 20px 0 0 0;
                        p{
                            color: #090909;
                            font-family: 'Inter', sans-serif;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: normal;
                            margin: 0;
                            transition: color .2s;
                        }
                        span{
                            width: 10px;
                            height: 10px;
                            border-left: 2px solid #090909;
                            border-top: 2px solid #090909;
                            transform: rotate(135deg);
                            border-radius: 2px;
                            transition: border-color .2s;
                        }
                        &.selected{
                            p{
                                color: $fluxoo-primary-color;
                            }
                            span{
                                border-color: $fluxoo-primary-color;
                            }
                        }
                        &:first-child{
                            margin: 0 0 18px;
                            h1{
                                color: #090909;
                                font-family: 'Inter', sans-serif;
                                font-size: 24px;
                                font-style: normal;
                                font-weight: 600;
                                line-height: normal;
                                margin: 0;
                            }
                            svg{
                                width: 24px;
                                min-width: 24px;
                                height: 24px;
                                min-height: 24px;
                                stroke: #090909;
                                transition: stroke .2s;
                                cursor: pointer;
                                &:hover{
                                    stroke: $fluxoo-primary-color;
                                }
                            }
                        }
                    }
                }
                &.opened{
                    ul{
                        bottom: 62px;
                        opacity: 1;
                    }
                    & ~ .blackdrop-mobile{
                        display: flex !important;
                        opacity: 1;
                        animation: enterContent ease-in .2s;
                    }
                }
            }
        }

        .blackdrop{
            display: none !important;
        }
    }
</style>
