import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './ErrorPage';

import './index.css'

import { Root } from './Root';
import { Auth } from './routes/auth/Auth';

import { AuthProvider, RequireAuth } from 'react-auth-kit';
import { Dashboard } from './routes/home/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/dashboard',
				element: <RequireAuth loginPath='/ingreso'>
					<Dashboard/>
				</RequireAuth>
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