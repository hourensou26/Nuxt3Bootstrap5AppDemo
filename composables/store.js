export default createStore({
  state: {
    editTitle: null,
    editDate: null,
    editContent: null,
  },
  mutations: {
    setEditData(state, { title, date, content }) {
      state.editTitle = title;
      state.editDate = date;
      state.editContent = content;
    },
  },
  actions: {
    fetchEditData({ commit, state }, id) {
      // ここでデータの取得処理を行い、取得したデータをミューテーションを通じてストアにセットする
      const item = items.value.find((v) => v.id === id);
      commit('setEditData', item);
    },
  },
});
