import { ref } from 'vue';

export const user = ref({ name: '', last_name: '', email: '', id: null, image: '' })
export const storageUrl = process.env.VUE_APP_STORAGE_URL + '/storage/'