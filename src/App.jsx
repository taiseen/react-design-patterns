import NavigateBtn from "./components/NavigateBtn";
import Loading from "./components/Loading";
import RootContainerLayout from "./layout";
import NoDemo from "./components/NoDemo";
import componentList from "./db";
import { useState } from "react";
import { Suspense } from "react";

const App = () => {
	// Choose which index to show || render in UI
	const [activeIndex, setActiveIndex] = useState(componentList.length - 1);

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
					<Suspense fallback={<Loading />}>
						<activeComponent.component {...activeComponent.props} />
					</Suspense>
				</RootContainerLayout>
			) : (
				<NoDemo />
			)}
		</main>
	);
};

export default App;
