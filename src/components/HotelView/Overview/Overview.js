/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import IconStar from './IconStar/IconStar';
import Location from './Location/Location';
import Rating from './Rating/Rating';

const Overview = () => {
    return (
        <div className="overview">
            <h1 className="overview__heading">
                Hotel Las Palmas
            </h1>

            <IconStar/>
            <Location/>
            <Rating/>

        </div>
    )
}

export default Overview