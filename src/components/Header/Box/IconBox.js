/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'

const IconBox = ({iconRef, numOfNotification=0}) => {
	return (
		<div className='user-nav__icon-box'>
			<svg className='user-nav__icon'>
				<use xlinkHref={iconRef} />
			</svg>
			<span className='user-nav__notification'> {numOfNotification} </span>
		</div>
	)
}

export default IconBox