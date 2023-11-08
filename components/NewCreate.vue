<script>
export default {

  ListCreate() {
    const create = () => {
      // 新しいデータを作成
      const newData = {
        title: title.value,
        date: date.value,
        content: content.value,
      };

      // アクションをディスパッチ
      createData(newData);
    };

    const cancel = () => {
      // キャンセルの処理を追加
    };

    return { title, date, content, create, cancel };
  },
};
</script>