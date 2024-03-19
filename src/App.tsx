import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ThyLayout from './layouts/ThyLayout';
import AnadoluJetLayout from './layouts/AnadoluJetLayout';
import ArrivalsPage from './pages/arrivals/ArrivalsPage';
import DeparturesPage from './pages/departures/DeparturesPage';
import ArrivalDetailPage from './pages/arrivals/ArrivalDetailPage';
import DepartureDetailPage from './pages/departures/DepartureDetailPage';

import menus from './menu.json';
import { ComponentRegister } from './layouts/ComponentRegisteration';

function App() {
	// (menus as any[]).map((menu) => {
	// 	return {
	// 		path: menu.path,
	// 		Component: ComponentRegister?[menu?.layoutName]
	// 	};
	// });

	return useRoutes([
		{
			path: '',
			Component: MainLayout,
			children: [
				{
					path: 'arrivals',
					Component: ArrivalsPage,
				},
				{
					path: 'departures',
					Component: DeparturesPage,
				},
			],
		},
		{
			path: 'thy', // thy/arrivals/tk-300
			Component: ThyLayout,
			children: [
				{
					path: 'arrivals/:flightNumber',
					Component: ArrivalDetailPage,
				},
				{
					path: 'departures/:flightNumber',
					Component: DeparturesPage,
				},
			],
		},
		{
			path: 'anadolu-jet',
			Component: AnadoluJetLayout,
			children: [
				{
					path: 'arrivals/:flightNumber',
					Component: ArrivalDetailPage,
				},
				{
					path: 'departures/:flightNumber',
					Component: DepartureDetailPage,
				},
			],
		},
	]);
}

export default App;
