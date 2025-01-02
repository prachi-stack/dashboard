 import React from 'react'


const Header = ({ title }) => {
	return (
		<header className='bg-brown-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-brown-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-brown-100'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;