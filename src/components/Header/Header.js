/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */

import React from 'react'
import logo from '../../assets/img/logo.png';
import SearchForm from '../SearchForm/SearchForm';
import sprite from '../../assets/img/sprite.svg'
import IconBox from './Box/IconBox'
import UserBox from './Box/UserBox'
import imageProfil from '../../assets/img/user.jpg'

const Header = () => {
	return (
		<header className='header'>
			<img src={logo} alt='logo' className='logo' />
			<SearchForm placeholder={'Search hotels'}/>

			<div className="user-nav">
                <IconBox
                    iconRef={sprite + '#icon-bookmark'}
                    numOfNotification={7}
                />
                <IconBox
                    iconRef={sprite + '#icon-chat'}
                    numOfNotification={13}
                />
                <UserBox img={imageProfil}/>
            </div>
		</header>
	)
}

export default Header