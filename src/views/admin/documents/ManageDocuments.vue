<template>
  <div class="manage-documents">
    <label @click="$router.go(-1)" class="back">
      <figure>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </figure>
      <p>Gerenciar documentos</p>
    </label>
    <div class="header">
      <label class="search" for="search-doc">
        <input autocomplete='off' type="text" placeholder="Digite sua busca" id="search-doc" name="search-doc">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M17.5002 17.5002L13.881 13.881M13.881 13.881C14.5001 13.2619 14.9912 12.527 15.3262 11.7181C15.6612 10.9093 15.8337 10.0423 15.8337 9.16684C15.8337 8.29134 15.6612 7.42441 15.3262 6.61555C14.9912 5.80669 14.5001 5.07174 13.881 4.45267C13.2619 3.8336 12.527 3.34252 11.7181 3.00748C10.9093 2.67244 10.0423 2.5 9.16684 2.5C8.29134 2.5 7.42441 2.67244 6.61555 3.00748C5.80669 3.34252 5.07174 3.8336 4.45267 4.45267C3.2024 5.70295 2.5 7.39868 2.5 9.16684C2.5 10.935 3.2024 12.6307 4.45267 13.881C5.70295 15.1313 7.39868 15.8337 9.16684 15.8337C10.935 15.8337 12.6307 15.1313 13.881 13.881Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </label>
      <div class="filters">
        <button>
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 2V5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 9.08984H20.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6937 13.7002H15.7027" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6937 16.7002H15.7027" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9945 13.7002H12.0035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9945 16.7002H12.0035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29529 13.7002H8.30427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29529 16.7002H8.30427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </figure>
        </button>
        <button>
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.0399 3.01976L8.15988 10.8998C7.85988 11.1998 7.55988 11.7898 7.49988 12.2198L7.06988 15.2298C6.90988 16.3198 7.67988 17.0798 8.76988 16.9298L11.7799 16.4998C12.1999 16.4398 12.7899 16.1398 13.0999 15.8398L20.9799 7.95976C22.3399 6.59976 22.9799 5.01976 20.9799 3.01976C18.9799 1.01976 17.3999 1.65976 16.0399 3.01976Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </figure>
        </button>
        <button>
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.9284 2.1001L5.99844 10.0001M5.39844 2.1001H18.5984C19.6984 2.1001 20.5984 3.0001 20.5984 4.1001V6.3001C20.5984 7.1001 20.0984 8.1001 19.5984 8.6001L15.2984 12.4001C14.6984 12.9001 14.2984 13.9001 14.2984 14.7001V19.0001C14.2984 19.6001 13.8984 20.4001 13.3984 20.7001L11.9984 21.6001C10.6984 22.4001 8.89844 21.5001 8.89844 19.9001V14.6001C8.89844 13.9001 8.49844 13.0001 8.09844 12.5001L4.29844 8.5001C3.79844 8.0001 3.39844 7.1001 3.39844 6.5001V4.2001C3.39844 3.0001 4.29844 2.1001 5.39844 2.1001Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </figure>
        </button>
        <button>
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 11V17L11 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 17L7 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </figure>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  @import '@/global/scss/variables.scss';

  .manage-documents{
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 32px 0 0 0;
    .back{
      display: flex;
      align-items: center;
      column-gap: 16px;
      cursor: pointer;
      margin: 0 auto 45px 0;
      animation: enterContent ease .4s;
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
    .header{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;
      .search{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            width: 100%;
            height: 55px;
            border: none;
            border-radius: 16px;
            background: #F5F5F5;
            color: $fluxoo-primary-color;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding: 20px 56px 20px 20px;
            box-sizing: border-box;
            transition: background .2s;
            &:focus{
                outline: none;
                &::placeholder{
                  color: transparent
                }
                & ~ svg{
                  stroke: $fluxoo-primary-color;
                }
            }
            &::placeholder{
                color: #090909;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            &:read-only{
                cursor: default !important;
            }
        }
        svg{
            width: 20px;
            min-width: 20px;
            height: 20px;
            min-height: 20px;
            position: absolute;
            right: 20px;
            stroke: #090909;
            cursor: pointer;
        }
      }
      .filters{
        display: flex;
        align-items: center;
        column-gap: 15px;
        button{
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid #D5D5D5;
          transition: border-color .2s;
          cursor: pointer;
          &:hover{
            border-color: $fluxoo-primary-color;
            outline: 1px solid $fluxoo-primary-color;
            svg{
              stroke: $fluxoo-primary-color;
            }
          }
          figure{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            svg{
              width: 24px;
              min-width: 24px;
              height: 24px;
              min-height: 24px;
              stroke: #090909;
              transition: stroke .2s;
            }
          }
        }
      }
    }
  }
</style>
