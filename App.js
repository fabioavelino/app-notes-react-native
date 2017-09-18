import React from 'react'
import { compose, createStore } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from './src/modules'
import { Provider, connect } from 'react-redux'

import App from './src/components/App'

const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, { storage: AsyncStorage })

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Application
