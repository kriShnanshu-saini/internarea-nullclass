import React from 'react';
import { NavbarContextProvider } from './context/NavbarContext';
import { Routes, Route } from 'react-router-dom';
import { Footer, Home, Navbar, Register } from './components';

const App = () => {
	return (
		<NavbarContextProvider>
			<div className='relative max-w-screen-2xl mx-auto bg-white'>
				{/* <Navbar /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				{/* <Footer /> */}
			</div>
		</NavbarContextProvider>
	);
};

export default App;
