const RootContainerLayout = ({
	description = "N/A",
	title = "N/A",
	children,
}) => {
	return (
		<div className="min-h-screen! flex flex-col">
			<header className="text-center p-4! bg-slate-900/50 border-b! border-slate-700">
				<h1 className="text-2xl! font-bold text-slate-300">{title}</h1>
				<p className="text-xl! mt-2! text-slate-400 max-w-5xl! mx-auto!">{description}</p>
			</header>

			<main className="flex-1! p-0.5! overflow-auto!">{children}</main>
		</div>
	);
};

export default RootContainerLayout;
