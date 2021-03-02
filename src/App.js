import React, { useContext } from 'react'

import { useImmerReducer} from 'use-immer'

import './App.css'

import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

import Form from "./components/Form/Form"
import Output from "./components/Output/Output"

const App = () => {
  const initialState = {summary: false, wordCloud: false, isLoading: false}

  const appReducer = (draft, action) => {
    switch (action.type) {
      case "outputReady":
        draft.summary = action.data.summary
        draft.wordCloud = action.data.encoded_string
        break
      case "loadingOn":
        draft.isLoading = true
        break
      case "loadingOff":
        draft.isLoading = false
        break
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState)

  return (
    <div className = "container">
      <StateContext.Provider value = { state }>
        <DispatchContext.Provider value = { dispatch }>
          <Form />
          <Output />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}

export default App