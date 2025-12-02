import {configureStore} from "@reduxjs/toolkit"
import GalReducer from "./GalleryReducer"

export default configureStore({
    reducer: {
        gallery: GalReducer
    }
})