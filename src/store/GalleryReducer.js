import { createSlice } from "@reduxjs/toolkit"

const GalReducer = createSlice({
    name: "gallery",
    initialState: {
        images: []
    },
    reducers: {
        load(state, action) {
            if (action.payload !== '') {
                const newId = new Date().toISOString()
                state.images.push({
                    id: newId,
                    url: action.payload,
                    favourited: false
                })
            }
        },
        remove(state, action) {
            state.images = state.images.filter(image => image.id !== action.payload)
        },
        favourite(state, action) { 
            const favId = action.payload
            state.images.forEach(image => {if (image.id === favId) {
                image.favourited = !image.favourited;
            }})
        }
    }
})

export const {load, remove, favourite} = GalReducer.actions
export default GalReducer.reducer;