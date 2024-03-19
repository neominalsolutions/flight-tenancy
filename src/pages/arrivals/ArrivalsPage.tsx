import React from 'react';
import { Link } from 'react-router-dom';

function ArrivalsPage() {
	const data = [
		{
			companyName: 'THY',
			companySlug: 'thy', // AnadoluJET anadolu-jet
			status: 'On Land',
			date: new Date(),
			origin: 'İstanbul',
			flightNumber: 'TK-300',
		},
		{
			companyName: 'Anadolu Jet',
			companySlug: 'anadolu-jet', // AnadoluJET anadolu-jet
			status: 'Delayed',
			date: new Date(),
			origin: 'Ankara',
			flightNumber: 'And-200',
		},
	];

	return (
		<div>
			{data.map((item) => {
				return (
					<div>
						{item.companyName} /
						<Link to={`/${item.companySlug}/arrivals/${item.flightNumber}`}>
							{item.flightNumber}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default ArrivalsPage;
