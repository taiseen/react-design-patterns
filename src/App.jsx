import NavigateBtn from "./components/NavigateBtn";
import RootContainerLayout from "./layout";
import NoDemo from "./components/NoDemo";
import componentList from "./db";
import { useState } from "react";

const App = () => {
	// Choose which index to show || render in UI
	const [activeIndex, setActiveIndex] = useState(0);

	const isValidIndex =
		componentList.length > 0 &&
		activeIndex >= 0 &&
		activeIndex < componentList.length;

	const activeComponent = isValidIndex ? componentList[activeIndex] : null;

	return (
		<main className="bg-slate-800 text-slate-300">
			<NavigateBtn onIndexSelect={setActiveIndex} />

			{activeComponent ? (
				<RootContainerLayout
					title={activeComponent.title}
					description={activeComponent.description}
				>
					<activeComponent.component {...activeComponent.props} />
				</RootContainerLayout>
			) : (
				<NoDemo />
			)}
		</main>
	);
};

export default App;
