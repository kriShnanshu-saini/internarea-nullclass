import React from 'react';
import { NavbarContextProvider } from './context/NavbarContext';
import { Routes, Route } from 'react-router-dom';
// import { Footer, Home, Navbar, Register } from './components';
import { HomePage, InternshipPage, RegisterPage } from '@/pages';

const App = () => {
	return (
		<NavbarContextProvider>
			<div className='relative max-w-screen-2xl mx-auto bg-white'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/internships' element={<InternshipPage/>}/>
				</Routes>
			</div>
		</NavbarContextProvider>
	);
};

export default App;
