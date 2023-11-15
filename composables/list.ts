// composables/dataHandler.ts

import { ref, Ref } from 'vue';

interface SavedData {
  title: string;
  date: string; // 日付を文字列として扱うこともあります
  content: string;
}

interface DataHandler {
  inputData: Ref<SavedData>;
  saveData: (data: SavedData) => void;
  getInputData: () => SavedData;
}

const inputData = ref<SavedData>({ title: '', date: '', content: '' });

export function useDataHandler(): DataHandler {
  function saveData(data: SavedData): void {
    inputData.value = { ...data };
  }

  function getInputData(): SavedData {
    return { ...inputData.value };
  }

  return {
    inputData,
    saveData,
    getInputData,
  };
}
