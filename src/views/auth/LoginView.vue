<template>
  <main>
    <section>

    </section>
    <section>
      <img src="../../assets/images/prefeitura-caninde.png" alt="Logo Prefeitura de Canindé.">
      <h1>Bem-vindo (a) de volta!</h1>
      <form action="">
        <section>
          <label for="email">Digite seu e-mail  <strong>*</strong></label>
          <input type="text" placeholder="ex: joaosasilva@gmail.com" name="email" id="email">
        </section>
        <section>
          <label for="password">Digite sua senha  <strong>*</strong></label>
          <input type="password" placeholder="••••••••" name="password" id="password">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/linear/eye">
            <g id="eye">
            <path id="Vector" d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.41998 13.9799 8.41998 11.9999C8.41998 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2" d="M12 20.2702C15.53 20.2702 18.82 18.1902 21.11 14.5902C22.01 13.1802 22.01 10.8102 21.11 9.40021C18.82 5.80021 15.53 3.72021 12 3.72021C8.47003 3.72021 5.18003 5.80021 2.89003 9.40021C1.99003 10.8102 1.99003 13.1802 2.89003 14.5902C5.18003 18.1902 8.47003 20.2702 12 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
          </svg>
        </section>
        <div>
          <label for="remember">
            <input type="checkbox" name="remember" id="remember">
            <span></span>
            <p>Permanecer logado</p>
          </label>
          <a href="">Esqueci a senha</a>
        </div>
        <input type="button" value="Entrar">
      </form>
      <img src="../../assets/images/logo-fluxoo.png" alt="Logo fluxoo.">
    </section>
  </main>
</template>

<style scoped lang="scss">
  main{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    section{
      &:first-child{
        background-image: url('../../assets/images/background-login.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 0;
      }
      &:last-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
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
          margin: 117px 0;
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
                color: #079F72;
                &::placeholder{
                  color: transparent;
                }
                & ~ svg{
                  stroke: #079F72;
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
                stroke: #079F72;
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
                    border: 2px solid #079F72;
                    background: #079F72;
                  }
                  & ~ p{
                    color: #079F72;
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
              color: #079F72;
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
            background: #079F72;
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

  @media(max-width: 830px){
    main{
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('../../assets/images/background-login.png');
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
    main{
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

<script lang="ts" setup>
</script>
