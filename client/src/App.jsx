import React from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Footer from './components/Footer';
import { NavbarContextProvider } from './context/NavbarContext';

const App = () => {
	return (
		<NavbarContextProvider>
			<div className='relative max-w-screen-2xl mx-auto bg-white'>
				<Navbar />
				<Home />
				<Footer />
			</div>
		</NavbarContextProvider>
	);
};

export default App;
