/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import sprite from '../../../../assets/img/sprite.svg';

const Location = () => {
    return (
        <div className="overview__location">
            <svg className="overview__icon-location">
                <use xlinkHref={sprite + '#icon-location-pin'} />
            </svg>
            <button className="btn-inline">Albufeira, Portugal</button>
        </div>
    )
}

export default Location