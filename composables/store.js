import { createStore } from 'vuex';

const store = createStore({
  state: {
    editTitle: '',
    editDate: '',
    editContent: '',
    items: [],
  },
  mutations: {
    getEditItem(state, id) {
      const item = state.items.find((v) => v.id === id);

      if (item) {
        state.editTitle = item.title;
        state.editDate = item.date;
        state.editContent = item.content;
      } else {
        console.error(`IDが${id}のアイテムが見つかりませんでした。`);
      }
    },
  },
});

export default store;
