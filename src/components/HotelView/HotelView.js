/*
 *   Copyright (c) 2022 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */
import React from 'react';
import CTA from './CTA/CTA';
import Detail from './Detail/Detail';
import Gallery from './Gallery/Gallery';
import Overview from './Overview/Overview';
 
const HotelView = () => {
	return (
		<main className='hotel-view'>
			<Gallery/>
			<Overview/>
			<Detail/>
			<CTA/>
		</main>
	)
}

export default HotelView