import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    message: "",
    isSuccess: false,
    loading: false,
    error: [],
    errorMessage:false
}

export const getAllTasks = createAsyncThunk("TaskList/getPostes",async(arg,{rejectWithValue})=>{
    try {
        const data =await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(data)
        return data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


const TaskListSlice = createSlice({
    name: 'TaskList',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getAllTasks.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getAllTasks.fulfilled,(state,action)=>{
            state.loading = false
            state.isSuccess = true
            state.data = action.payload
            state.errorMessage = false
        })
        builder.addCase(getAllTasks.rejected,(state,action)=>{
            state.loading = false
            state.isSuccess = false
            state.error = action.payload
        })
    }
})
const TaskSliceReducer = TaskListSlice.reducer
export default TaskSliceReducer