import { createSlice } from "@reduxjs/toolkit";


export const mobileSidebarSlice = createSlice({
    name : 'mobileSidebar',
    initialState : {
        mobileSidebar : false
    },
    reducers : {
        setMobileSidebar : (state, action) => {
            state.mobileSidebar = action.payload
        }
    }
})

export const { setMobileSidebar } = mobileSidebarSlice.actions

export default mobileSidebarSlice.reducer