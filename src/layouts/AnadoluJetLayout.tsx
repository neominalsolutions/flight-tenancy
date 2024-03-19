import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContext } from '../contexts/LayoutContext';
import configs from './LayoutConfig.json';
import MenuComponent from '../components/MenuComponent';

function AnadoluJetLayout() {
	const { setLayoutSettings, layoutSetting } = useContext(LayoutContext);

	useEffect(() => {
		setLayoutSettings(configs['anadolu-jet']);
	}, []);

	return (
		<div>
			<MenuComponent layoutSetting={layoutSetting} />
			<div style={{ marginTop: '250px' }}>
				<Outlet />
			</div>
		</div>
	);
}

// /<customer_name>/
export default AnadoluJetLayout;
