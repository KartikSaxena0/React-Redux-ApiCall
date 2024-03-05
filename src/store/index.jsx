import { configureStore } from "@reduxjs/toolkit";
import { fakeUserDataSlices, userSlices } from "./slices/UserSlices";

const store = configureStore ({
    reducer: {
        users : userSlices?.reducer,
        fakeUserData: fakeUserDataSlices?.reducer
    }
})

export { store };