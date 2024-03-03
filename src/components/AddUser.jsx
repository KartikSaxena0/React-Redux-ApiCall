import React from 'react';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { userSlices } from '../store/slices/UserSlices';
import ShowUserData from './ShowUserData';
import konsole from "../networks/konsole"
import Services from '../networks/ServicesApi';

const AddUser = () => {

    const {addUsers, removeUsers, deleteUsers} = userSlices?.actions;

    const dispatch = useDispatch()

const addNewUserData = (data) =>{
    dispatch(addUsers(data))
    
}

const calApiFun = () =>{
    const promise = Services.getFakeUserData();

        promise.then((res)=>{
            konsole.log("getFakeUserData", res.data)
        }).catch((err)=>{
            konsole.error("getFakeUserDataError", err)
        }).finally(()=>{
            konsole.log("Function processing Over")
        })
}

    return(
        <>
        <div>

        <button onClick={()=> addNewUserData(fakeUserData())}>AddUser</button>
        <button onClick={calApiFun}>calApiFun</button>

        <div>
            <ShowUserData/>
        </div>

        </div>
        </>
    )
}

export default AddUser;