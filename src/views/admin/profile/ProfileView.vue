<template>
    <div id="profile">
        <label @click="$router.go(-1)" class="back">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702M20.5 12.0002H3.67" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </figure>
            <p>Perfil</p>
        </label>
        <input type="radio" name="profile" id="profile-register" checked>
        <input type="radio" name="profile" id="profile-password">
        <main>
            <div class="tab">
              <label for="profile-register">Cadastro</label>
              <label for="profile-password">Senha</label>
            </div>
            <form class="register">
              <div class="photo">
                <h1>Foto do usuário</h1>
                <div class="data" :class="{ 'nophoto': imageProfileBase64 == '' }">
                  <div :style="{ backgroundImage: 'url(' + imageProfileBase64 + ')' }">
                    <label v-if="imageProfileBase64 == ''" class="tooltip" for="profile-photo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </label>
                    <div v-else>
                      <label class="tooltip" for="profile-photo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M13.2603 3.60022L5.05034 12.2902C4.74034 12.6202 4.44034 13.2702 4.38034 13.7202L4.01034 16.9602C3.88034 18.1302 4.72034 18.9302 5.88034 18.7302L9.10034 18.1802C9.55034 18.1002 10.1803 17.7702 10.4903 17.4302L18.7003 8.74022C20.1203 7.24022 20.7603 5.53022 18.5503 3.44022C16.3503 1.37022 14.6803 2.10022 13.2603 3.60022Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M11.8896 5.0498C12.3196 7.8098 14.5596 9.9198 17.3396 10.1998" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M3 22H21" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </label>
                      <label class="tooltip" @click="isConfirmDeletePhotoModal = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M18.8504 9.14014L18.2004 19.2101C18.0904 20.7801 18.0004 22.0001 15.2104 22.0001H8.79039C6.00039 22.0001 5.91039 20.7801 5.80039 19.2101L5.15039 9.14014" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.3301 16.5H13.6601" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9.5 12.5H14.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </label>
                    </div>
                  </div>
                  <input type="file" name="profile-photo" id="profile-photo" @change="handleFileInputChange($event)">
                  <p>Adicione uma foto de perfil para sua área de trabalho ficar ainda mais personalizada.</p>
                </div>
              </div>
              <section>
                <label for="name"><strong>Nome</strong> (obrigatório)</label>
                <input type="text" value="João" name="name" id="name">
              </section>
              <section>
                <label for="surname"><strong>Sobrenome</strong> (obrigatório)</label>
                <input type="text" value="da Silva" name="surname" id="surname">
              </section>
              <section>
                <label for="email"><strong>E-mail</strong> (obrigatório)</label>
                <input type="text" value="joaosasilva@gmail.com" name="email" id="email">
              </section>
            </form>
            <form class="password">
              <section>
                <label for="new-password"><strong>Crie uma nova senha</strong> (obrigatório)</label>
                <input placeholder="Pelo menos 6 caracteres" :type="showNewPassword ? 'text':'password'" name="new-password" id="new-password">
                <button type="button" @click="showNewPassword = !showNewPassword">
                  <svg v-if="showNewPassword" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <section>
                <label for="repeat-new-password"><strong>Repita a nova senha</strong> (obrigatório)</label>
                <input placeholder="Pelo menos 6 caracteres" :type="showRepeatNewPassword ? 'text':'password'" name="repeat-new-password" id="repeat-new-password">
                <button type="button" @click="showRepeatNewPassword = !showRepeatNewPassword">
                  <svg v-if="showRepeatNewPassword" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </form>
            <nav>
              <input @click="isConfirmUpdateDataProfileModal = true" type="button" id="profile-update-infos" value="Salvar alterações">
              <input @click="isNewPasswordCreateModal = true" type="button" id="profile-update-password" value="Salvar alterações">
            </nav>
        </main>
        <MyModal :width="'330px !important'" :height="'179px !important'" :isOpen="isNewPasswordCreateModal" :class-name="'new-password-create'" :toggleModal="(v: boolean) => isNewPasswordCreateModal = v" :zIndex="100">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M40.1697 9.03505L28.2531 4.57172C27.0181 4.11672 25.0031 4.11672 23.7681 4.57172L11.8514 9.03505C9.55474 9.90172 7.69141 12.5884 7.69141 15.0367V32.5867C7.69141 34.3417 8.83974 36.6601 10.2481 37.7001L22.1647 46.6051C24.2664 48.1867 27.7114 48.1867 29.8131 46.6051L41.7297 37.7001C43.1381 36.6384 44.2864 34.3417 44.2864 32.5867V15.0367C44.3081 12.5884 42.4447 9.90172 40.1697 9.03505ZM27.6247 27.8851V33.5834C27.6247 34.4717 26.8881 35.2084 25.9997 35.2084C25.1114 35.2084 24.3747 34.4717 24.3747 33.5834V27.8851C22.1864 27.1917 20.5831 25.1551 20.5831 22.7501C20.5831 19.7601 23.0097 17.3334 25.9997 17.3334C28.9897 17.3334 31.4164 19.7601 31.4164 22.7501C31.4164 25.1767 29.8131 27.1917 27.6247 27.8851Z" fill="#05CB95"/>
            </svg>
            <h1>Sucesso!!!</h1>
            <h2>Sua nova senha foi criada.</h2>
          </div>
        </MyModal>
        <MyModal :width="'330px !important'" :height="'179px !important'" :isOpen="isConfirmUpdateDataProfileModal" :class-name="'confirm-update-data-profile'" :toggleModal="(v: boolean) => isConfirmUpdateDataProfileModal = v" :zIndex="100">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M18.1787 40.0616V18.0482C18.1787 17.1816 18.4387 16.3366 18.9154 15.6216L24.8304 6.82491C25.762 5.41657 28.0804 4.41991 30.052 5.15657C32.1754 5.87157 33.5837 8.2549 33.1287 10.3782L32.002 17.4632C31.9154 18.1132 32.0887 18.6982 32.457 19.1532C32.8254 19.5649 33.367 19.8249 33.952 19.8249H42.857C44.5687 19.8249 46.042 20.5182 46.9087 21.7316C47.732 22.9016 47.8837 24.4182 47.342 25.9566L42.012 42.1849C41.3404 44.8716 38.4154 47.0599 35.512 47.0599H27.062C25.6104 47.0599 23.5737 46.5616 22.642 45.6299L19.8687 43.4849C18.807 42.6832 18.1787 41.4049 18.1787 40.0616Z" fill="#05CB95"/>
              <path d="M11.288 13.8232H9.05634C5.69801 13.8232 4.33301 15.1232 4.33301 18.3299V40.1266C4.33301 43.3332 5.69801 44.6332 9.05634 44.6332H11.288C14.6463 44.6332 16.0113 43.3332 16.0113 40.1266V18.3299C16.0113 15.1232 14.6463 13.8232 11.288 13.8232Z" fill="#05CB95"/>
            </svg>
            <h1>Muito bom!</h1>
            <h2>Suas alterações foram salvas.</h2>
          </div>
        </MyModal>
        <MyModal :width="'330px !important'" :height="'260px !important'" :isOpen="isConfirmDeletePhotoModal" :class-name="'confirm-delete-photo'" :toggleModal="(v: boolean) => isConfirmDeletePhotoModal = v" :zIndex="100">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M42.2722 12.6747L29.4021 5.24301C27.3005 4.02967 24.7005 4.02967 22.5771 5.24301L9.72881 12.6747C7.62715 13.888 6.32715 16.1413 6.32715 18.5897V33.4097C6.32715 35.8363 7.62715 38.0897 9.72881 39.3247L22.5988 46.7563C24.7005 47.9697 27.3005 47.9697 29.4238 46.7563L42.2938 39.3247C44.3955 38.1113 45.6955 35.858 45.6955 33.4097V18.5897C45.6738 16.1413 44.3738 13.9097 42.2722 12.6747ZM24.3755 16.7913C24.3755 15.903 25.1121 15.1663 26.0005 15.1663C26.8888 15.1663 27.6255 15.903 27.6255 16.7913V28.1663C27.6255 29.0547 26.8888 29.7913 26.0005 29.7913C25.1121 29.7913 24.3755 29.0547 24.3755 28.1663V16.7913ZM27.9938 36.0313C27.8855 36.2913 27.7338 36.5297 27.5388 36.7463C27.1271 37.158 26.5855 37.3747 26.0005 37.3747C25.7188 37.3747 25.4371 37.3097 25.1771 37.2013C24.8955 37.093 24.6788 36.9413 24.4621 36.7463C24.2671 36.5297 24.1155 36.2913 23.9855 36.0313C23.8771 35.7713 23.8338 35.4897 23.8338 35.208C23.8338 34.6447 24.0505 34.0813 24.4621 33.6697C24.6788 33.4747 24.8955 33.323 25.1771 33.2147C25.9788 32.868 26.9321 33.063 27.5388 33.6697C27.7338 33.8863 27.8855 34.103 27.9938 34.3847C28.1021 34.6447 28.1671 34.9263 28.1671 35.208C28.1671 35.4897 28.1021 35.7713 27.9938 36.0313Z" fill="#F19812"/>
            </svg>
            <h1>Cuidado!</h1>
            <h2>Deseja mesmo deletar sua foto?</h2>
            <section>
              <button @click="isConfirmDeletePhotoModal = false; imageProfileBase64 = ''">Sim</button>
              <input @click="isConfirmDeletePhotoModal = false;" type="button" value="Cancelar">
            </section>
          </div>
        </MyModal>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import MyModal from '@/components/modal/MyModal.vue'

  /* Starts at the top of the page */
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

  /* Visibility variables for password fields. */
  const showNewPassword = ref<boolean>(false)
  const showRepeatNewPassword = ref<boolean>(false)

  /* Alert modal variables. */
  const isNewPasswordCreateModal = ref<boolean>(false)
  const isConfirmUpdateDataProfileModal = ref<boolean>(false)
  const isConfirmDeletePhotoModal = ref<boolean>(false)

  /* Cariable with the user photo image. */
  const imageProfileBase64 = ref<string>('');

  /* Change the value of the image item. */
  const handleFileInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file: File | null = input.files && input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          imageProfileBase64.value = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };
