import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, compose } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import './index.css'
import { rootReducer } from './redux/reducer'
import App from './app'

const initialState = {
  filterAll: true,
  filterWithout: true,
  filterTransferOne: true,
  filterTransfersTwo: true,
  filterTransfersThree: true,
  ticketsAll: [],
  ticketsWithout: [],
  ticketsTransfersOne: [],
  ticketsTransfersTwo: [],
  ticketsTransfersThree: [],
  ticketsCount: 5,
  activeTab: null,
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: composeEnhancers(),
})
/* eslint-enable */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
