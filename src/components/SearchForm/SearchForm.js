/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react'
import sprite from '../../assets/img/sprite.svg'


const SearchForm = ({ placeholder }) => {
    return (
        <form action='#' className='search'>
            <input type='text' className='search__input' placeholder={placeholder} />
            <button className='search__button'>
                <svg className='search__icon'>
                    <use xlinkHref={sprite + '#icon-magnifying-glass'} />
                </svg>
            </button>
        </form>
    )
}

export default SearchForm