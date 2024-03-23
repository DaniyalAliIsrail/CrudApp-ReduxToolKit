import React from 'react';
import "./customModal.css";
import { useSelector } from 'react-redux';

const CustomModal = ({id,showPopup ,setShowPopup}) => {
    const allUser = useSelector((state)=>{
        return state.app.users
    })

    const singleUser = allUser.filter((ele)=>{
        return ele.id === id
    })
  return (
    <div className='modalbackground'>
        <div className='modalContainer'>
            <button onClick={()=> setShowPopup(false)}>
                close
            </button>
            <h2>
                {
                    singleUser.length > 0 ? singleUser[0].name : ''
                }

            </h2>
            <h3>{
                singleUser.length > 0? singleUser[0].email : ''
                }
            </h3>
            <h3>
                {
                    singleUser.length > 0? singleUser[0].gender : ''
                }
            </h3>
        </div>
    </div>
  )
}
export default CustomModal