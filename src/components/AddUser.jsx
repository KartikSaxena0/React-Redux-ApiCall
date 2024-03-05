import React from 'react';
import { fakeUserData } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { userSlices, fakeUserDataSlices } from '../store/slices/UserSlices';
import ShowUserData from './ShowUserData';
import konsole from "../networks/konsole"
import Services from '../networks/ServicesApi';

const AddUser = () => {

    const {addUsers, removeUsers, deleteUsers} = userSlices?.actions;
    const {addFakeUsers, removeFakeUsers} = fakeUserDataSlices?.actions;

    const dispatch = useDispatch()

// const fakeUserStoreData = useSelector((data)=> data?.fakeUserData)
// konsole.log("fakeUserStoreData",fakeUserStoreData?.fakeUserDataApi)

const addNewUserData = (data) =>{
    dispatch(addUsers(data))
    
}

const calApiFun = () =>{
    const promise = Services.getFakeUserData();

        promise.then((res)=>{
            // konsole.log("getFakeUserData", res.data.users)
            dispatch(addFakeUsers(res.data.users))
            
        }).catch((err)=>{
            konsole.error("getFakeUserDataError", err)
        }).finally(()=>{
            konsole.log("Function processing Over")
        })
}

// const runFun = () =>{
//     document.addEventListener('keyup', (e) => {
//         if (e.getModifierState('CapsLock')) {
//             konsole.log("Caps Lock is on");
//         } else {
//             konsole.log("Caps Lock is off");
//         }
//     });
// }

    return(
        <>
        <div>

        <button onClick={()=> addNewUserData(fakeUserData())}>AddUser</button>
        <button onClick={calApiFun}>calApiFun</button>
        {/* <button onClick={runFun}>Caps lock On</button> */}

        <div>
            <ShowUserData/>
        </div>

        </div>
        </>
    )
}

export default AddUser;