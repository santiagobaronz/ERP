import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { Navigate } from 'react-router-dom';
import { useSettings } from '../../components/SettingsProvider';

export const Auth = () => {

	const settings = useSettings();

	const signIn = useSignIn()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAuthenticated, setisAuthenticated] = useState(useIsAuthenticated())

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const handleLogin = async () => {

		try {
			const response = await axios.post(`${settings.URL_EMPRESA}/auth/login`, {
				email: email,
				password: password,
			});

			const TOKEN = response.data

			await axios.get(`${settings.URL_EMPRESA}/auth/userinfo`, {
				headers: {
					'Authorization': `Bearer ${TOKEN}`
				}
			})
			.then(response => {
				if (signIn({ token: TOKEN, tokenType: 'Bearer',
					authState: response.data, expiresIn: 1440})){
						setisAuthenticated(true)
				} else {
					alert("Ha ocurrido un error, intentelo de nuevo") 
				}
			})
			.catch(error => {
				console.error('Error:', error);
			});
		} catch (error) {
			console.error(error);
		}
	}

	if (isAuthenticated) {
		return <Navigate to={'/'} />
	}

	return (
		<div>
			<h1>Iniciar Sesión</h1>

			<img src="/assets/Completo2.png" alt="" />
			<form>
				<label>
					Correo Electrónico:
					<input type="email" value={email} onChange={handleEmailChange} />
				</label>
				<br />
				<label>
					Contraseña:
					<input type="password" value={password} onChange={handlePasswordChange} />
				</label>
				<br />
				<button type="button" onClick={handleLogin}>Iniciar Sesión</button>
			</form>
		</div>
	);
}
