import React from 'react'
import logo from '../../Images/E-cell_logo.jpg'
import img1 from '../../Images/gen1.png'
import img2 from '../../Images/gen2.png'
import img3 from '../../Images/gen3.png'

const EcellGallery = () => {
  return (
    <>
        <img src={logo} />
        <h1>E-Cell Gallery</h1>
        <div>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </div>
    </>
  )
}

export default EcellGallery
