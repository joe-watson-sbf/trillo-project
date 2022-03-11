/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import Recommend from './Recommend/Recommend'
import Review from './Review/Review'

const Detail = () => {
    return (
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nisi dignissimos debitis ratione sapiente saepe.
                    Accusantium cumque, quas, ut corporis incidunt deserunt
                    quae architecto voluptate.
                </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt
                    quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Perfect for families</li>
                </ul>
                <Recommend/>
            </div>
            <Review/>
        </div>
    )
}

export default Detail