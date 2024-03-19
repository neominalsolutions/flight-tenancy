import React, { createContext, useState } from 'react';

export const LayoutContext = createContext<any>(null);

const LayoutProvider = ({ children }: any) => {
	const [layoutSetting, setLayoutSettings] = useState<any>({});

	const values = {
		layoutSetting,
		setLayoutSettings,
	};

	return (
		<LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
	);
};

export default LayoutProvider;
