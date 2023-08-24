import { configureStore } from "@reduxjs/toolkit";
import mobileSidebarReducer from "./mobileSidebar"

export default configureStore({
    reducer : {
        mobileSidebar : mobileSidebarReducer,
    }
})