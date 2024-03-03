import React from "react";
import { useDispatch } from "react-redux";
import { userSlices } from "../store/slices/UserSlices";


const ClearAllUser = () => {

    const { addUsers, removeUsers, deleteUsers } = userSlices?.actions;
    const dispatch = useDispatch()

    const clearAllData = () => {
        dispatch(deleteUsers())
    }

    return (

        <>
            <button onClick={clearAllData}>Clear All User</button>
        </>
    )
}

export default ClearAllUser;