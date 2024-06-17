<template>
  <div id="create-documents">
    <section>
      <h1><strong>Tipo de documento?</strong> (obrigatório)</h1>
      <MySelect :name="'document_type'" :currentValue="selectedDocumentType">
        <li v-for="(type, index) in ['Sérgio Dias', 'Nathan Silva', 'Vitor Santos']" :key="index" @click="selectedDocumentType = type;">{{type}}</li>
      </MySelect>
    </section>
    <section>
      <h1><strong>Órgão</strong> (obrigatório)</h1>
      <h2>Qual órgão irá ter acesso a esse documento?</h2>
      <MyOptions :currentValue="organsSelected">
        <div class="item" v-for="(organs, index) in ['Ministério da Saúde', 'Tribunal de Justiça', 'Secretaria da Fazenda']" :key="index">
          <input type="radio" :id="'organs-' + index + 1" name="organs" :value="organs" v-model="organsSelected">
          <label :for="'organs-' + index + 1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                <g clip-path="url(#clip0_388_3128)">
                  <path d="M12.3047 2.42188C12.3047 2.63021 12.2318 2.80729 12.0859 2.95312L6.42969 8.60938L5.36719 9.67188C5.22135 9.81771 5.04427 9.89062 4.83594 9.89062C4.6276 9.89062 4.45052 9.81771 4.30469 9.67188L3.24219 8.60938L0.414062 5.78125C0.268229 5.63542 0.195312 5.45833 0.195312 5.25C0.195312 5.04167 0.268229 4.86458 0.414062 4.71875L1.47656 3.65625C1.6224 3.51042 1.79948 3.4375 2.00781 3.4375C2.21615 3.4375 2.39323 3.51042 2.53906 3.65625L4.83594 5.96094L9.96094 0.828125C10.1068 0.682292 10.2839 0.609375 10.4922 0.609375C10.7005 0.609375 10.8776 0.682292 11.0234 0.828125L12.0859 1.89062C12.2318 2.03646 12.3047 2.21354 12.3047 2.42188Z"/>
                </g>
                <defs>
                  <clipPath id="clip0_388_3128">
                    <rect width="12.5" height="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{{organs}}</p>
          </label>
        </div>
      </MyOptions>
    </section>
    <section>
      <h1><strong>Responsável</strong> (obrigatório)</h1>
      <h2>Quem irá ter acesso a esse documento?</h2>
      <MyOptions :currentValue="responsibleSelected">
        <div class="item" v-for="(responsible, index) in ['Sérgio Dias', 'Nathan Silva', 'Vitor Santos']" :key="index">
          <input type="radio" :id="'responsible-' + index + 1" name="responsible" :value="responsible" v-model="responsibleSelected">
          <label :for="'responsible-' + index + 1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                <g clip-path="url(#clip0_388_3128)">
                  <path d="M12.3047 2.42188C12.3047 2.63021 12.2318 2.80729 12.0859 2.95312L6.42969 8.60938L5.36719 9.67188C5.22135 9.81771 5.04427 9.89062 4.83594 9.89062C4.6276 9.89062 4.45052 9.81771 4.30469 9.67188L3.24219 8.60938L0.414062 5.78125C0.268229 5.63542 0.195312 5.45833 0.195312 5.25C0.195312 5.04167 0.268229 4.86458 0.414062 4.71875L1.47656 3.65625C1.6224 3.51042 1.79948 3.4375 2.00781 3.4375C2.21615 3.4375 2.39323 3.51042 2.53906 3.65625L4.83594 5.96094L9.96094 0.828125C10.1068 0.682292 10.2839 0.609375 10.4922 0.609375C10.7005 0.609375 10.8776 0.682292 11.0234 0.828125L12.0859 1.89062C12.2318 2.03646 12.3047 2.21354 12.3047 2.42188Z"/>
                </g>
                <defs>
                  <clipPath id="clip0_388_3128">
                    <rect width="12.5" height="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>{{responsible}}</p>
          </label>
        </div>
      </MyOptions>
    </section>
    <section>
      <h1><strong>Titulo desse documento</strong> (obrigatório)</h1>
      <h2>Dê um titulo claro para esse documento.</h2>
      <input type="text" placeholder="Ex: OFICIO 25 - SOLICITAÇÃO DE FALTAS" name="title-document" id="title-document">
    </section>
    <section>
      <h1><strong>Numero do ofício</strong> (obrigatório)</h1>
      <h2>Adicione esse número para facilitar a organização no sistema.</h2>
      <input type="text" placeholder="Ex: 1011" name="title-document" id="title-document">
    </section>
    <section>
      <h1><strong>Data limite</strong> (obrigatório)</h1>
      <h2>Prazo máximo para o documento ser apreciado.</h2>
      <label class="date-picker-label" for="date-limit-document" placeholder="Selecione uma data" :value="datePickerValue" @click="isDatePickerModalOpen = true;">
        <input type="text" placeholder="Selecione uma data" name="date-limit-document" id="date-limit-document" readonly>
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
      </label>
    </section>
    <section>
      <h1><strong>Conteúdo desse documento</strong> (obrigatório)</h1>
      <h2>Descreva os principais detalhes que irão ajudar aos interessados saber sobre o documento.</h2>
      <div class="text"></div>
    </section>
    <section>
      <h1><strong>Arquivo do documento</strong> (obrigatório)</h1>
      <h2>Adicione um arquivo a esse documento, podendo ser DOC ou PDF.</h2>
      <label for="file-document" class="file-document">
        <input type="file" name="file-document" id="file-document" accept=".txt, .rtf, .doc, .docx, .odt, .pdf">
        <p>Clique aqui ou arraste e solte para adicionar um arquivo</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M27.332 13.586H23.4787C20.3187 13.586 17.7454 11.0127 17.7454 7.85268V3.99935C17.7454 3.26602 17.1454 2.66602 16.412 2.66602H10.7587C6.65203 2.66602 3.33203 5.33268 3.33203 10.0927V21.906C3.33203 26.666 6.65203 29.3327 10.7587 29.3327H21.2387C25.3454 29.3327 28.6654 26.666 28.6654 21.906V14.9193C28.6654 14.186 28.0654 13.586 27.332 13.586ZM15.372 18.0393C15.172 18.2393 14.9187 18.3327 14.6654 18.3327C14.412 18.3327 14.1587 18.2393 13.9587 18.0393L12.9987 17.0793V22.666C12.9987 23.2127 12.5454 23.666 11.9987 23.666C11.452 23.666 10.9987 23.2127 10.9987 22.666V17.0793L10.0387 18.0393C9.65203 18.426 9.01203 18.426 8.62536 18.0393C8.43939 17.8512 8.3351 17.5973 8.3351 17.3327C8.3351 17.0681 8.43939 16.8142 8.62536 16.626L11.292 13.9593C11.3854 13.8793 11.4787 13.8127 11.5854 13.7593C11.612 13.746 11.652 13.7327 11.6787 13.7193C11.7587 13.6927 11.8387 13.6793 11.932 13.666H12.0387C12.1454 13.666 12.252 13.6927 12.3587 13.7327H12.3854C12.492 13.7727 12.5987 13.8527 12.6787 13.9327C12.692 13.946 12.7054 13.946 12.7054 13.9593L15.372 16.626C15.7587 17.0127 15.7587 17.6527 15.372 18.0393Z"/>
          <path d="M23.2409 11.7463C24.5076 11.7597 26.2676 11.7597 27.7742 11.7597C28.5342 11.7597 28.9342 10.8663 28.4009 10.333C26.4809 8.39966 23.0409 4.91967 21.0676 2.94633C20.5209 2.39967 19.5742 2.773 19.5742 3.533V8.18633C19.5742 10.133 21.2276 11.7463 23.2409 11.7463Z"/>
        </svg>
        <div class="attachment">
          <h1>ANEXO</h1>
          <div class="item">
            <h2>SOLICITAÇÃO - Ofício 192, com solicitação de férias, com solicitação de férias, com solicitação de férias, com solicitação de férias, com solicitação de férias, com solicitação de férias, com solicitação de férias</h2>
            <div>
              <button class="tooltip">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill="none" d="M12.9641 9.99993C12.9641 11.6499 11.6327 12.9833 9.98499 12.9833C8.33731 12.9833 7.00586 11.6499 7.00586 9.99993C7.00586 8.34993 8.33731 7.0166 9.98499 7.0166C11.6327 7.0166 12.9641 8.34993 12.9641 9.99993Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M9.98643 16.8913C12.924 16.8913 15.6618 15.1579 17.5674 12.1579C18.3164 10.9829 18.3164 9.00794 17.5674 7.83294C15.6618 4.83294 12.924 3.09961 9.98643 3.09961C7.04891 3.09961 4.3111 4.83294 2.40546 7.83294C1.65651 9.00794 1.65651 10.9829 2.40546 12.1579C4.3111 15.1579 7.04891 16.8913 9.98643 16.8913Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </figure>
              </button>
              <button class="tooltip">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path fill="none" d="M18.4086 4.98307C15.6375 4.70807 12.8497 4.56641 10.0703 4.56641C8.42264 4.56641 6.77497 4.64974 5.12729 4.81641L3.42969 4.98307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M8.00781 4.14199L8.19089 3.05033C8.32403 2.25866 8.42389 1.66699 9.83024 1.66699H12.0105C13.4169 1.66699 13.525 2.29199 13.6499 3.05866L13.8329 4.14199" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M16.6193 7.61621L16.0784 16.0079C15.9869 17.3162 15.912 18.3329 13.5903 18.3329H8.24781C5.92609 18.3329 5.85119 17.3162 5.75965 16.0079L5.21875 7.61621" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M9.5293 13.75H12.3004" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M8.83984 10.417H13.0006" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </figure>
              </button>
            </div>
          </div>
          <div class="item">
            <h2>SOLICITAÇÃO - Ofício 192, com solicitação de férias.</h2>
            <div>
              <button class="tooltip">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill="none" d="M12.9641 9.99993C12.9641 11.6499 11.6327 12.9833 9.98499 12.9833C8.33731 12.9833 7.00586 11.6499 7.00586 9.99993C7.00586 8.34993 8.33731 7.0166 9.98499 7.0166C11.6327 7.0166 12.9641 8.34993 12.9641 9.99993Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M9.98643 16.8913C12.924 16.8913 15.6618 15.1579 17.5674 12.1579C18.3164 10.9829 18.3164 9.00794 17.5674 7.83294C15.6618 4.83294 12.924 3.09961 9.98643 3.09961C7.04891 3.09961 4.3111 4.83294 2.40546 7.83294C1.65651 9.00794 1.65651 10.9829 2.40546 12.1579C4.3111 15.1579 7.04891 16.8913 9.98643 16.8913Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </figure>
              </button>
              <button class="tooltip">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path fill="none" d="M18.4086 4.98307C15.6375 4.70807 12.8497 4.56641 10.0703 4.56641C8.42264 4.56641 6.77497 4.64974 5.12729 4.81641L3.42969 4.98307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M8.00781 4.14199L8.19089 3.05033C8.32403 2.25866 8.42389 1.66699 9.83024 1.66699H12.0105C13.4169 1.66699 13.525 2.29199 13.6499 3.05866L13.8329 4.14199" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M16.6193 7.61621L16.0784 16.0079C15.9869 17.3162 15.912 18.3329 13.5903 18.3329H8.24781C5.92609 18.3329 5.85119 17.3162 5.75965 16.0079L5.21875 7.61621" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M9.5293 13.75H12.3004" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill="none" d="M8.83984 10.417H13.0006" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </figure>
              </button>
            </div>
          </div>
        </div>
      </label>
    </section>
    <nav>
      <input type="button" value="Enviar" @click="isCreateDocumentModalOpen = true;">
      <input type="button" value="Cancelar" @click="$router.push('/admin/home')">
    </nav>
    <MyModal :width="'341px !important'" :height="'517px !important'" :className="'date-limit'" :isOpen="isDatePickerModalOpen" :toggleModal="(v: boolean) => isDatePickerModalOpen = v" :zIndex="100">
      <div class="modal-date-title">
        <h1>Data limite</h1>
        <h2>Prazo máximo para ser aceito.</h2>
      </div>
      <MyDatePicker/>
      <input type="button" value="Aplicar data">
    </MyModal>
    <MyModal :width="'330px !important'" :height="'179px !important'" :isOpen="isCreateDocumentModalOpen" :class-name="'confirm-create-document'" :toggleModal="(v: boolean) => isCreateDocumentModalOpen = v" :zIndex="100">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M18.1787 40.0616V18.0482C18.1787 17.1816 18.4387 16.3366 18.9154 15.6216L24.8304 6.82491C25.762 5.41657 28.0804 4.41991 30.052 5.15657C32.1754 5.87157 33.5837 8.2549 33.1287 10.3782L32.002 17.4632C31.9154 18.1132 32.0887 18.6982 32.457 19.1532C32.8254 19.5649 33.367 19.8249 33.952 19.8249H42.857C44.5687 19.8249 46.042 20.5182 46.9087 21.7316C47.732 22.9016 47.8837 24.4182 47.342 25.9566L42.012 42.1849C41.3404 44.8716 38.4154 47.0599 35.512 47.0599H27.062C25.6104 47.0599 23.5737 46.5616 22.642 45.6299L19.8687 43.4849C18.807 42.6832 18.1787 41.4049 18.1787 40.0616Z" fill="#05CB95"/>
          <path d="M11.288 13.8232H9.05634C5.69801 13.8232 4.33301 15.1232 4.33301 18.3299V40.1266C4.33301 43.3332 5.69801 44.6332 9.05634 44.6332H11.288C14.6463 44.6332 16.0113 43.3332 16.0113 40.1266V18.3299C16.0113 15.1232 14.6463 13.8232 11.288 13.8232Z" fill="#05CB95"/>
        </svg>
        <h1>Tudo certo!</h1>
        <h2>Seu documento foi criado com sucesso.</h2>
      </div>
    </MyModal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import MyModal from '@/components/modal/MyModal.vue'
  import MyDatePicker from '@/components/date/MyDatePicker.vue'
  import MySelect from '@/components/select/MySelect.vue'
  import MyOptions from '@/components/options/MyOptions.vue'

  const selectedDocumentType = ref('');
  const organsSelected = ref('Selecione');
  const responsibleSelected = ref('Selecione');
  const datePickerValue = ref('');
  const isDatePickerModalOpen = ref<boolean>(false);
  const isCreateDocumentModalOpen = ref<boolean>(false);

</script>

<style lang="scss">
  @import '@/global/scss/variables.scss';
  @import '@/global/scss/animations.scss';

  #create-documents{
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 28px;
    padding: 25px 0 0 0;
    section{
      width: 100%;
      display: flex;
      flex-direction: column;
      h1{
        color: #090909;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 13px 0;
        text-align: start;
        strong{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
      h2{
        color: #6F6F6F;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: start;
        margin: -13px 0 13px 0;
      }
      input[type="text"]{
        width: 100%;
        height: 55px;
        border-radius: 14px;
        border: 1px solid #D3D3D3;
        color: $fluxoo-primary-color;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 15px 20px;
        box-sizing: border-box;
        transition: border-color .2s, color .2s, background .2s;
        &:focus{
          outline: none;
        }
        &::placeholder{
          color: #090909;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          transition: color .2s;
        }
      }
      .date-picker-label{
        position: relative;
        display: flex;
        align-items: center;
        input{
          cursor: pointer;
          color: $fluxoo-primary-color;
        }
        svg{
          width: 24px;
          min-width: 24px;
          height: 24px;
          min-height: 24px;
          stroke: #090909;
          position: absolute;
          right: 22px;
        }
      }
      .file-document{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px 0 0;
        border-radius: 16px;
        border: 2px dashed #090909;
        box-sizing: border-box;
        cursor: pointer;
        input{
          display: none;
        }
        p{
          color: #737373;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0 0 12px 0;
        }
        svg{
          width: 32px;
          min-width: 32px;
          height: 32px;
          min-height: 32px;
          margin: 0 0 49px 0;
          fill: #737373;
        }
        .attachment{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 17px 22px 26px;
          box-sizing: border-box;
          border-radius: 0px 0px 14px 14px;
          background: #F5F5F5;
          row-gap: 20px;
          cursor: default;
          h1{
            color: #111716;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0 0 -12px 0;
          }
          .item{
            width: 100%;
            height: unset;
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 20px;
            h2{
              color: #737373;
              font-family: 'Inter', sans-serif;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              text-decoration-line: underline;
              margin: 0;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              transition: color .2s;
            }
            div{
              display: flex;
              align-items: center;
              column-gap: 20px;
              button{
                width: 24px;
                min-width: 24px;
                height: 24px;
                min-height: 24px;
                cursor: pointer;
                &:first-child{
                  &::before {
                    content: 'Visualizar';
                    width: 84px;
                  }
                }
                &:last-child{
                  &::before {
                    content: 'Deletar';
                    width: 70px;
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
                    width: 20px;
                    min-width: 20px;
                    height: 20px;
                    min-height: 20px;
                    stroke: #090909;
                    margin: 0;
                    transition: stroke .2s;
                  }
                }
              }
            }
          }
        }
      }
      .text{
        width: 100%;
        height: 300px;
        border: 1px solid #D3D3D3;
        border-radius: 14px;
      }
    }
    nav{
      width: 100%;
      max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 32px;
      border-radius: 16px;
      background: #FFF;
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      position: sticky;
      bottom: 5px;
      column-gap: 20px;
      input{
        border: none;
        cursor: pointer;
        &:first-child{
          width: 100%;
          max-width: 464px;
          height: 60px;
          border-radius: 30px;
          background: $fluxoo-primary-color;
          color: #FFF;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          transition: background .2s;
          &:hover{
            background: $fluxoo-primary-color-hover;
          }
        }
        &:last-child{
          color: #737373;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          background: unset;
          transition: color .2s;
          &:hover{
            color: $fluxoo-primary-color;
          }
        }
      }
    }
    .modal{
      &.date-limit{
        .modal__content{
          padding: 15px 28px;
          box-sizing: border-box;
          overflow-y: auto;
          &::-webkit-scrollbar{
            width: 0;
          }
          button{
            display: flex;
            top: 26px;
            right: 28px;
          }
          .modal-date-title{
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: start;
            margin: 0 0 25px 0;
            h1{
              color: #090909;
              font-family: 'Nunito', sans-serif;
              font-size: 32px;
              font-style: normal;
              font-weight: 800;
              line-height: normal;
              text-align: start;
              margin: 0;
            }
            h2{
              color: #6F6F6F;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 2px;
              text-align: start;
              margin: 0;
            }
          }
          input[type='button']{
            width: 100%;
            min-height: 55px;
            border-radius: 30px;
            border: none;
            background: $fluxoo-primary-color;
            color: #FFF;
            text-align: center;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 8px 0 0 0;
            transition: background .2s;
            cursor: pointer;
            &:disabled{
              background: #F1F1F1 !important;
              color: #6F6F6F !important;
              cursor: not-allowed !important;
            }
            &:hover{
              background: $fluxoo-primary-color-hover;
            }
          }
        }
      }
      &.confirm-create-document{
        div{
          div{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 26px 15px 0;
            h1{
              color: #090909;
              font-family: 'Nunito', sans-serif;
              font-size: 28px;
              font-style: normal;
              font-weight: 900;
              line-height: normal;
              margin: 2px 0 7px 0;
            }
            h2{
              color: #6F6F6F;
              text-align: center;
              font-family: 'Inter', sans-serif;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              margin: 0;
            }
          }
        }
        button{
          display: flex;
          top: 28px;
          right: 28px;
        }
      }
    }
  }

  @media(max-width: 768px){
    #create-documents{
      nav{
        padding: 15px;
      }
    }
  }

  @media(max-width: 425px){
    #create-documents{
      padding: 25px 0 120px 0;
      nav{
        animation: enterToBottom ease 0.9s;
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
        border-radius: 20px 20px 0px 0px;
        background: #FFF;
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
        padding: 15px;
        box-sizing: border-box;
        z-index: 3;
      }
      .modal {
        padding: unset;
        &.date-limit{
          padding: 0 10px;
          .modal__content{
            border-radius: 28px;
            padding: 15px;
            .date-picker{
              .select-day{
                .date{
                  gap: 0;
                }
              }
            }
          }
        }
        &.confirm-create-document{
          padding: 0 15px;
          .modal__content{
            border-radius: 28px;
            bottom: unset;
            left: unset;
            right: unset;
            top: 0;
            opacity: 0;
            transition: all 0.2s ease-out;
            &.closed {
                opacity: 0;
                transform: translateY(-110%) !important;
            }
            &.open {
                opacity: 1;
                transform: translateY(0) !important;
            }
          }
        }
      }
    }
  }
</style>
