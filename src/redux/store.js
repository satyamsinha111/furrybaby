import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./features/loader"
import dialogReducer from "./features/dialog"
export default configureStore({
        reducer:{
            loader:loaderReducer,
            dialog:dialogReducer
        }
})