import React from 'react'
import logo from '../../Images/axios_logo.jpeg'
import img1 from '../../Images/gt1.jpg'
import img2 from '../../Images/gt2.jpg'
import img3 from '../../Images/gt3.jpg'
import img4 from '../../Images/gt4.jpg'
import img5 from '../../Images/gt5.jpg'
import img6 from '../../Images/gt6.png'

const TechnicalGallery = () => {
  return (
    <>
        <img src={logo} />
        <h1>Technical Club Gallery</h1>
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

export default TechnicalGallery
