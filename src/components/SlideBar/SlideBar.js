/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import sprite from '../../assets/img/sprite.svg'
import Item from './Item/Item'

const SlideBar = () => {

    return (
        <nav className='sidebar'>
            <ul className="side-nav">
                <Item linkRef="/hotel" iconRef={sprite + '#icon-home'}>Hotel</Item>
                <Item linkRef="/flight" iconRef={sprite + '#icon-aircraft-take-off'}>Flight</Item>
                <Item linkRef="/rentcar" iconRef={sprite + '#icon-key'}>Car Rental</Item>
                <Item linkRef="/tours" iconRef={sprite + '#icon-map'}>Tours</Item>
            </ul>
            <div className="legal">
                &copy; {new Date().getFullYear()} by joe. All rights reserved.
            </div>
        </nav>
    )
}

export default SlideBar