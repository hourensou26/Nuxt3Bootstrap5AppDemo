<script>
export default {
  data() {
    return {
      title: '',
      date: '',
      content: ''
    };
  },
  methods: {
  create() {
    const data = {
      title: this.title,
      date: this.date,
      content: this.content
      }
      console.log('Create button clicked', data);
      }
    },
    cancel() {
      console.log('Cancel button clicked');
    }
}
</script>