<template>
  <div id="recover">
    <label @click="$router.go(-1)" class="back">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </figure>
      <p>Recuperar senha</p>
    </label>
    <main>
      <img src="@/assets/images/lock.png" alt="Imagem de um cadeado.">
      <h1>Esqueceu sua senha</h1>
      <h2>Informe o e-mail que usa para acessar o sistema e enviaremos um link verificador.</h2>
      <form action="">
        <div>
          <label for="email">Digite seu e-mail *</label>
          <input autocomplete='off' v-model="email" type="email" placeholder="ex: joaosasilva@gmail.com" name="email" id="email">
        </div>
        <nav>
          <input autocomplete='off' @click="recoverPasword" :disabled="!email.length" type="button" value="Solicitar">
        </nav>
      </form>
    </main>
  </div>
  <Loader v-if="isPerformingRequest" :zIndex="99"/>
</template>

<script setup lang="ts">
  import { isPerformingRequest, useAxios } from '@/api/axios';
  import Loader from '@/components/loader/Loader.vue'
  import { ref } from 'vue';
  import { toast } from 'vue3-toastify';

  /* Starts at the top of the page */
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

  const email = ref<string>('')
  const axios = useAxios()

  function recoverPasword(): void{
    axios.post('/forgot-password', { email: email.value })
    .then(() => {
      toast.success('Um email contendo o link de recuperação de senha foi enviado')
    })
  }
</script>

<style scoped lang="scss">
  @import '@/global/scss/variables.scss';

  #recover{
    animation: enterContent ease .4s;
    width: 100%;
    max-width: 425px;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0;
    padding: 45px 15px;
    box-sizing: border-box;
    .back{
      display: flex;
      align-items: center;
      column-gap: 20px;
      cursor: pointer;
      margin: 0 auto 45px 0;
      &:hover{
        figure{
          background: $fluxoo-primary-color;
        }
        svg{
          stroke: #FFF;
        }
        p{
          color: $fluxoo-primary-color;
        }
      }
      figure{
        width: 40px;
        min-width: 40px;
        height: 40px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        border-radius: 50px;
        background: #F5F5F5;
        transition: background .2s;
        svg{
          width: 24px;
          min-width: 24px;
          height: 24px;
          min-height: 24px;
          stroke: #090909;
          transition: stroke .2s;
        }
      }
      p{
        color: #090909;
        font-family: 'Nunito', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0;
        transition: color .2s
      }
    }
    main{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto 0;
      img{
        width: 180px;
        min-width: 180px;
        height: 180px;
        min-height: 180px;
        margin: 0 0 40px 0
      }
      h1{
        color: #090909;
        text-align: center;
        font-family: 'Nunito', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin: 0 0 6px 0;
      }
      h2{
        color: #6F6F6F;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0 0 108px 0;
      }
      form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
          width: 100%;
          height: unset;
          min-height: unset;
          display: flex;
          flex-direction: column;
          align-items: start;
          position: relative;
          margin: 0 0 72px 0;
          padding: unset;
          label{
            color: #090909;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0 0 8px 0;
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
              & ~ svg{
                stroke: $fluxoo-primary-color;
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
        nav{
          width: 100%;
          input[type='button']{
            margin: 0 0 100px 0;
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
              background: #056d4e
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

  @media (max-height: 945px) {
    #recover main form nav input[type='button'] {
      margin: 0 !important;
    }
  }

  @media(max-width: 425px){
    #recover{
      .back{
        margin: 0 auto 40px 0;
      }
      main{
        h2{
          margin: 0 0 60px 0;
        }
        form{
          div{
            margin: 0 0 100px 0;
          }
          nav{
            width: 100vw;
            position: fixed;
            left: 0;
            bottom: 0;
            border-radius: 20px 20px 0px 0px;
            background: #FFF;
            box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
            padding: 15px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
