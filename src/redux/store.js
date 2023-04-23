import { configureStore } from '@reduxjs/toolkit'
import loggedSlice from './loggedSlice'
import modeSlice from './modeSlice'
import rewriteLoadingSlice from './rewriteLoadingSlice'

export const store = configureStore({
  reducer: {
    modeState:modeSlice,
    rewriteStatus:rewriteLoadingSlice,
    token:loggedSlice
  },
})