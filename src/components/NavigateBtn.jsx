import componentList from "../db";

const NavigateBtn = ({ onIndexSelect }) => {
	return (
		<div className="fixed top-1/2 translate-y-1/2 right-2 flex gap-2.5 flex-col bg-slate-900/80 p-2! rounded border border-slate-700/80 shadow-lg">
			{componentList.map((obj, idx) => (
				<button
					type="button"
					key={obj.id}
					onClick={() => onIndexSelect(idx)}
					className="px-2! py-0.5! bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition-colors duration-200 text-left"
				>
					{obj.id.charAt(0).toUpperCase() + obj.id.slice(1)}
				</button>
			))}
		</div>
	);
};

export default NavigateBtn;
