import React from 'react'
import logo from '../../Images/eifer_logo.jpg'
import img1 from '../../Images/ge1.png'
import img2 from '../../Images/ge2.png'
import img3 from '../../Images/ge3.png'

const EiferGallery = () => {
  return (
    <>
        <img src={logo} />
        <h1>Eifer Gallery</h1>
        <div>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </div>
    </>
  )
}

export default EiferGallery
