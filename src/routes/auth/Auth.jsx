import axios from 'axios';
import React, { useState } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'


export const Auth = () => {

	const isAuthenticated = useIsAuthenticated()
	const signIn = useSignIn()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const handleLogin = async () => {

		try {
			const response = await axios.post('http://localhost:3001/api/login', {
				email: email,
				password: password,
			});

			const token = response.data.token;

			if (signIn({
				token: token,
				tokenType: 'Bearer',
				authState: response.data.user,
				expiresIn: 120
			  })) {
				
				console.log(isAuthenticated())

			  } else {
				alert("Error Occoured. Try Again")
			  }
		} catch (error) {
			console.error(error);
		}
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
