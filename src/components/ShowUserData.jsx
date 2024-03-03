import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSlices } from '../store/slices/UserSlices';
import ClearAllUser from './ClearAllUser';


const ShowUserData = () => {

    const { addUsers, removeUsers, deleteUsers } = userSlices?.actions;

    const userDataState = useSelector((data) => data?.users)

    const dispatch = useDispatch()

    const removeData = (id) => {
        dispatch(removeUsers(id))
    }

    return (

        <>
            {/* <h1>ShowData User</h1> */}
            <ul className='user-data-list'>
                {
                    userDataState?.map((item, id) => {
                        return <>
                            <li key={id}>{item}
                                <button onClick={() => removeData(id)} className='cross-icon'>X</button>
                            </li>
                        </>
                    })
                }
            </ul>
            <ClearAllUser />
        </>
    )
}

export default ShowUserData;