import React from 'react'
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../../components/SettingsProvider';

import { RxDashboard, RxChatBubble, RxExit, RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosStats, IoMdNotifications, IoMdCalendar, IoIosColorPalette } from "react-icons/io";
import { updateUser } from '../../hooks/UpdateUser';
import { useColorMode } from '../../components/ColorProvider';

export const Sidebar = () => {

	const auth = useAuthUser();
	const signOut = useSignOut();

	const settings = useSettings();
	const location = useLocation();

	const { toggleDarkMode } = useColorMode();

	const handleToggleColor = () => {
		toggleDarkMode();
	}

	return (
		<div className='flex flex-col w-64 min-h-screen bg-bg-white-secondary dark:bg-bg-dark-secondary p-6'>
			<div className='flex gap-x-4 items-center pb-5'>
				<img src="/assets/logo-icon-white.png" alt="Logo de la empresa" className='w-14 p-3 dark:bg-black bg-gray-white rounded-xl' />
				<div>
					<p className='text-black dark:text-white font-medium'>{settings.NOMBRE_EMPRESA}</p>
					<p className='capitalize dark:text-gray-dark text-gray-white text-sm'>{auth().NOMBRES.toLowerCase()}</p>
				</div>
			</div>
			<div className='flex flex-col justify-between flex-grow'>
				<ul>
					<li className='mb-1'>
						<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<RxDashboard className='text-base' />
							<p className='ml-4 text-sm'>Dashboard</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<IoIosStats className='text-base' />
							<p className='ml-4 text-sm'>Overview</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<RxChatBubble className='text-base' />
							<p className='ml-4 text-sm'>Chat</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<IoMdNotifications className='text-base' />
							<p className='ml-4 text-sm'>Notifications</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<IoMdCalendar className='text-base' />
							<p className='ml-4 text-sm'>Meetings</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<RxDashboard className='text-base' />
							<p className='ml-4 text-sm'>Tasks</p>
						</Link>
					</li>
					<li className='mb-1'>
					<Link className={`flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black 
						${location.pathname === '/#' ? 'dark:text-white text-black dark:bg-bg-dark-hover bg-bg-white-hover' : 'dark:text-gray-dark text-gray-white'}`}>
							<RxDashboard className='text-base' />
							<p className='ml-4 text-sm'>Settings</p>
						</Link>
					</li>
				</ul>
				<ul>
					<li className='mb-1' onClick={handleToggleColor}>
						<Link className='flex items-center h-10 p-3 font-medium rounded-md dark:hover:bg-bg-dark-hover hover:bg-bg-white-hover dark:hover:text-white hover:text-black dark:text-gray-dark text-gray-white'>
							<IoIosColorPalette className='text-base' />
							<p className='ml-4 text-sm'>Modo claro</p>
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
