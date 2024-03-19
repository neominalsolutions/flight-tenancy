import React, { useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';
import { useLocation, useParams } from 'react-router-dom';

function ArrivalDetailPage() {
	const { layoutSetting } = useContext(LayoutContext);
	const params = useParams(); // routtan okunan dinamik parametreleri verir. Flight Numbe rbilgisini okuyacağız.
	const location = useLocation(); // butun route bilgisini okur

	console.log('params', params);
	console.log('location', location);

	return (
		<div>
			<div>CompanyName: {layoutSetting.companyName}</div>
			<div>Fligth Number: {params.flightNumber}</div>
		</div>
	);
}

export default ArrivalDetailPage;
