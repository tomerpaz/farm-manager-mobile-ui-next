import React, { useEffect } from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router'
import store from './app/store'

// Mouse-wheeling over a focused number input changes its value (CSS can only
// hide the spinner arrows — see index.css). Blurring it first lets the wheel
// scroll the page instead, app-wide. Passive: nothing is prevented.
const blurNumberInputOnWheel = (e) => {
  const el = document.activeElement
  if (el?.type === 'number' && el === e.target) el.blur()
}

function RouterApp() {
  useEffect(() => {
    document.addEventListener('wheel', blurNumberInputOnWheel, { passive: true })
    return () => document.removeEventListener('wheel', blurNumberInputOnWheel)
  }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='*' element={<App />} />
          </Routes>
        </HashRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default RouterApp