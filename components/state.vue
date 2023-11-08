import{createApp} from 'vue'
import{createStore} from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp({ /* ルートコンポーネント */ })

// プラグインとしてストアインスタンスをインストールします
app.use(store)

store.commit('increment')

console.log(store.state.count) // -> 1

methods: {
  increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
