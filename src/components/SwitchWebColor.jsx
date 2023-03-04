import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';

function SwitchWebColor() {
	const [modoOscuro, setModoOscuro] = useState(true);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', modoOscuro);
	}, [modoOscuro]);

	const handleSwitchClick = () => {
		setModoOscuro(!modoOscuro);
	};

	return (
		<div>
			<Switch.Group>
				<div className="flex items-center">
					<Switch.Label
						className={`${modoOscuro ? 'hidden' : 'block'} mr-4`}
						onClick={handleSwitchClick}
					>
						Modo claro
					</Switch.Label>
					<Switch
						checked={modoOscuro}
						onChange={setModoOscuro}
						className={`${modoOscuro ? 'bg-blue-600' : 'bg-gray-200'
							} relative inline-flex items-center h-6 rounded-full w-11`}
						onClick={handleSwitchClick}
					>
						<span className="sr-only">Cambiar modo</span>
						<span
							className={`${modoOscuro ? 'translate-x-6' : 'translate-x-1'
								} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
					<Switch.Label
						className={`${modoOscuro ? 'block' : 'hidden'} ml-4`}
						onClick={handleSwitchClick}
					>
						Modo oscuro
					</Switch.Label>
				</div>
			</Switch.Group>
		</div>
	);
}

export default SwitchWebColor;
