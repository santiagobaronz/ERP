import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../../components/SettingsProvider';

import { RxDashboard, RxChatBubble } from "react-icons/rx";
import { IoIosStats, IoMdNotifications, IoMdCalendar } from "react-icons/io";

export const Sidebar = () => {

	const auth = useAuthUser();
	const settings = useSettings();
	const location = useLocation();

	return (
		<div className='flex flex-col w-72 min-h-screen bg-bg-black p-6'>

			<div className='flex gap-x-4 items-center border-bottom-divisor pb-5'>
				<img src="/assets/logo-icon-white.png" alt="Logo de la empresa" className='w-14 p-3 bg-black rounded-xl' />
				<div>
					<p className='text-white font-medium'>{settings.NOMBRE_EMPRESA}</p>
					<p className='capitalize text-gray'>{auth().NOMBRES.toLowerCase()}</p>
				</div>
			</div>
			<div className='mt-5'>
				<ul>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<RxDashboard className='text-lg' />
							<p className='ml-4'>Dashboard</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<IoIosStats className='text-lg' />
							<p className='ml-4'>Overview</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<RxChatBubble className='text-lg' />
							<p className='ml-4'>Chat</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<IoMdNotifications className='text-lg' />
							<p className='ml-4'>Notifications</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<IoMdCalendar className='text-lg' />
							<p className='ml-4'>Meetings</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<RxDashboard className='text-lg' />
							<p className='ml-4'>Tasks</p>
						</Link>
					</li>
					<li className='mb-2'>
						<Link className={`flex items-center h-12 p-3 font-medium rounded-md hover:bg-switchColor hover:text-white 
						${location.pathname === '/dashboard' ? 'text-white bg-switchColor' : 'text-gray'}`}>
							<RxDashboard className='text-lg' />
							<p className='ml-4'>Settings</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
