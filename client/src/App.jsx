import React from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='max-w-screen-2xl mx-auto bg-white'>
			<Navbar />
			<Home />
			<Footer/>
		</div>
	);
};

export default App;
