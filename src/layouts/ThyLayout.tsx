import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContext } from '../contexts/LayoutContext';
import configs from './LayoutConfig.json';
import MenuComponent from '../components/MenuComponent';

function ThyLayout() {
	const { setLayoutSettings, layoutSetting } = useContext(LayoutContext);

	// tek sefere mahsus layout içerisindeki tüm sayfaların bu layout settings'i alaması için client state set ettik. arttık layout context'e giden sayfalar. bu settingslere direkt olarak erişebilecek.
	useEffect(() => {
		// client state aktardık.
		setLayoutSettings(configs['thy']);
	}, []);

	useEffect(() => {
		console.log('layout-settings', layoutSetting);
	}, [layoutSetting]);

	return (
		<div>
			<MenuComponent layoutSetting={layoutSetting} />
			<div style={{ marginTop: '250px' }}>
				<Outlet />
			</div>
		</div>
	);
}

export default ThyLayout;
