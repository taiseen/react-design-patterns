import componentList from "../db";
import { useState } from 'react';

const NavigateBtn = ({ onIndexSelect }) => {

	const [isSelected, setIsSelected] = useState('');

	const handleSelect = (id) => {
		onIndexSelect(id);
		setIsSelected(id);
	}

	return (
		<div className="fixed top-1/2 -translate-y-1/2 right-2 flex gap-2.5 flex-col bg-slate-900/80 p-2! rounded border border-slate-700/80 shadow-lg z-50">
			{componentList.map((obj, idx) => (
				<button
					type="button"
					key={obj.id}
					onClick={() => handleSelect(idx)}
					className={`px-2! pt-0.5! pb-1! rounded cursor-pointer transition-colors duration-200 text-left ${isSelected === idx ? 'bg-blue-600' : 'bg-slate-700 hover:bg-blue-500'}`}
				>
					{obj.id}
				</button>
			))}
		</div>
	);
};

export default NavigateBtn;
