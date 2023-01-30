import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { accessToken } from '../spotify';

export const TokenContext = React.createContext<string | null | undefined>(null);

export const TokenProvider = ({ children }: { children: ReactNode }) => {
	const [token, setToken] = useState<string | null>();

	useEffect(() => {
		setToken(accessToken!);
	}, []);

	return <TokenContext.Provider value={token}>{children}</TokenContext.Provider>;
};

export const useAuth = () => useContext(TokenContext);
