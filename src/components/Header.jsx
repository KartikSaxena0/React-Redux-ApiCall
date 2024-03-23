import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import konsole from '../networks/konsole';
import { fakeUserDataSlices } from '../store/slices/UserSlices';


const Header = () =>{

const dispatch = useDispatch();
const {addFakeUsers, removeFakeUsers} = fakeUserDataSlices?.actions;

    const fakeUserStoreData = useSelector((data)=> data?.fakeUserData)
konsole.log("fakeUserStoreData",fakeUserStoreData?.fakeUserDataApi)

const removeThisUser = (userId) =>{
    konsole.log("removeThisUser", userId);
    dispatch(removeFakeUsers(userId))
}
    return(
        <>
        I am header

        <ul>
            {
                fakeUserStoreData?.fakeUserDataApi.map((item)=>{

                   return item?.bloodGroup !== "A-"?
                   <>
                   <li>{item?.firstName} {item?.bloodGroup} <button onClick={()=>removeThisUser(item?.id)}>Remove This User</button></li>

                   </>
                   : null
                  
                    }
                     
                )
            }
        </ul>
        </>
    )
}
export default Header;