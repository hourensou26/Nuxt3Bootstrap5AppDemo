import { ref } from 'vue';

interface SavedData {
  title: string;
  date: Date;
  content: string;
}

const inputData = ref<SavedData>({ title: '', date: new Date(), content: '' });

export function saveData(data: SavedData): void {
  inputData.value = { ...data };
}

export function getInputData(): SavedData {
  return { ...inputData.value };
}
