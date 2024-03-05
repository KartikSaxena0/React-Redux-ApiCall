import React from 'react';
import { useSelector } from 'react-redux';
import konsole from '../networks/konsole';


const Header = () =>{

    const fakeUserStoreData = useSelector((data)=> data?.fakeUserData)
konsole.log("fakeUserStoreData",fakeUserStoreData?.fakeUserDataApi)
    return(
        <>
        I am header

        <ul>
            {
                fakeUserStoreData?.fakeUserDataApi.map((item)=>{

                   return item?.bloodGroup !== "A-"?
                   
                   <li>{item?.firstName} {item?.bloodGroup}</li>: null
                  
                    }
                     
                )
            }
        </ul>
        </>
    )
}
export default Header;