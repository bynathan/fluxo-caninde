<template>
    <div id="home">
        <header>
            <section>
                <label for="search">
                    <input autocomplete='off' name="search" id="search" type="text" placeholder="Busque por data, número de ofício, título do documento" v-model="searchInput" @keyup.enter="$router.push('/admin/results')">
                    <svg :class="{typed: searchInput.length > 0}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" @click="$router.push('/admin/results')">
                        <path d="M17.5002 17.5002L13.881 13.881M13.881 13.881C14.5001 13.2619 14.9912 12.527 15.3262 11.7181C15.6612 10.9093 15.8337 10.0423 15.8337 9.16684C15.8337 8.29134 15.6612 7.42441 15.3262 6.61555C14.9912 5.80669 14.5001 5.07174 13.881 4.45267C13.2619 3.8336 12.527 3.34252 11.7181 3.00748C10.9093 2.67244 10.0423 2.5 9.16684 2.5C8.29134 2.5 7.42441 2.67244 6.61555 3.00748C5.80669 3.34252 5.07174 3.8336 4.45267 4.45267C3.2024 5.70295 2.5 7.39868 2.5 9.16684C2.5 10.935 3.2024 12.6307 4.45267 13.881C5.70295 15.1313 7.39868 15.8337 9.16684 15.8337C10.935 15.8337 12.6307 15.1313 13.881 13.881Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </label>
            </section>
            <section>
                <div class="infos">
                    <h1>Olá, <strong>{{ user.name }}</strong></h1>
                    <!-- <h2>Último acesso em 77/77/77 as 77:77</h2> -->
                </div>
                <button @click="isNotificationsModalOpen = true">
                    <figure>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5206 3.41016C9.21058 3.41016 6.52058 6.10016 6.52058 9.41016V12.3002C6.52058 12.9102 6.26058 13.8402 5.95058 14.3602L4.80058 16.2702C4.09058 17.4502 4.58058 18.7602 5.88058 19.2002C10.1906 20.6402 14.8406 20.6402 19.1506 19.2002C20.3606 18.8002 20.8906 17.3702 20.2306 16.2702L19.0806 14.3602C18.7806 13.8402 18.5206 12.9102 18.5206 12.3002V9.41016C18.5206 6.11016 15.8206 3.41016 12.5206 3.41016Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M14.3699 3.69994C14.0599 3.60994 13.7399 3.53994 13.4099 3.49994C12.4499 3.37994 11.5299 3.44994 10.6699 3.69994C10.9599 2.95994 11.6799 2.43994 12.5199 2.43994C13.3599 2.43994 14.0799 2.95994 14.3699 3.69994Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5195 19.5601C15.5195 21.2101 14.1695 22.5601 12.5195 22.5601C11.6995 22.5601 10.9395 22.2201 10.3995 21.6801C9.85953 21.1401 9.51953 20.3801 9.51953 19.5601" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                    </figure>
                </button>
                <div @click="$router.push('/admin/profile')" class="profile" :style="{backgroundImage: `url('${storageUrl + user.image}')`}" role="img" aria-label="Foto de perfil do usuário."></div>
            </section>
        </header>
        <div class="alert red" v-if="isAlertVisible">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M28 8.66651C28 11.2398 25.9067 13.3332 23.3333 13.3332C20.76 13.3332 18.6667 11.2398 18.6667 8.66651C18.6667 6.09318 20.76 3.99984 23.3333 3.99984C25.9067 3.99984 28 6.09318 28 8.66651ZM25.3333 15.7198C24.6667 15.8932 24 15.9998 23.3333 15.9998C21.3895 15.9963 19.5263 15.2226 18.1518 13.8481C16.7773 12.4736 16.0035 10.6103 16 8.66651C16 6.70651 16.7733 4.93318 18 3.61318C17.758 3.31657 17.4529 3.07767 17.1069 2.9139C16.761 2.75013 16.3828 2.66562 16 2.66651C14.5333 2.66651 13.3333 3.86651 13.3333 5.33318V5.71984C9.37333 6.89318 6.66667 10.5332 6.66667 14.6665V22.6665L4 25.3332V26.6665H28V25.3332L25.3333 22.6665V15.7198ZM16 30.6665C17.48 30.6665 18.6667 29.4798 18.6667 27.9998H13.3333C13.3333 28.7071 13.6143 29.3854 14.1144 29.8855C14.6145 30.3856 15.2928 30.6665 16 30.6665Z"/>
                </svg>
            </figure>
            <div class="days">
                <span>Faltam</span>
                <span>dias</span>
                <h1>05</h1>
            </div>
            <div class="infos">
                <h1>Envio de informações para a folha.</h1>
                <h2>Para que não ocorram imprevistos quanto ao processamento da folha de pagamento, solicitamos o cumprimento do prazo de entrega das informações, que é até o dia 20 de cada mês.</h2>
            </div>
            <button @click="isAlertVisible = false">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </figure>
            </button>
        </div>
        <div class="updates">
            <section>
                <h1>Suas atualizações</h1>
                <div class="itens">
                    <div class="item">
                        <h1>Enviados</h1>
                        <p>0</p>
                        <h2>Processos enviados até hoje.</h2>
                    </div>
                    <div class="item">
                        <h1>Tramitando</h1>
                        <p>0</p>
                        <h2>Que ainda estão tramitando.</h2>
                    </div>
                    <div class="item">
                        <h1>Prorrogados</h1>
                        <p>0</p>
                        <h2>Com pedido de prorrogação.</h2>
                    </div>
                    <div class="item">
                        <h1>Pendente</h1>
                        <p>0</p>
                        <h2>Ainda não analisados.</h2>
                    </div>
                    <div class="item">
                        <h1>Em atraso</h1>
                        <p>0</p>
                        <h2>Merece sua atenção.</h2>
                    </div>
                    <div class="item">
                        <h1>Finalizados</h1>
                        <p>0</p>
                        <h2>Todo o fluxo finalizado.</h2>
                    </div>
                </div>
            </section>
            <!-- CLASSE 'noitens' PARA QUANDO NAO TIVER ITENS -->
            <section class="">
                <h1>ÚLTIMOS QUE RECEBEU</h1>
                <div class="list">
                    <div class="itens">
                        <div class="item">
                            <div class="photo" style="background-image: url('https://img.freepik.com/fotos-premium/mulher-de-terno-posando-para-foto-com-os-bracos-cruzados-ia-generativa_97167-22199.jpg')">
                                <h1>NO</h1>
                            </div>
                            <div class="infos">
                                <h2>Ofício <strong>N° 0</strong></h2>
                                <h1>Solicitação de informações sobre férias coletivajisdbsa das asd asdbashbd asdasd</h1>
                                <h2>Finanças</h2>
                            </div>
                        </div>
                        <div class="item">
                            <div class="name">
                                <h1>NO</h1>
                            </div>
                            <div class="infos">
                                <h2>Ofício <strong>N° 0</strong></h2>
                                <h1>Solicitação de licença premium</h1>
                                <h2>Finanças</h2>
                            </div>
                        </div>
                        <div class="item">
                            <div class="name">
                                <h1>NO</h1>
                            </div>
                            <div class="infos">
                                <h2>Ofício <strong>N° 0</strong></h2>
                                <h1>Solicitação de licença premium</h1>
                                <h2>Finanças</h2>
                            </div>
                        </div>
                        <div class="item">
                            <div class="name">
                                <h1>NO</h1>
                            </div>
                            <div class="infos">
                                <h2>Ofício <strong>N° 0</strong></h2>
                                <h1>Solicitação de licença premium</h1>
                                <h2>Finanças</h2>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M14.9997 36.6668H24.9997C33.333 36.6668 36.6663 33.3335 36.6663 25.0002V15.0002C36.6663 6.66683 33.333 3.3335 24.9997 3.3335H14.9997C6.66634 3.3335 3.33301 6.66683 3.33301 15.0002V25.0002C3.33301 33.3335 6.66634 36.6668 14.9997 36.6668Z" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.25 15H13.75" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.25 25H13.75" stroke="#090909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </section>
        </div>
        <div class="docs">
            <section>
                <div class="title">
                    <h1>Modelos de documento</h1>
                    <p>Sempre que precisar, visualize, baixe ou compartilhe um modelo de documento.</p>
                    <RouterLink :to="'/admin/help'">Ver mais</RouterLink>
                </div>
                <div class="button" @mousedown="scrollLeft('models')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="itens" ref="contentModelsRef" @mousedown="startDragging('models', $event)" @mousemove="dragging('models', $event)" @mouseup="stopDragging" @mouseleave="stopDragging">
                    <div class="item">
                        <img src="@/assets/images/adobe.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/adobe.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/adobe.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/adobe.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button" @mousedown="scrollRight('models')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </section>
            <hr>
            <section>
                <div class="title">
                    <h1>Fluxo de documentos</h1>
                    <p>Sempre que precisar, visualize, baixe ou compartilhe um fluxo de processo de documento.</p>
                    <RouterLink :to="'/admin/help'">Ver mais</RouterLink>
                </div>
                <div class="button" @mousedown="scrollLeft('fluxo')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="itens" ref="contentFluxoRef" @mousedown="startDragging('fluxo', $event)" @mousemove="dragging('fluxo', $event)" @mouseup="stopDragging" @mouseleave="stopDragging">
                    <div class="item">
                        <img src="@/assets/images/word.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/word.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/word.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/word.png" alt="Imagem do tipo de arquivo do documento.">
                        <div class="infos">
                            <h1>Documento</h1>
                            <h2>Visualize, baixe ou compartilhe o modelo desse ofício.</h2>
                            <div>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill="none" d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill="none" d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_198_486)">
                                                <path fill="none" d="M7.5 9.1665V14.1665L9.16667 12.4998" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M7.49967 14.1667L5.83301 12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317V12.4998C18.3337 16.6665 16.667 18.3332 12.5003 18.3332H7.50033C3.33366 18.3332 1.66699 16.6665 1.66699 12.4998V7.49984C1.66699 3.33317 3.33366 1.6665 7.50033 1.6665H11.667" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill="none" d="M18.3337 8.33317H15.0003C12.5003 8.33317 11.667 7.49984 11.667 4.99984V1.6665L18.3337 8.33317Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_198_486">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                </button>
                                <button class="tooltip">
                                    <figure>
                                        <svg stroke="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path stroke="none" d="M13.1202 17.0232L8.92121 14.7332C8.373 15.3193 7.66119 15.7269 6.87828 15.9031C6.09537 16.0793 5.27756 16.0159 4.53113 15.7212C3.7847 15.4266 3.14417 14.9142 2.69277 14.2507C2.24138 13.5871 2 12.8032 2 12.0007C2 11.1982 2.24138 10.4143 2.69277 9.75076C3.14417 9.08725 3.7847 8.57486 4.53113 8.28017C5.27756 7.98548 6.09537 7.92212 6.87828 8.09832C7.66119 8.27452 8.373 8.68214 8.92121 9.26821L13.1212 6.97821C12.8831 6.03417 12.9975 5.0357 13.4429 4.16997C13.8884 3.30424 14.6342 2.63069 15.5408 2.27557C16.4473 1.92046 17.4522 1.90816 18.3671 2.24098C19.2821 2.57381 20.0442 3.2289 20.5107 4.08347C20.9772 4.93804 21.116 5.93341 20.9011 6.88299C20.6862 7.83257 20.1323 8.67116 19.3433 9.24158C18.5543 9.81199 17.5843 10.0751 16.6152 9.98148C15.6462 9.88789 14.7445 9.44407 14.0792 8.73321L9.87921 11.0232C10.0404 11.6646 10.0404 12.3358 9.87921 12.9772L14.0792 15.2672C14.7448 14.5567 15.6467 14.1133 16.6158 14.0202C17.5849 13.9271 18.5547 14.1906 19.3434 14.7614C20.1322 15.3322 20.6856 16.171 20.9001 17.1207C21.1146 18.0703 20.9754 19.0656 20.5085 19.9199C20.0417 20.7743 19.2793 21.429 18.3642 21.7615C17.4491 22.0939 16.4442 22.0812 15.5379 21.7257C14.6315 21.3702 13.8859 20.6964 13.4408 19.8305C12.9958 18.9646 12.8818 17.9661 13.1202 17.0222M6.00021 14.0002C6.53064 14.0002 7.03935 13.7895 7.41442 13.4144C7.78949 13.0393 8.00021 12.5306 8.00021 12.0002C8.00021 11.4698 7.78949 10.9611 7.41442 10.586C7.03935 10.2109 6.53064 10.0002 6.00021 10.0002C5.46977 10.0002 4.96107 10.2109 4.58599 10.586C4.21092 10.9611 4.00021 11.4698 4.00021 12.0002C4.00021 12.5306 4.21092 13.0393 4.58599 13.4144C4.96107 13.7895 5.46977 14.0002 6.00021 14.0002ZM17.0002 8.00021C17.5306 8.00021 18.0393 7.78949 18.4144 7.41442C18.7895 7.03935 19.0002 6.53064 19.0002 6.00021C19.0002 5.46977 18.7895 4.96107 18.4144 4.58599C18.0393 4.21092 17.5306 4.00021 17.0002 4.00021C16.4698 4.00021 15.9611 4.21092 15.586 4.58599C15.2109 4.96107 15.0002 5.46977 15.0002 6.00021C15.0002 6.53064 15.2109 7.03935 15.586 7.41442C15.9611 7.78949 16.4698 8.00021 17.0002 8.00021ZM17.0002 20.0002C17.5306 20.0002 18.0393 19.7895 18.4144 19.4144C18.7895 19.0393 19.0002 18.5306 19.0002 18.0002C19.0002 17.4698 18.7895 16.9611 18.4144 16.586C18.0393 16.2109 17.5306 16.0002 17.0002 16.0002C16.4698 16.0002 15.9611 16.2109 15.586 16.586C15.2109 16.9611 15.0002 17.4698 15.0002 18.0002C15.0002 18.5306 15.2109 19.0393 15.586 19.4144C15.9611 19.7895 16.4698 20.0002 17.0002 20.0002Z"/>
                                        </svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button" @mousedown="scrollRight('fluxo')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </section>
        </div>
        <nav>
            <div class="tooltip">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 22.0001H3C2.59 22.0001 2.25 21.6601 2.25 21.2501C2.25 20.8401 2.59 20.5001 3 20.5001H21C21.41 20.5001 21.75 20.8401 21.75 21.2501C21.75 21.6601 21.41 22.0001 21 22.0001ZM19.02 3.48211C17.08 1.54211 15.18 1.49211 13.19 3.48211L11.98 4.69211C11.88 4.79211 11.84 4.95211 11.88 5.09211C12.2625 6.40449 12.9697 7.59923 13.9363 8.56583C14.9029 9.53242 16.0976 10.2397 17.41 10.6221C17.4809 10.6453 17.5568 10.6483 17.6293 10.6306C17.7017 10.6129 17.7678 10.5753 17.82 10.5221L19.02 9.31211C20.01 8.33211 20.49 7.38211 20.49 6.42211C20.5 5.43211 20.02 4.47211 19.02 3.48211ZM15.61 11.5301C15.32 11.3901 15.04 11.2501 14.77 11.0901C14.5507 10.9595 14.3371 10.8193 14.13 10.6701C13.96 10.5601 13.76 10.4001 13.57 10.2401C13.5088 10.1955 13.4519 10.1453 13.4 10.0901C13.07 9.81011 12.7 9.45011 12.37 9.05011C12.34 9.03011 12.29 8.96011 12.22 8.87011C12.12 8.75011 11.95 8.55011 11.8 8.32011C11.6575 8.13203 11.5272 7.93495 11.41 7.73011C11.25 7.46011 11.11 7.19011 10.97 6.91011C10.9492 6.86533 10.9288 6.82033 10.909 6.77511C10.761 6.44211 10.326 6.34511 10.069 6.60211L4.34 12.3311C4.21 12.4611 4.09 12.7111 4.06 12.8811L3.52 16.7111C3.42 17.3911 3.61 18.0311 4.03 18.4611C4.39 18.8111 4.89 19.0011 5.43 19.0011C5.55 19.0011 5.67 18.9911 5.79 18.9711L9.63 18.4311C9.81 18.4011 10.06 18.2811 10.18 18.1511L15.902 12.4301C16.162 12.1701 16.063 11.7251 15.726 11.5801C15.6873 11.5635 15.6486 11.5469 15.61 11.5301Z" fill="white"/>
                    </svg>
                </figure>
            </div>
        </nav>

        <MyModal :width="'400px'" :height="'481px'" :isOpen="isNotificationsModalOpen" :toggleModal="(v: boolean) => isNotificationsModalOpen = v" :zIndex="100">
            <h1>Notificações</h1>
            <div class="itens">
                <div class="item red">
                    <h2>00/00/0000</h2>
                    <h2>Ofício <strong>Nº 0</strong></h2>
                    <h1>licença premio</h1>
                    <h2>IPMC</h2>
                </div>
                <div class="item orange">
                    <h2>00/00/0000</h2>
                    <h2>Ofício <strong>Nº 0</strong></h2>
                    <h1>licença premio</h1>
                    <h2>IPMC</h2>
                </div>
                <div class="item black">
                    <h2>00/00/0000</h2>
                    <h2>Ofício <strong>Nº 0</strong></h2>
                    <h1>licença premio</h1>
                    <h2>IPMC</h2>
                </div>
            </div>
        </MyModal>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import MyModal from '@/components/modal/MyModal.vue'
  import { isNotificationsModalOpen } from '@/global/states/ModalState'
  import { storageUrl, user } from '@/global/states/GlobalState';

  /* Starts at the top of the page */
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

  /* Input search ref v-model */
  const searchInput = ref<string>('');

  /* Defines whether the alert is visible or not. */
  const isAlertVisible = ref<boolean>(true);

  /* Documents container ref. */
  const contentModelsRef = ref<HTMLDivElement | null>(null);
  const contentFluxoRef = ref<HTMLDivElement | null>(null);

  /* Document passer left. */
  const scrollLeft = (content: string) => {
      if (content === 'models') {
          if (contentModelsRef.value) {
              contentModelsRef.value.scrollLeft -= 150;
          }
      } else if (content === 'fluxo') {
          if (contentFluxoRef.value) {
              contentFluxoRef.value.scrollLeft -= 150;
          }
      }
  };

  /* Document passer right. */
  const scrollRight = (content: string) => {
      if (content === 'models') {
          if (contentModelsRef.value) {
              contentModelsRef.value.scrollLeft += 150;
          }
      } else if (content === 'fluxo') {
          if (contentFluxoRef.value) {
              contentFluxoRef.value.scrollLeft += 150;
          }
      }
  };

  /* Container dragging method. */
  let isDragging = false;
  let startX = 0;
  let scrollLeftDrag = 0;

  function startDragging(content: string, event: MouseEvent) {
      isDragging = true;

      if (content === 'models') {
          startX = event.pageX - contentModelsRef.value!.offsetLeft;
          scrollLeftDrag = contentModelsRef.value!.scrollLeft;
      } else if (content === 'fluxo') {
          startX = event.pageX - contentFluxoRef.value!.offsetLeft;
          scrollLeftDrag = contentFluxoRef.value!.scrollLeft;
      }
  }

  function dragging(content: string, event: MouseEvent) {
      if (!isDragging) return;

      if (content === 'models') {
          const x = event.pageX - contentModelsRef.value!.offsetLeft;
          const walk = (x - startX) * 0.8;
          contentModelsRef.value!.scrollLeft = scrollLeftDrag - walk;
      } else if (content === 'fluxo') {
          const x = event.pageX - contentFluxoRef.value!.offsetLeft;
          const walk = (x - startX) * 0.8;
          contentFluxoRef.value!.scrollLeft = scrollLeftDrag - walk;
      }
  }

  function stopDragging() {
      isDragging = false;
  }
