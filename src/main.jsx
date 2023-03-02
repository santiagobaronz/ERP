import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './ErrorPage';

import './index.css'

import { Root } from './Root';
import { Auth } from './routes/auth/Auth';

import { AuthProvider, RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import { Dashboard } from './routes/home/Dashboard';

const PrivateRoute = ({ Component }) => {
	const isAuthenticated = useIsAuthenticated();
	const auth = isAuthenticated();
	return auth ? <Component /> : <Navigate to="/ingreso" />;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute Component={Root} />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/dashboard',
				element:<PrivateRoute Component={Dashboard} />
			},
		]
	},
	{
		path: '/ingreso',
		element: <Auth />,
		errorElement: <ErrorPage />,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider authType={'cookie'}
			authName={'_auth'}
			cookieDomain={window.location.hostname}
			cookieSecure={window.location.protocol === "https:"}>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>,
)