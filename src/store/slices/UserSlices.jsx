import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: "usersData",
    initialState: [],
    reducers: {
        addUsers(state, action) {
            state.push(action.payload);
            
        },
        removeUsers(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) {
            return [];
        }
    },
    extraReducers(builder){
        builder.addCase(userSlices.actions.deleteUsers, ()=>{
            return []
        })
    }
})

export { userSlices };

// export const { addUsers } = userSlices.actions;