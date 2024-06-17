<template>
    <div class="date-picker">
      <div class="select-date">
        <MySelect :name="'year-date'" :currentValue="yearDateSelected.toString()">
          <li v-for="(year, index) in yearsDatePicker" :key="index" @click="yearDateSelected = year.toString(); daysInMonth(); dayDateSelected = 15;">{{ year }}</li>
        </MySelect>
        <MySelect :name="'mouth-date'" :currentValue="mouthsDatePicker[mouthDateSelected]">
          <li v-for="(month, index) in mouthsDatePicker" :key="index" @click="mouthDateSelected = index; daysInMonth(); dayDateSelected = 15;">{{ month }}</li>
        </MySelect>
      </div>
      <div class="select-day">
          <div class="names date">
            <p>Dom</p>
            <p>Seg</p>
            <p>Ter</p>
            <p>Qua</p>
            <p>Qui</p>
            <p>Sex</p>
            <p>Sab</p>
          </div>
          <div class="days date">
            <label class="day" :class="{undefined: day == -1}" v-for="(day, index) in daysInMonthList" :key="index">
              <input type="radio" v-if="day !== -1" :value="day" :id="'day-' + index" :name="'day-limit'" v-model="dayDateSelected">
              <span>{{day == -1 ? '•' : day}}</span>
            </label>
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import MySelect from '@/components/select/MySelect.vue'

  const yearDateSelected = ref<number>(new Date().getFullYear());
  const mouthDateSelected = ref<number>(new Date().getMonth());
  const dayDateSelected = ref<number>(new Date().getDate());

  const mouthsDatePicker = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  let yearsDatePicker = [];
  for (var i = new Date().getFullYear(); i >= 2000; i--) {
    yearsDatePicker.push(i);
  }

  let daysInMonthList: any[] = []

  function getFirstDayOfWeekAndDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const firstDayOfWeek = date.getDay();

    const nextMonthDate = new Date(year, month + 1, 0);
    const daysInMonth = nextMonthDate.getDate();

    return {
        firstDayOfWeek: firstDayOfWeek,
        daysInMonth: daysInMonth
    };
  }

  function daysInMonth() {
    const firstDayOfWeek = getFirstDayOfWeekAndDaysInMonth(yearDateSelected.value, mouthDateSelected.value).firstDayOfWeek;
    const days = getFirstDayOfWeekAndDaysInMonth(yearDateSelected.value, mouthDateSelected.value).daysInMonth;

    daysInMonthList = [];

    switch(firstDayOfWeek){
      case 1:
        for(let i = 0; i < 1; i++){
          daysInMonthList.push(-1);
        }
        break
      case 2:
        for(let i = 0; i < 2; i++){
          daysInMonthList.push(-1);
        }
        break
      case 3:
        for(let i = 0; i < 3; i++){
          daysInMonthList.push(-1);
        }
        break
      case 4:
        for(let i = 0; i < 4; i++){
          daysInMonthList.push(-1);
        }
        break
      case 5:
        for(let i = 0; i < 5; i++){
          daysInMonthList.push(-1);
        }
        break
      case 6:
        for(let i = 0; i < 6; i++){
          daysInMonthList.push(-1);
        }
        break
      default:
        break
    }

    for(let i = 0; i < days; i++){
      daysInMonthList.push(formatSingleDigit(i + 1).toString());
    }
  }

  function formatSingleDigit(number) {
    if (number.toString().length === 1) {
      return '0' + number;
    } else {
      return number.toString();
    }
  }

  daysInMonth();

  function printDateSelected(){
    const mouths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    console.log(`Dia ${dayDateSelected.value}, Mês de ${mouths[mouthDateSelected.value]}, do Ano de ${yearDateSelected.value}`)
  }
</script>

<style lang="scss">
  @import '@/global/scss/variables.scss';

  .date-picker{
    display: flex;
    flex-direction: column;
    margin: 0 0 auto 0;
    .select-date{
      width: 100%;
      display: flex;
      align-items: center;
      column-gap: 8px;
      margin: 0 0 25px 0;
      label{
        display: flex;
        position: relative;
        input{
          width: 100%;
          height: 55px;
          border-radius: 30px;
          background: #E0ECE9;
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          box-sizing: border-box;
          border: none;
          padding: 0 20px 0 20px;
          cursor: pointer;
          &:focus{
            outline: unset;
          }
        }
        ul{
          width: 100%;
          max-height: 100px;
          overflow-y: auto;
          display: none;
          flex-direction: column;
          border-radius:30px;
          background: #FFF;
          box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
          padding: 12px 20px;
          margin: 0;
          box-sizing: border-box;
          position: absolute;
          row-gap: 10px;
          top: calc(100% + 5px);
          z-index: 1;
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
        &:first-child{
          max-width: 120px;
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
          right: 20px;
          transform: rotate(225deg);
          transition: border-color .2s;
        }
      }
      .mySelect{
        width: 100%;
        column-gap: unset;
        input{
          width: 100%;
          background: $fluxoo-menu-primary-color-hover;
        }
        &:hover{
          input{
            color: $fluxoo-primary-color;
          }
          &:before{
            border-color: $fluxoo-primary-color;
          }
        }
        &.open{
          &:before{
            border-color: #FFF;
          }
          input{
            border: unset;
            color: #FFF;
            background: $fluxoo-primary-color;
            padding: 15px 20px;
          }
          ul{
            display: flex;
          }
        }
      }
    }
    .select-day{
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      .date{
        display: grid;
        grid-template-columns: repeat(7, 38px);
        gap: 3px;
        margin: 0;
        justify-content: center;
      }
      .names{
        p{
          color: #6F6F6F;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }
      }
      .days{
        .day{
          display: flex;
          span{
            width: 37px;
            min-width: 37px;
            height: 37px;
            min-height: 37px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #090909;
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            border: 1px solid transparent;
            transition: border-color .2s, background .2s, color .2s;
            cursor: pointer;
            &:hover{
              border-color: $fluxoo-primary-color;
              color: $fluxoo-primary-color;
            }
          }
          input{
            display: none;
            &:checked{
              & ~ span{
                border-color: $fluxoo-primary-color;
                background: $fluxoo-primary-color;
                color: #FFF;
                cursor: default;
              }
            }
          }
          &.undefined{
            span{
              color: #6F6F6F;
              border-color: transparent !important;
              cursor: default;
            }
          }
          &::before{
            display: none;
          }
        }
      }
    }
  }
</style>
