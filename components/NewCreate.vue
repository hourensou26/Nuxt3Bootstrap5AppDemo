<script>
import { createApp } from 'vue'


const app = createApp({})

app.component(
  'create-component',
  {
    data() {
      return {
        title: '',
        date: '',
        content: ''
      }
    },

    methods: {
      create() {
        const data = {
          title: this.title,
          date: this.date,
          content: this.content
        }
        console.log('Create button clicked');
      },
      cancel() {
        console.log('Cancel button clicked');
      }
    }
  }
)
</script>