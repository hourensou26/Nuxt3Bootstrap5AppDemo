import { ref } from 'vue';

const dataList = ref([]);

export function sendToList(data) {
  dataList.value.push(data);
}

export function getListData() {
  return dataList.value;
}
