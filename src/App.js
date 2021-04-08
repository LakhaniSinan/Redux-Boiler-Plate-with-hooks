import { Provider } from 'react-redux';
import React from "react"
import { store } from "./redux/store"
import Start from "./Startpoint"
const App = () => {
  return (
    <Provider store={store}>
      <Start/>
    </Provider>
  )
}

export default App