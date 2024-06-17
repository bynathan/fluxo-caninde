<template>
  <div id="results">
      <label @click="$router.push('/admin/home')" class="back">
          <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </figure>
          <p>Resultado busca</p>
      </label>
      <input autocomplete='off' type="radio" name="results" id="results-docs" checked>
      <input autocomplete='off' type="radio" name="results" id="results-organs">
      <input autocomplete='off' type="radio" name="results" id="results-users">
      <main>
          <div class="tab">
            <label for="results-docs">Documentos</label>
            <label for="results-organs">Orgãos</label>
            <label for="results-users">Usuários</label>
          </div>
          <section class="documents list">
            <p>Resultados para: <strong>DOCUMENTOS</strong></p>
            <section>
              <h2>Ofício <strong>Nº 0</strong></h2>
              <h1>Solicitação de informações sobre férias coletiva da Secretaria Municipal de Segurança Pública e Trânsito</h1>
              <h2>Gabinete</h2>
            </section>
            <section>
              <h2>Ofício <strong>Nº 0</strong></h2>
              <h1>Solicitação de informações sobre férias coletiva da Secretaria Municipal de Segurança Pública e Trânsito</h1>
              <h2>Gabinete</h2>
            </section>
            <section>
              <h2>Ofício <strong>Nº 0</strong></h2>
              <h1>Solicitação de informações sobre férias coletiva da Secretaria Municipal de Segurança Pública e Trânsito</h1>
              <h2>Gabinete</h2>
            </section>
          </section>
          <section class="organs list">
            <p>Resultados para: <strong>ORGÃOS</strong></p>
            <section>
              <h2>Ofício <strong>Nº 0</strong></h2>
              <h1>Solicitação de informações sobre férias coletiva da Secretaria Municipal de Segurança Pública e Trânsito</h1>
              <h2>Gabinete</h2>
            </section>
          </section>
          <section class="users">
            <p>Resultados para: <strong>USUÁRIOS</strong></p>
            <section>
              <p>SMST</p>
              <div class="itens">
                <div class="item">
                  <h1>Sérgio Dias</h1>
                  <h2>SMST</h2>
                </div>
                <div class="item">
                  <h1>Sérgio Dias</h1>
                  <h2>SMST</h2>
                </div>
                <div class="item">
                  <h1>Sérgio Dias</h1>
                  <h2>SMST</h2>
                </div>
              </div>
            </section>
            <section>
              <p>SMST</p>
              <div class="itens">
                <div class="item">
                  <h1>Sérgio Dias</h1>
                  <h2>SMST</h2>
                </div>
              </div>
            </section>
          </section>
      </main>
  </div>
</template>

<script setup lang="ts">
  /* Starts at the top of the page */
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
</script>

<style lang="scss">
  @import '@/global/scss/variables.scss';

  #results{
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
    animation: enterContent ease .4s;
    .back{
        display: flex;
        align-items: center;
        column-gap: 16px;
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
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0;
            transition: color .2s
        }
    }
    input[type='radio']{
        display: none;
        &#results-docs:checked{
          & ~ main{
            .tab{
              label:nth-child(1){
                background: $fluxoo-primary-color;
                color: #FFF;
              }
            }
            .documents{
              display: flex;
            }
          }
        }
        &#results-organs:checked{
          & ~ main{
            .tab{
              label:nth-child(2){
                background: $fluxoo-primary-color;
                color: #FFF;
              }
            }
            .organs{
              display: flex;
            }
          }
        }
        &#results-users:checked{
          & ~ main{
            .tab{
              label:nth-child(3){
                background: $fluxoo-primary-color;
                color: #FFF;
              }
            }
            .users{
              display: flex;
            }
          }
        }
    }
    main{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      .tab{
        width: 100%;
        display: flex;
        align-content: center;
        column-gap: 24px;
        margin: 0 0 32px 0;
        label{
          height: 38px;
          padding: 20px;
          display: flex;
          align-items: center;
          color: #090909;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 0.48px;
          background: #F1F1F1;
          border-radius: 30px;
          box-sizing: border-box;
          transition: background .2s, color .2s;
          cursor: pointer;
          &:hover{
              background: $fluxoo-primary-color;
              color: #FFF;
          }
        }
      }
      section{
        width: 100%;
        display: none;
        animation: enterContent ease .4s;
      }
      .list{
        width: 100%;
        flex-direction: column;
        align-items: start;
        p{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0 0 20px 0;
        }
        section{
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          height: 85px;
          padding: 18px 24px;
          border-radius: 24px;
          border: 1px solid #F1F1F1;
          box-sizing: border-box;
          margin: 0 0 10px 0;
          transition: border-color .2s, background .2s;
          position: relative;
          cursor: pointer;
          &:before{
            content: '';
            width: 12px;
            height: 12px;
            border-right: 2px solid #090909;
            border-top: 2px solid #090909;
            transform: rotate(45deg);
            position: absolute;
            right: 30px;
            border-radius: 2px;
            transition: border-color .2s;
          }
          &:last-child{
            margin: 0 0 50px 0;
          }
          &:hover{
            border-color: $fluxoo-primary-color;
            background: $fluxoo-primary-color;
            h1{
              color: #FFF;
              text-decoration-line: underline;
            }
            h2{
              color: #FFF;
            }
            &::before{
              border-color: #FFF;
            }
          }
          h1{
            max-width: 85%;
            color: #090909;
            font-family: 'Nunito', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            white-space: normal;
            text-align: start;
            transition: color .2s;
          }
          h2{
            color: #090909;
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin: 0;
            transition: color .2s;
          }
        }
      }
      .users{
        width: 100%;
        flex-direction: column;
        align-items: start;
        p{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0 0 20px 0;
        }
        section{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          margin: 0 0 38px 0;
          &:last-child{
            margin: 0 0 50px 0;
          }
          p{
            margin: 0 0 5px 0;
          }
          .itens{
            width: 100%;
            display: grid;
            flex-direction: column;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 19px;
            row-gap: 10px;
            .item{
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: center;
              height: 85px;
              padding: 18px 24px;
              border-radius: 24px;
              border: 1px solid #F1F1F1;
              box-sizing: border-box;
              margin: 0 0 10px 0;
              transition: border-color .2s, background .2s;
              position: relative;
              cursor: pointer;
              &:before{
                content: '';
                width: 12px;
                height: 12px;
                border-right: 2px solid #090909;
                border-top: 2px solid #090909;
                transform: rotate(45deg);
                position: absolute;
                right: 30px;
                border-radius: 2px;
                transition: border-color .2s;
              }
              &:hover{
                border-color: $fluxoo-primary-color;
                background: $fluxoo-primary-color;
                h1{
                  color: #FFF;
                  text-decoration-line: underline;
                }
                h2{
                  color: #FFF;
                }
                &::before{
                  border-color: #FFF;
                }
              }
              h1{
                max-width: 85%;
                color: #090909;
                font-family: 'Nunito', sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 16px;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                white-space: normal;
                text-align: start;
                transition: color .2s;
              }
              h2{
                color: #090909;
                font-family: 'Inter', sans-serif;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin: 0;
                transition: color .2s;
              }
            }
          }
        }
      }
    }
  }

  @media(max-width: 490px){
    #results{
      main{
        .tab{
          overflow-y: auto;
          justify-content: start;
          &::-webkit-scrollbar{
            height: 0;
          }
        }
      }
    }
  }

  @media(max-width: 425px){
    #results{
      max-width: unset;
      .back{
        margin: 0 auto 40px 0;
      }
    }
  }
</style>
