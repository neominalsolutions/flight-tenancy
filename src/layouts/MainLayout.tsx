import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<div>
			<Link to="arrivals">Gelen Uçuşlar</Link>{' '}
			<Link to="departures">Giden Uçuşlar</Link> <Outlet />
			<br></br>
			<p>Uçuş monitor seçiniz</p>
		</div>
	);
}

export default MainLayout;
