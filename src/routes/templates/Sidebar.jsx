import React from 'react'
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../../components/SettingsProvider';

import { RxExit, RxQuestionMarkCircled, RxPerson,
	RxLayers, RxMixerHorizontal, RxGear } from "react-icons/rx";

import { IoIosStats,  IoIosColorPalette } from "react-icons/io";

import { BsCashCoin, BsCurrencyDollar,
	BsFillBasket3Fill, BsFillBoxSeamFill,
	BsFillPersonLinesFill, BsFillPersonVcardFill,
	BsListUl, BsPeopleFill, BsViewList } from "react-icons/bs";

import { useColorMode } from '../../components/ColorProvider';

export const Sidebar = () => {

	const auth = useAuthUser();
	const signOut = useSignOut();

	const settings = useSettings();
	const location = useLocation();

	const { darkMode, toggleDarkMode } = useColorMode();

	const handleToggleColor = () => {
		toggleDarkMode();
	}

	return (
		<div className='flex flex-col w-72 min-h-screen bg-bg-white-secondary dark:bg-bg-dark-secondary p-6 pt-8'>
			<div className='flex gap-x-4 items-center pb-5'>
				<img src="/assets/logo-icon-white.png" alt="Logo de la empresa" className='w-14 p-3 dark:bg-black bg-gray-white rounded-xl' />
				<div>
					<p className='text-black dark:text-white font-medium'>{settings.NOMBRE_EMPRESA}</p>
					<p className='capitalize dark:text-gray-dark text-gray-white text-sm'>{auth().NOMBRES.toLowerCase()}</p>
				</div>
			</div>
			<div className='flex flex-col justify-between flex-grow mt-5'>
				<ul>
					<div>
						<h2 className='text-gray-white dark:text-gray-dark text-sm font-medium mb-2 select-none'>Información personal</h2>

						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<IoIosStats className='text-base' />
								<p className='ml-4 text-sm'>Mis estadísticas</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<RxPerson className='text-base' />
								<p className='ml-4 text-sm'>Mi perfil</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<RxLayers className='text-base' />
								<p className='ml-4 text-sm'>Mis pagos</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<RxMixerHorizontal className='text-base' />
								<p className='ml-4 text-sm'>Configuración</p>
							</Link>
						</li>
					</div>

					<div className='border-top-divisor pt-6 mt-6'>
						<h2 className='text-gray-white dark:text-gray-dark text-sm font-medium mb-2 select-none'>Gestión de información</h2>

						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<IoIosStats className='text-base' />
								<p className='ml-4 text-sm'>Estadisticas</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsFillBoxSeamFill className='text-base' />
								<p className='ml-4 text-sm'>Inventario</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsCurrencyDollar className='text-base' />
								<p className='ml-4 text-sm'>Ventas</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsListUl className='text-base' />
								<p className='ml-4 text-sm'>Categorias</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsFillBasket3Fill className='text-base' />
								<p className='ml-4 text-sm'>Productos</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsFillPersonVcardFill className='text-base' />
								<p className='ml-4 text-sm'>Clientes</p>
							</Link>
						</li>
					</div>

					<div className='border-top-divisor pt-6 mt-6'>
						<h2 className='text-gray-white dark:text-gray-dark text-sm font-medium mb-2 select-none'>Control de proveedores</h2>

						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsFillPersonLinesFill className='text-base' />
								<p className='ml-4 text-sm'>Proveedores</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsViewList className='text-base' />
								<p className='ml-4 text-sm'>Lista de pedidos</p>
							</Link>
						</li>
					</div>

					<div className='border-top-divisor pt-6 mt-6'>
						<h2 className='text-gray-white dark:text-gray-dark text-sm font-medium mb-2 select-none'>Gestión administrativa</h2>

						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsPeopleFill className='text-base' />
								<p className='ml-4 text-sm'>Control de empleados</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<BsCashCoin className='text-base' />
								<p className='ml-4 text-sm'>Gestión de nomina</p>
							</Link>
						</li>
						<li className='mb-1'>
							<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
								${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
								<RxGear className='text-base' />
								<p className='ml-4 text-sm'>Ajustes generales</p>
							</Link>
						</li>
					</div>






				</ul>
				<ul className='mt-20'>
					<li className='mb-1' onClick={handleToggleColor}>
						<Link className='flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black dark:text-gray-dark text-gray-white'>
							<IoIosColorPalette className='text-base' />
							<p className='ml-4 text-sm'>Modo {darkMode ? 'claro' : 'oscuro'}</p>
						</Link>
					</li>
					<li className='mb-1'>
						<Link className='flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black dark:text-gray-dark text-gray-white'>
							<RxQuestionMarkCircled className='text-base' />
							<p className='ml-4 text-sm'>Centro de ayuda</p>
						</Link>
					</li>
					<li className='mb-1' onClick={() => signOut()}>
						<Link className='flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black dark:text-gray-dark text-gray-white'>
							<RxExit className='text-base' />
							<p className='ml-4 text-sm'>Cerrar sesión</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
