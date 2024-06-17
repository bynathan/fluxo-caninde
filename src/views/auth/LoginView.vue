<template>
  <main id="login">
    <section></section>
    <section>
      <img src="@/assets/images/prefeitura-caninde.png" alt="Logo Prefeitura de Canindé.">
      <h1>Bem-vindo (a) de volta!</h1>
      <form @submit="$event.preventDefault()" action="">
        <section>
          <label for="email">Digite seu e-mail  <strong>*</strong></label>
          <input autocomplete='off' v-model="loginForm.email" type="text" placeholder="ex: joaosasilva@gmail.com" name="email" id="email">
        </section>
        <section>
          <label for="password">Digite sua senha  <strong>*</strong></label>
          <input autocomplete='off' v-model="loginForm.password" :type="showPassword ? 'text':'password'" placeholder="ex: 123456" name="password" id="password">
          <button type="button" @click="showPassword = !showPassword">
            <svg v-if="showPassword" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="vuesax/linear/eye">
              <g id="eye">
              <path id="Vector" d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.41998 13.9799 8.41998 11.9999C8.41998 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M12 20.2702C15.53 20.2702 18.82 18.1902 21.11 14.5902C22.01 13.1802 22.01 10.8102 21.11 9.40021C18.82 5.80021 15.53 3.72021 12 3.72021C8.47003 3.72021 5.18003 5.80021 2.89003 9.40021C1.99003 10.8102 1.99003 13.1802 2.89003 14.5902C5.18003 18.1902 8.47003 20.2702 12 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </g>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.47 14.53L2 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.9998 2L14.5298 9.47" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </section>
        <div>
          <label for="remember">
            <input autocomplete='off' type="checkbox" name="remember" id="remember" v-model="loginForm.remember">
            <span></span>
            <p>Permanecer logado</p>
          </label>
          <RouterLink :to="{name: 'recover-password'}">Esqueci a senha</RouterLink>
        </div>
        <input autocomplete='off' :disabled="!(loginForm.email && loginForm.password)" @click="$router.push('/admin/home')" type="button" value="Entrar">
      </form>
      <img src="@/assets/images/logo-fluxoo.png" alt="Logo fluxoo.">
    </section>
  </main>
  <Loader v-if="isPerformingRequest" :zIndex="99"/>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { isPerformingRequest, useAxios } from '@/api/axios'
  import router from '@/router';
  import { toast } from 'vue3-toastify';
  import Loader from '@/components/loader/Loader.vue'

  /* Starts at the top of the page */
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

  const showPassword = ref<boolean>(false)
  const loginForm = ref<{email?:string, password?:string, remember?:boolean}>({})
  const axios = useAxios()

  async function login(){
    axios.post('/login', loginForm.value)
    .then(() => {
      toast.success('logado com sucesso!')
      router.push({name:'admin.home'})
    })
  }
</script>

<style scoped lang="scss">
  @import '@/global/scss/variables.scss';

  #login{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    section{
      &:first-child{
        background-image: url('@/assets/images/background-login.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 0;
      }
      &:last-child{
        animation: enterContent ease .4s;
        max-height: 869px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        margin: auto 0;
        img{
          &:first-child{
            width: 111px;
            min-width: 111px;
            height: 145px;
            min-height: 145px;
          }
          &:last-child{
            width: 98px;
            min-width: 98px;
            height: 14px;
            min-height: 14px;
            margin: 20px 0 0 0;
          }
        }
        h1{
          font-size: 18px;
          font-family: 'Nunito', sans-serif;
          font-weight: 500;
          text-align: center;
          margin: 21px 0 0 0;
        }
        form{
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 387px;
          margin: 80px 0;
          section{
            display: flex;
            flex-direction: column;
            align-items: start;
            position: relative;
            background-image: unset;
            &:first-child{
              margin: 0 0 24px 0;
            }
            label{
              color: #090909;
              font-family: 'Inter', sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              margin: 0 0 8px 0;
              strong{
                color: #EB1320;
                font-weight: 600;
              }
            }
            input{
              width: 100%;
              height: 55px;
              padding: 0 18px;
              border-radius: 16px;
              border: none;
              background: #F5F5F5;
              box-sizing: border-box;
              color: #090909;
              font-family: 'Inter', sans-serif;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              &::placeholder{
                color: #090909;
                font-family: 'Inter', sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
              }
              &:focus{
                outline: none;
                color: $fluxoo-primary-color;
                &::placeholder{
                  color: transparent;
                }
                & ~ button{
                  svg{
                    stroke: $fluxoo-primary-color !important;
                  }
                }
              }
            }
            svg{
              width: 24px;
              min-width: 24px;
              height: 24px;
              min-height: 24px;
              stroke: #090909;
              position: absolute;
              bottom: 15px;
              right: 20px;
              transition: stroke .2s;
              cursor: pointer;
              &:hover{
                stroke: $fluxoo-primary-color;
              }
            }
          }
          div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 16px 0 32px 0;
            label{
              display: flex;
              align-items: center;
              column-gap: 10px;
              cursor: pointer;
              input{
                display: none;
                &:checked{
                  & ~ span{
                    border: 2px solid $fluxoo-primary-color;
                    background: $fluxoo-primary-color;
                  }
                  & ~ p{
                    color: $fluxoo-primary-color;
                  }
                }
              }
              span{
                width: 20px;
                min-width: 20px;
                height: 20px;
                min-height: 20px;
                position: relative;
                border: 2px solid #6F6F6F;
                border-radius: 6px;
                transition: all .2s;
                &::before{
                  content: '';
                  display: flex;
                  height: 10px;
                  width: 5px;
                  border-right: 2px solid #FFF;
                  border-bottom: 2px solid #FFF;
                  position: absolute;
                  left: 7px;
                  bottom: 6px;
                  transform: rotate(45deg);
                }
              }
              p{
                color: #6F6F6F;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin: 0;
                transition: color .2s
              }
            }
            a{
              color: $fluxoo-primary-color;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              text-decoration-line: underline;
              margin: 0;
            }
          }
          input[type='button']{
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 30px;
            background: $fluxoo-primary-color;
            color: #FFF;
            text-align: center;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 18px;
            transition: background .2s;
            cursor: pointer;
            &:hover{
              background: $fluxoo-primary-color-hover;
            }
            &:disabled{
              background: #F1F1F1 !important;
              color: #6F6F6F !important;
              cursor: not-allowed !important;
            }
          }
        }
      }
    }
  }

  @media(max-width: 830px){
    #login{
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('@/assets/images/background-login.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 0;
      padding: 40px 15px;
      margin: 0;
      section{
        width: 100%;
        padding: 0 15px;
        &:first-child{
          display: none;
        }
        &:last-child{
          background: #FFF;
          border-radius: 30px;
          padding: 40px 15px 25px;
          form{
            margin: 70px 0;
            section{
              padding: 0;
            }
            div{
              label{
                column-gap: 5px;
              }
            }
          }
        }
      }
    }
  }

  @media(max-width: 340px){
    #login{
      section{
        &:last-child{
          form{
            div{
              label{
                column-gap: 5px;
                span{
                  width: 15px;
                  min-width: 15px;
                  height: 15px;
                  min-height: 15px;
                  &:before{
                    height: 10px;
                    width: 5px;
                    border-right: 1px solid #FFF;
                    border-bottom: 1px solid #FFF;
                    left: 4px;
                    bottom: 4px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
