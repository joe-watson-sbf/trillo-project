/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import sprite from '../../../../assets/img/sprite.svg';

const IconStar = () => {

    return (
        <div className="overview__stars">
            <svg className="overview__icon-star">
                <use xlinkHref={sprite + '#icon-star'} />
            </svg>
            <svg className="overview__icon-star">
                <use xlinkHref={sprite + '#icon-star'} />
            </svg>
            <svg className="overview__icon-star">
                <use xlinkHref={sprite + '#icon-star'} />
            </svg>
            <svg className="overview__icon-star">
                <use xlinkHref={sprite + '#icon-star'} />
            </svg>
            <svg className="overview__icon-star">
                <use xlinkHref={sprite + '#icon-star'} />
            </svg>
        </div>
    )
}

export default IconStar