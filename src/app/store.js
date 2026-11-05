import { configureStore } from '@reduxjs/toolkit'
import fieldReducer from '../features/fields/fieldSlice'
import { apiSlice } from './api/apiSlice'
import appReducer from '../features/app/appSlice'

// export default configureStore({
//   reducer: {
//     field: fieldReducer,
//   },
// })


export default configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      app: appReducer,
      // field: fieldReducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          // The API cache holds large server responses that are plain JSON, so scanning it on every action is wasted time.
          serializableCheck: { ignoredPaths: [apiSlice.reducerPath] },
      }).concat(apiSlice.middleware),
  devTools: true
})
