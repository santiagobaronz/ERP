import axios from 'axios';
import React, { useState } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { Link, Navigate } from 'react-router-dom';
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

			const TOKEN = response.data;

			await axios.get(`${settings.URL_EMPRESA}/auth/userinfo`, {
				headers: {
					'Authorization': `Bearer ${TOKEN}`
				}
			})
				.then(response => {
					if (signIn({
						token: TOKEN, tokenType: 'Bearer',
						authState: response.data, expiresIn: 1440
					})) {
						setisAuthenticated(true);
					} else {
						alert("Ha ocurrido un error, intentelo de nuevo");
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
		<div className='w-full min-h-screen flex justify-center items-center container p-10'>
			<div className='w-full flex flex-wrap'>
				<div className="lg:w-1/2 lg:h-auto w-full h-52 relative bg-white lg:rounded-l-2xl max-lg:rounded-xl lg:order-1 order-2 max-lg:mt-5">
					<div className="absolute inset-0 rounded-2xl m-4"
						style={{
							backgroundImage: "url('/assets/bg-login.png')",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center"
						}} />
					<div className="z-10 absolute bottom-12 left-12">
						<img src="/assets/poweredby-white.png" className='w-2/5 max-md:w-3/5' id='imgLogo' />
					</div>
				</div>
				<div className='lg:w-1/2 p-20 max-sm:p-14 bg-white rounded-r-2xl max-lg:rounded-xl lg:order-2 order-1'>
					<img src="/assets/logo-empresa.png" alt="Logo empresa" className='w-1/2 mb-10' />
					<h1 className='text-2xl font-semibold mb-3'>Iniciar sesión</h1>
					<p className='mb-8 text-bg-black'>A continuación ingresa los datos requeridos para acceder con tu perfil al sistema de gestión.</p>
					<form>
						<label>
							<p className='text-black font-normal'>Correo electrónico</p>
							<input className='w-full h-12  pl-5 rounded-md mb-5 mt-2 border-form'
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder='Ingresa aquí tu correo electrónico'
								autoComplete='username' />
						</label>
						<br />
						<label>
							<p className='text-black font-normal'>Contraseña</p>
							<input className='w-full h-12  pl-5 rounded-md mb-5 mt-2 border-form'
								type="password"
								value={password}
								onChange={handlePasswordChange}
								placeholder='Ingresa aquí tu contraseña'
								autoComplete="current-password" />
						</label>
						<br />
						<button className='w-full bg-green-600 h-14 rounded-md text-white font-medium mb-5' type="button" onClick={handleLogin}>Iniciar Sesión</button>
						<Link to={'/'} className='text-switchColor'><p className='mb-2 font-medium'>¿Olvidaste tu contraseña?</p></Link>
						<Link to={'/'} className='text-switchColor'><p>¿Problemas para ingresar a tu cuenta?</p></Link>
					</form>
				</div>
			</div>
		</div>
	);
}
