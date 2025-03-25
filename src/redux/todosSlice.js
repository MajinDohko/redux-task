import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'taks',
    initialState: [],
    reducers: {
    addTask: (state, action) => {
        state.push(action.payload)
    },
    removeTask: (state, action) => {
        return state.filter(task => task.id !== action.payload)
    }
    } 
})


export const { addTask, removeTask } = todosSlice.actions
export default todosSlice.reducer