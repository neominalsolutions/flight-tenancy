import React from 'react';

type MenuComponentProps = {
	layoutSetting: any;
};

function MenuComponent({ layoutSetting }: MenuComponentProps) {
	return (
		<div
			style={{
				color: layoutSetting?.foreColor,
				position: 'fixed',
				minHeight: '50px',
				background: layoutSetting.menuBackColor,
				minWidth: '100%',
				top: 0,
				padding: '1rem',
			}}
		>
			{layoutSetting && (
				<img
					width={200}
					height={100}
					src={layoutSetting.logoUrl}
					alt={layoutSetting.companyName}
				/>
			)}
			<h1>{layoutSetting?.companyName}</h1>
		</div>
	);
}

export default MenuComponent;
