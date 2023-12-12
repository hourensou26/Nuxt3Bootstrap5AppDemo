import { reactive } from 'vue'

export const store = reactive({
    editTitle: '',
    editDate: '',
    editContent: '',
})

export { store };