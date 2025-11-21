const NoDemo = () => {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-2 text-slate-400">
			<p className="text-lg">⚠️ No demo component available.</p>

			<p className="mt-2 text-sm">
				Uncomment entries in{" "}
				<code className="bg-orange-400 px-1 rounded">./db.js</code>
			</p>
		</div>
	);
};

export default NoDemo;
