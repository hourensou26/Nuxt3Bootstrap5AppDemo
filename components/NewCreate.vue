<script setup>
import { ref } from 'vue'; // 'ref'

const title = ref('');
const date = ref('');
const content = ref('');
</script>

<script>
import { createData } from '@/store/actions'; 

export default {

  setup() {
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
