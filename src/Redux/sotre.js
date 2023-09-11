import { configureStore } from '@reduxjs/toolkit'
// import postSliceReducer from './slices/PostSlices'
import TaskSliceReducer from "./TaskSlice"

const store = configureStore({
    reducer:{
       task: TaskSliceReducer
    }
})

export default store