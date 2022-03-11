/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */

import React from 'react'
import hotel1 from '../../../assets/img/hotel-1.jpg'
import hotel2 from '../../../assets/img/hotel-2.jpg'
import hotel3 from '../../../assets/img/hotel-3.jpg'

const Gallery = () => {
    return (
        <div className="gallery">
            <figure className="gallery__item">
                <img src={hotel1} alt="Photo of hotel 1" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={hotel2} alt="Photo of hotel 2" className="gallery__photo"/>
            </figure>
            <figure className="gallery__item">
                <img src={hotel3} alt="Photo of hotel 3" className="gallery__photo"/>
            </figure>
        </div>
    )
}

export default Gallery