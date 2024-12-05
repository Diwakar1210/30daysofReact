import React from 'react'

const ProfilePicture = () => {

    const imgPath = 'https://via.placeholder.com/150';

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

  return (
    <>
        <img onClick={(e)=>handleClick(e)} src={imgPath} alt="" />
    </>
  )
}

export default ProfilePicture