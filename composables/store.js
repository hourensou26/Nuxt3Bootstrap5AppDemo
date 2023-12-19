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