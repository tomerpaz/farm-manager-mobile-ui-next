import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router'
import store from './app/store'

function RouterApp() {
  return (
   <React.StrictMode>
         <Provider store={store}>
           <HashRouter>
             <Routes>
               <Route path='*' element={<App/>} />
             </Routes>
           </HashRouter>
         </Provider>
       </React.StrictMode>
  )
}

export default RouterApp