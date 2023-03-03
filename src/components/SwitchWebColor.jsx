import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';

function SwitchWebColor() {
	const [modoOscuro, setModoOscuro] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', modoOscuro);
	}, [modoOscuro]);

	return (
		<div>
			<Switch.Group>
				<div className="flex items-center">
					<Switch.Label className="mr-4">Modo oscuro</Switch.Label>
					<Switch checked={modoOscuro} onChange={setModoOscuro}
						className={`${modoOscuro ? 'bg-blue-600' : 'bg-gray-200'
							} relative inline-flex items-center h-6 rounded-full w-11`}>
						<span className="sr-only">Cambiar modo</span>
						<span
							className={`${modoOscuro ? 'translate-x-6' : 'translate-x-1'
								} inline-block w-4 h-4 transform bg-white rounded-full`}/>
					</Switch>
					<Switch.Label className="ml-4">Modo claro</Switch.Label>
				</div>
			</Switch.Group>
		</div>
	);
}

export default SwitchWebColor;