</script>

<style lang="scss">
    @import '../../../global/scss/variables.scss';

    #profile{
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 0;
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
      input[type='radio']{
          display: none;
          &#profile-register:checked{
            & ~ main{
              .tab{
                label:first-child{
                  background: $fluxoo-primary-color;
                  color: #FFF;
                }
              }
              .register{
                display: flex;
              }
              nav{
                #profile-update-infos{
                  display: block;
                }
              }
            }
          }
          &#profile-password:checked{
            & ~ main{
              .tab{
                label:last-child{
                  background: $fluxoo-primary-color;
                  color: #FFF;
                }
              }
              .password{
                display: flex;
              }
              nav{
                #profile-update-password{
                  display: block;
                }
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
          margin: 0 0 40px 0;
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
        form{
          width: 100%;
          height: 100%;
          display: none;
          flex-direction: column;
          align-content: center;
          &.register{
            section:nth-child(4){
              margin: 0 0 45px 0;
            }
          }
          &.password{
            section:nth-child(2){
              margin: 0 0 45px 0;
            }
          }
          .photo{
            display: flex;
            flex-direction: column;
            row-gap: 13px;
            margin: 0 0 20px 0;
            animation: enterContent ease .4s;
            h1{
              color: #090909;
              font-family: 'Inter', sans-serif;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              text-align: start;
              margin: 0;
            }
            input{
              display: none;
            }
            .data{
              display: flex;
              align-items: center;
              column-gap: 24px;
              &.nophoto{
                div{
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  &::before{
                    content: 'foto de perfil';
                    color: #6F6F6F;
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    position: absolute;
                    top: 65px;
                  }
                }
              }
              div{
                width: 170px;
                min-width: 170px;
                height: 170px;
                min-height: 170px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                background: #F1F1F1;
                background-position: center 0;
                background-size: cover;
                background-repeat: no-repeat;
                label{
                  width: 45px;
                  min-width: 45px;
                  height: 45px;
                  min-height: 45px;
                  display: flex;
                  border-radius: 50%;
                  background: #FFF;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 100px 0 0 0;
                  transition: background .2s;
                  cursor: pointer;
                  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.12));
                  &:hover{
                    background: $fluxoo-primary-color;
                    svg{
                      stroke: #FFF;
                    }
                  }
                  &::before{
                    content: 'Adicionar';
                    width: 84px;
                  }
                  svg{
                    width: 24px;
                    min-width: 24px;
                    height: 24px;
                    min-width: 24px;
                    stroke: #090909;
                    margin: auto auto;
                    transition: stroke .2s;
                  }
                }
                div{
                  width: unset;
                  min-width: unset;
                  height: unset;
                  min-height: unset;
                  display: flex;
                  flex-direction: unset;
                  column-gap: 18px;
                  margin: 0;
                  background: transparent;
                  label{
                    &:first-child{
                      &::before{
                        content: 'Editar';
                        width: 60px;
                      }
                    }
                    &:last-child{
                      &::before{
                        content: 'Deletar';
                        width: 70px;
                      }
                    }
                  }
                }
              }
              p{
                color: #000;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: start;
              }
            }
          }
          section{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: start;
            position: relative;
            margin: 0 0 28px 0;
            animation: enterContent ease .4s;
            label{
              color: #090909;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              margin: 0 0 13px 0;
              strong{
                font-size: 20px;
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
              font-size: 16px;
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
              &:read-only{
                cursor: default;
                color: $fluxoo-primary-color !important;
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
        }
        nav{
          width: 100%;
          input[type='button']{
            display: none;
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
            margin: auto 0 0 0;
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
      .modal{
        &__content{
          margin: 15px 0 auto 0;
        }
        &.new-password-create{
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
        &.confirm-update-data-profile{
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
        &.confirm-delete-photo{
          div{
            div{
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 26px 15px 24px;
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
              section{
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
                padding: 0;
                margin: 33px 0 0 0;
                button{
                  height: 30px;
                  width: 80px;
                  top: unset;
                  color: #090909;
                  font-family: 'Inter', sans-serif;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 18px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  transition: color .2s;
                  cursor: pointer;
                  &:hover{
                    color: $fluxoo-primary-color;
                  }
                }
                input{
                  height: 60px;
                  border-radius: 30px;
                  background: #090909;
                  color: #FFF;
                  font-family: 'Inter', sans-serif;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  border: none;
                  width: 173px;
                  cursor: pointer;
                }
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

    @media(max-width: 425px){
      #profile{
        max-width: unset;
        .back{
          margin: 0 auto 40px 0;
        }
        main{
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
          .tab{
            justify-content: center;
          }
          form{
            margin: 0 0 50px 0;
            .photo{
              h1{
                display: none;
              }
              .data{
                justify-content: center;
                p{
                  display: none;
                }
              }
            }
          }
        }
        .modal {
          padding: unset;
          &__content{
            border-radius: 28px;
            max-width: unset !important;
            max-height: unset !important;
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
</style>
