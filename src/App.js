import React, { Component } from 'react'
import Header from './components/Header/Header'
import HotelView from './components/HotelView/HotelView'
import SlideBar from './components/SlideBar/SlideBar'

export default class App extends Component {
	render() {

		return (
			<div className='container'>
				<Header />
				<div className='content'>
					<SlideBar />
					<HotelView />
				</div>
			</div>
		)
	}
}
