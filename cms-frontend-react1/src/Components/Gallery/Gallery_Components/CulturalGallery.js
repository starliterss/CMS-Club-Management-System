import React from 'react'
import logo from '../../Images/cultural_logo.jpg'
import img1 from '../../Images/gz1.png'
import img2 from '../../Images/gz2.png'
import img3 from '../../Images/gz3.png'
import img4 from '../../Images/gz4.png'
import img5 from '../../Images/gz5.png'
import img6 from '../../Images/gz6.png'

const CulturalGallery = () => {
  return (
    <>
        <img src={logo} />
        <h1>Cultural Club Gallery</h1>
        <div>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
        </div>
    </>
  )
}

export default CulturalGallery