</script>

<style lang="scss">
    @import '@/global/scss/variables.scss';

    #home{
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        animation: enterContent ease .4s;
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 60px;
            margin: 0 0 50px 0;
            section{
                &:first-child{
                    width: 100%;
                    max-width: 690px;
                    display: flex;
                    position: relative;
                    label{
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
                            &.typed{
                              stroke: $fluxoo-primary-color;
                            }
                        }
                    }
                }
                &:last-child{
                    display: flex;
                    align-items: center;
                    column-gap: 25px;
                    .infos{
                        min-width: 223px;
                        display: flex;
                        flex-direction: column;
                        align-items: start;
                        h1{
                            color: #090909;
                            font-family: 'Inter', sans-serif;
                            font-size: 18px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                            margin: 0;
                        }
                        h2{
                            color: #737373;
                            font-family: 'Inter', sans-serif;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            margin: 0;
                        }
                    }
                    button{
                        width: 40px;
                        min-width: 40px;
                        height: 40px;
                        min-height: 40px;
                        border-radius: 50%;
                        background: transparent;
                        transition: background .2s;
                        cursor: pointer;
                        &:hover{
                            background: #F5F5F5;
                        }
                        figure{
                            width: 100%;
                            height: 100%;
                            margin: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg{
                                width: 24px;
                                min-width: 24px;
                                height: 24px;
                                min-height: 24px;
                                stroke: #090909;
                            }
                        }
                    }
                    .profile{
                        width: 56px;
                        min-width: 56px;
                        height: 56px;
                        min-height: 56px;
                        border-radius: 50%;
                        background-position: center 0;
                        background-size: cover;
                        background-repeat: no-repeat;
                        cursor: pointer;
                    }
                }
            }
        }
        .alert{
            width: 100%;
            height: 97px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 24px;
            padding: 17px 20px;
            margin: 0 0 36px 0;
            box-sizing: border-box;
            column-gap: 24px;
            position: relative;
            figure{
                width: 58px;
                min-width: 58px;
                height: 58px;
                min-height: 58px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: #FFF;
                margin: 0;
            }
            .days{
                height: 54px;
                display: flex;
                position: relative;
                margin: 0 18px 0 0;
                span{
                    color: #FFF;
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    margin: 0;
                    &:nth-child(1){
                        position: absolute;
                        top: -8px;
                        left: 4px;
                    }
                    &:nth-child(2){
                        position: absolute;
                        bottom: 7px;
                        right: -28px;
                        transform: rotate(90deg)
                    }
                }
                h1{
                    color: #FFF;
                    font-family: 'Inter', sans-serif;
                    font-size: 54px;
                    font-style: normal;
                    font-weight: 800;
                    line-height: 73px;
                    margin: 0;
                }
            }
            .infos{
                display: flex;
                flex-direction: column;
                align-items: start;
                h1{
                    color: #FFF;
                    font-family: 'Nunito', sans-serif;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 800;
                    line-height: normal;
                    margin: 0;
                    text-align: start;
                }
                h2{
                    color: #FFF;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    margin: 0;
                    text-align: start;
                }
            }
            button{
                width: 24px;
                height: 24px;
                position: absolute;
                top: 12px;
                right: 19px;
                figure{
                    width: 100%;
                    min-width: unset;
                    height: 100%;
                    min-height: unset;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: unset;
                    svg{
                        width: 24px;
                        min-width: 24px;
                        height: 24px;
                        min-height: 24px;
                        cursor: pointer;
                    }
                }
            }
            &.red{
                background: #A30711;
                figure{
                    svg{
                        fill: #A30711;
                    }
                }
            }
            &.orange{
                background: #E1793E;
                figure{
                    svg{
                        fill: #E1793E;
                    }
                }
            }
            &.black{
                background: #080808;
                figure{
                    svg{
                        fill: #080808;
                    }
                }
            }
        }
        .updates{
            display: flex;
            align-items: end;
            column-gap: 20px;
            margin: 0 0 70px 0;
            section{
                display: flex;
                flex-direction: column;
                align-items: start;
                row-gap: 12px;
                &:first-child{
                    width: 100%;
                    max-width: 690px;
                    h1{
                        color: #090909;
                        font-family: 'Nunito', sans-serif;
                        font-size: 48px;
                        font-style: normal;
                        font-weight: 800;
                        line-height: normal;
                        margin: 0
                    }
                    .itens{
                        width: 100%;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        column-gap: 13px;
                        row-gap: 14px;
                        .item{
                            width: 100%;
                            min-width: 180px;
                            height: 160px;
                            display: flex;
                            position: relative;
                            flex-direction: column;
                            align-items: start;
                            border-radius: 32px;
                            background: #E0ECE9;
                            transition: background .2s;
                            padding: 30px 20px;
                            box-sizing: border-box;
                            cursor: pointer;
                            h1{
                                color: #090909;
                                font-family: 'Inter', sans-serif;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
                                margin: 0;
                                transition: color .2s;
                            }
                            p{
                                color: #090909;
                                font-family: 'Nunito', sans-serif;
                                font-size: 44px;
                                font-style: normal;
                                font-weight: 900;
                                line-height: normal;
                                margin: 2px 0 1px 0;
                                transition: color .2s;
                            }
                            h2{
                                color: #090909;
                                font-family: 'Inter', sans-serif;
                                font-size: 13px;
                                font-style: normal;
                                font-weight: 500;
                                line-height: normal;
                                margin: 0;
                                text-align: start;
                                transition: color .2s;
                            }
                            &::after{
                                content: '';
                                width: 10px;
                                height: 10px;
                                border-left: 2px solid #292D32;
                                border-top: 2px solid #292D32;
                                border-radius: 2px;
                                position: absolute;
                                top: 75px;
                                right: 27px;
                                transform: rotate(135deg);
                                transition: border-color .2s
                            }
                            &:hover{
                                background: $fluxoo-primary-color;
                                h1{
                                    color: #FFF;
                                }
                                p{
                                    color: #FFF;
                                }
                                h2{
                                    color: #FFF;
                                }
                                &::after{
                                    border-color: #FFF;
                                }
                            }
                            &.active{
                                background: $fluxoo-primary-color;
                                h1{
                                    color: #FFF;
                                }
                                p{
                                    color: #FFF;
                                }
                                h2{
                                    color: #FFF;
                                }
                                &::after{
                                    border-color: #FFF;
                                }
                            }
                        }
                    }
                }
                &:last-child{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    width: 100%;
                    max-width: 488px;
                    h1{
                        height: 38px;
                        color: #FFF;
                        font-family: 'Nunito', sans-serif;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 800;
                        line-height: normal;
                        letter-spacing: 0.42px;
                        display: flex;
                        align-items: center;
                        padding: 0 24px;
                        margin: 0;
                        border-radius: 60px;
                        background: $fluxoo-primary-color;
                    }
                    .list{
                        width: 100%;
                        height: 334px;
                        display: flex;
                        border-radius: 30px;
                        background: $fluxoo-primary-color;
                        padding: 0 20px 0 20px;
                        box-sizing: border-box;
                        .itens{
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: start;
                            overflow-y: auto;
                            padding: 10px 0;
                            box-sizing: border-box;
                            justify-content: space-between;
                            &::-webkit-scrollbar{
                                width: 8px;
                                background: transparent
                            }
                            &::-webkit-scrollbar-thumb{
                                border-radius: 30px;
                                background: #FFF;
                            }
                            .item{
                                width: 100%;
                                display: flex;
                                align-items: center;
                                column-gap: 16px;
                                padding: 13px;
                                box-sizing: border-box;
                                border-radius: 24px;
                                cursor: pointer;
                                .name{
                                    width: 50px;
                                    min-width: 50px;
                                    height: 50px;
                                    min-height: 50px;
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    background: #FFF;
                                    transition: background .2s;
                                    h1{
                                        color: #000;
                                        text-align: center;
                                        font-family: 'Inter', sans-serif;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 800;
                                        line-height: normal;
                                        padding: 0;
                                        background: unset;
                                        margin: 0;
                                        background: color .2s;
                                    }
                                }
                                .photo{
                                    width: 50px;
                                    min-width: 50px;
                                    height: 50px;
                                    min-height: 50px;
                                    border-radius: 50%;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center 0;
                                    h1{
                                        display: none;
                                    }
                                }
                                .infos{
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: start;
                                    h1{
                                        width: 100%;
                                        height: unset;
                                        color: #FFF;
                                        font-family: 'Nunito', sans-serif;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 700;
                                        line-height: normal;
                                        margin: 0;
                                        padding: 0;
                                        background: unset;
                                        border-radius: unset;
                                        text-align: start;
                                        transition: color .2s;
                                        display: -webkit-box;
                                        -webkit-box-orient: vertical;
                                        -webkit-line-clamp: 1;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                    h2{
                                        color: #FFF;
                                        font-family: 'Inter', sans-serif;
                                        font-size: 12px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: normal;
                                        margin: 0;
                                        transition: color .2s;
                                    }
                                }
                                &:hover{
                                    background: #FFF;
                                    .name{
                                        background: $fluxoo-primary-color;
                                        h1{
                                            color: #FFF;
                                        }
                                    }
                                    .infos{
                                        h1{
                                            color: $fluxoo-primary-color;
                                            text-decoration: underline;
                                        }
                                        h2{
                                            color: $fluxoo-primary-color;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    svg{
                        display: none;
                    }
                    &.noitens{
                        h1{
                            display: none;
                        }
                        .list{
                            background: #E0ECE9;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            .itens{
                                display: none;
                            }
                            svg{
                                width: 40px;
                                min-width: 40px;
                                height: 40px;
                                min-height: 40px;
                                display: flex;
                                margin: 121px 0 0 0;
                            }
                            &::before{
                                content: 'Sem documentos novos';
                                color: #000;
                                font-family: 'Inter', sans-serif;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: normal;
                                position: absolute;
                                top: 175px;
                            }
                            &::after{
                                content: 'Quando houver serão mostrados aqui.';
                                color: #090909;
                                font-family: 'Inter', sans-serif;
                                font-size: 13px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                                position: absolute;
                                top: 197px;
                            }
                        }
                    }
                }
            }
        }
        .docs{
            width: 100%;
            height: 510px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 32px 0 32px 32px;
            border-radius: 40px;
            background: #F5F5F5;
            box-sizing: border-box;
            margin: 0 0 30px 0;
            section{
                width: 100%;
                display: flex;
                column-gap: 25px;
                position: relative;
                .title{
                    width: 170px;
                    min-width: 170px;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    row-gap: 16px;
                    h1{
                        color: #090909;
                        font-family: 'Nunito', sans-serif;
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 800;
                        line-height: 28px;
                        text-align: start;
                        margin: 0;
                    }
                    p{
                        color: #090909;
                        font-family: 'Nunito', sans-serif;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: normal;
                        text-align: start;
                        margin: 0;
                    }
                    a{
                      color: $fluxoo-primary-color;
                      font-family: 'Nunito', sans-serif;
                      font-size: 15px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: normal;
                      text-align: start;
                      margin: 0;
                    }
                }
                .itens{
                    display: flex;
                    align-items: center;
                    column-gap: 20px;
                    padding: 0 20px 0 0;
                    overflow-x: auto;
                    cursor: grab;
                    &::-webkit-scrollbar{
                        height: 0;
                    }
                    .item{
                        width: 397px;
                        min-width: 397px;
                        height: 166px;
                        display: flex;
                        align-items: center;
                        column-gap: 22px;
                        border-radius: 28px;
                        background: #FFF;
                        padding: 30px 20px;
                        box-sizing: border-box;
                        user-select: none;
                        img{
                            width: 85px;
                            min-width: 85px;
                            height: 85px;
                            min-height: 85px;
                            user-select: none;
                            pointer-events: none;
                        }
                        .infos{
                            h1{
                                color: #090909;
                                font-family: 'Nunito', sans-serif;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 800;
                                line-height: normal;
                                text-align: start;
                                margin: 0;
                                user-select: none;
                            }
                            h2{
                                color: #6F6F6F;
                                font-family: 'Inter', sans-serif;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                                margin: 4px 0 19px 0;
                                text-align: start;
                                user-select: none;
                            }
                            div{
                                width: 156px;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                button{
                                    width: 24px;
                                    min-width: 24px;
                                    height: 24px;
                                    min-height: 24px;
                                    cursor: pointer;
                                    &.tooltip{
                                        &:nth-child(1){
                                            &::before{
                                                content: 'Visualizar';
                                                width: 83px;
                                            }
                                        }
                                        &:nth-child(2){
                                            &::before{
                                                content: 'Baixar';
                                                width: 63px;
                                            }
                                        }
                                        &:nth-child(3){
                                            &::before{
                                                content: 'Compartilhar';
                                                width: 102px;
                                            }
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
                                            stroke: #080808;
                                            fill: #080808;
                                            transition: all .2s
                                        }
                                        &:hover{
                                            svg{
                                                stroke: $fluxoo-primary-color;
                                                fill: $fluxoo-primary-color;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .button{
                    width: 50px;
                    min-width: 50px;
                    height: 50px;
                    min-height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #FFF;
                    border-radius: 50%;
                    margin: auto 0;
                    transition: background .2s;
                    animation: enterContent ease .2s;
                    cursor: pointer;
                    filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.12));
                    svg{
                      width: 24px;
                      min-width: 24px;
                      height: 24px;
                      min-height: 24px;
                      stroke: #090909;
                      transition: stroke .2s;
                    }
                    &:nth-child(2){
                      position: absolute;
                      top: 68px;
                      left: 203px;
                      rotate: 180deg;
                    }
                    &:nth-child(4){
                      position: absolute;
                      top: 68px;
                      right: 8px;
                    }
                    &:hover{
                        background: $fluxoo-primary-color;
                        svg{
                            stroke: #FFF;
                        }
                    }
                }
            }
            hr{
                width: 100%;
                height: 1px;
                background: #D3D3D3;
                border: none;
                margin: auto 0;
            }
        }
        nav{
            width: 60px;
            min-width: 60px;
            height: 60px;
            min-height: 60px;
            background: $fluxoo-primary-color;
            border-radius: 50%;
            position: fixed;
            right: 20px;
            bottom: 20px;
            transition: background .2s;
            filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.35));
            cursor: pointer;
            div{
                &::before{
                    width: 93px;
                    left: -18px;
                    content: 'Criar novo documento';
                }
                figure{
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        width: 20px;
                        min-width: 20px;
                        height: 20px;
                        min-height: 20px;
                    }
                }
            }
            &:hover{
                background: $fluxoo-primary-color-hover;
            }
        }
        .modal{
            &__content{
                padding: 32px 26px;
                h1{
                    color: #292F31;
                    font-family: 'Nunito', sans-serif;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin: 0 auto 40px 0;
                    text-align: start;
                }
                button{
                    display: flex;
                }
                .itens{
                    width: 100%;
                    height: 344px;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    overflow-y: auto;
                    padding: 0 12px 0 0;
                    .item{
                        height: 108px;
                        display: flex;
                        flex-direction: column;
                        align-items: start;
                        border-radius: 24px;
                        padding: 16px 24px;
                        box-sizing: border-box;
                        cursor: pointer;
                        h1{
                            color: #FFF;
                            font-family: 'Nunito', sans-serif;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            text-transform: uppercase;
                            margin: 0;
                        }
                        h2{
                            color: #FFF;
                            font-family: 'Inter', sans-serif;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            margin: 0;
                            &:last-child{
                                margin: 0 0 3px 0;
                            }
                        }
                        &.red{
                            background: #A30711;
                        }
                        &.orange{
                            background: #E1793E;
                        }
                        &.black{
                            background: #090909;
                        }
                    }
                    &::-webkit-scrollbar{
                        width: 8px;
                        background: transparent;
                    }
                    &::-webkit-scrollbar-thumb{
                        border-radius: 30px;
                        background: #D3D3D3;
                    }
                }
            }
        }
    }

    @media(max-width: 1250px){
        #home{
            .updates{
                section{
                    &:first-child{
                        .itens{
                            .item{
                                min-width: 190px;
                                h2{
                                    width: 125px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1050px){
        #home{
            header{
                column-gap: 25px;
            }
            .updates{
                flex-direction: column;
                row-gap: 50px;
                section{
                    &:first-child{
                        width: 100%;
                        max-width: unset;
                        .itens{
                            .item{
                                h2{
                                    width: unset;
                                }
                            }
                        }
                    }
                    &:last-child{
                        width: 100%;
                        max-width: unset;
                    }
                }
            }
        }
    }

    @media(max-width: 800px){
        #home{
            header{
                margin: 0 0 24px 0
            }
            .alert{
                height: unset;
                flex-direction: column;
                align-items: start;
                position: relative;
                row-gap: 13px;
                padding: 20px;
                .days{
                    margin: 0 0 0 82px;
                }
                figure{
                    position: absolute;
                }
                .infos{
                    row-gap: 8px;
                }
            }
            .updates{
                section{
                    &:first-child{
                        .itens{
                            .item{
                                h2{
                                    width: 125px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 768px){
        #home{
            padding-top: 20px;
            header{
                flex-direction: column;
                row-gap: 20px;
                section{
                    &:first-child{
                        order: 2;
                    }
                    &:last-child{
                        width: 100%;
                        justify-content: space-between;
                        order: 1;
                        button{
                            margin: 0 0 0 auto;
                        }
                    }
                }
            }
            .updates{
                section{
                    &:first-child{
                        .itens{
                            .item{
                                h2{
                                    width: 125px;
                                }
                            }
                        }
                    }
                }
            }
            .docs{
                section{
                    .button{
                        display: none;
                    }
                }
            }
        }
    }

    @media(max-width: 740px){
        #home{
            header{
                flex-direction: column;
                row-gap: 20px;
                section{
                    &:first-child{
                        order: 2;
                    }
                    &:last-child{
                        order: 1;
                        margin: 0 0 0 auto
                    }
                }
            }
            .updates{
                section{
                    &:first-child{
                        .itens{
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                }
            }
            .docs{
                height: unset;
                section{
                    flex-direction: column;
                    row-gap: 12px;
                    .title{
                        width: unset;
                        max-width: 80%;
                        margin: 0 0 12px 0;
                        row-gap: 10px;
                    }
                }
                hr{
                  margin: 40px 0 35px;
                }
            }
        }
    }

    @media(max-width: 500px){
        #home{
            padding-top: 25px;
            header{
                section{
                    &:last-child{
                        width: 100%;
                        justify-content: space-between;
                        .profile{
                            display: none;
                        }
                    }
                }
            }
            .alert{
                margin: 0 0 32px 0;
            }
            .updates{
                margin: 0 0 32px 0;
                section{
                    &:first-child{
                        h1{
                            font-size: 28px;
                        }
                        .itens{
                            .item{
                                height: 112px;
                                min-width: 138px;
                                padding: 22px 13px 24px;
                                justify-content: space-between;
                                p{
                                    font-size: 38px;
                                }
                                h2{
                                    display: none;
                                }
                                &:after{
                                    top: 63px;
                                    right: 23px;
                                }
                            }
                        }
                    }
                    &:last-child{
                        .list{
                            padding: 0 10px;
                            .itens{
                                .item{
                                    .infos{
                                        h1{
                                            line-height: 16px;
                                            margin: 0 0 3px 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .docs{
                padding: 25px 0 25px 17px;
                section{
                    .title{
                        max-width: 90%;
                        row-gap: 10px;
                        margin: 0 0 2px 0;
                        h1{
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 800;
                            line-height: 28px;
                        }
                    }
                    .itens{
                        .item{
                            width: 279px;
                            min-width: 279px;
                            height: 140px;
                            column-gap: 14px;
                            align-items: start;
                            padding: 20px 14px;
                            img{
                                width: 50px;
                                min-width: 50px;
                                height: 50px;
                                min-height: 50px;
                                margin: 4px 0 0 0;
                            }
                            .infos{
                                h1{
                                    font-size: 18px;
                                }
                                h2{
                                    font-size: 12px;
                                    margin: 4px 0 17px 0;
                                }
                            }
                        }
                    }
                }
                hr{
                    margin: 30px 0 21px;
                }
            }
        }
    }

    @media(max-width: 425px){
        #home{
            header{
                section{
                    &:last-child{
                        display: none;
                    }
                }
            }
            nav{
                display: none;
            }
            .docs{
                margin: 0 0 110px 0;
            }
            .modal{
                &__content{
                    padding-bottom: 0;
                    .itens{
                        height: unset;
                        .item{
                            &:last-child{
                                margin: 0 0 12px 0;
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 360px){
        #home{
            .updates{
                section{
                    &:first-child{
                        .itens{
                            .item{
                                padding: 22px 13px 15px;
                                justify-content: space-between;
                                p{
                                    font-size: 31px;
                                }
                                &:after{
                                    top: 68px;
                                    right: 23px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
