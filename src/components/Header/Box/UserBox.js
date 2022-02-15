/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const UserBox = ({img}) => {
  return (
    <div className='user-nav__user'>
        <img src={img} alt='User Photo' className='user-nav__user-photo'/>
        <span className='user-nav__user-name'>Watson</span>
    </div>
  )
}

export default UserBox