import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';

import { ComponentRegistry } from './layouts/ComponentRegisteration';
import menus from './menu.json';

function App() {
	const _routes = (menus as any[]).map((menu: any) => {
		return {
			path: menu.path,
			Component: ComponentRegistry[menu.component],
			children: menu.children.map((child: any) => {
				return {
					path: child.path,
					Component: ComponentRegistry[child.component],
					children: [],
				} as RouteObject;
			}),
		} as RouteObject;
	});

	return useRoutes(_routes);

	// return useRoutes([
	// 	{
	// 		path: '',
	// 		Component: MainLayout,
	// 		children: [
	// 			{
	// 				path: 'arrivals',
	// 				Component: ArrivalsPage,
	// 			},
	// 			{
	// 				path: 'departures',
	// 				Component: DeparturesPage,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		path: 'thy', // thy/arrivals/tk-300
	// 		Component: ThyLayout,
	// 		children: [
	// 			{
	// 				path: 'arrivals/:flightNumber',
	// 				Component: ArrivalDetailPage,
	// 			},
	// 			{
	// 				path: 'departures/:flightNumber',
	// 				Component: DepartureDetailPage,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		path: 'anadolu-jet',
	// 		Component: AnadoluJetLayout,
	// 		children: [
	// 			{
	// 				path: 'arrivals/:flightNumber',
	// 				Component: ArrivalDetailPage,
	// 			},
	// 			{
	// 				path: 'departures/:flightNumber',
	// 				Component: DepartureDetailPage,
	// 			},
	// 		],
	// 	},
	// ]);
}

export default App;
