/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const Item = ({children, iconRef, linkRef}) => {

    return (
        <li className="side-nav__item">
            <a href={linkRef} className="side-nav__link"
            >
                <svg className="side-nav__icon">
                    <use xlinkHref={iconRef} />
                </svg>
                <span>{children}</span>
            </a>
        </li>
    )
}

export default Item