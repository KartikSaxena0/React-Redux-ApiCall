import { createSlice } from "@reduxjs/toolkit";
import { fakeUserData } from "../../api";
import konsole from "../../networks/konsole";

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

const fakeUserDataSlices = createSlice({
    name: "fakeUserData",
    initialState: {
        fakeUserDataApi: []
    },
    reducers: {
        addFakeUsers(state, action) {
            state.fakeUserDataApi = action.payload;
            // konsole.log("fakeUserDataSlicesreducers",action.payload)
        },
        removeFakeUsers(state, action) {}
    }
})

export { userSlices, fakeUserDataSlices };

// export const { addUsers } = userSlices.actions;