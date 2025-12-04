import NavigateBtn from "./components/NavigateBtn";
import Loading from "./components/Loading";
import RootContainerLayout from "./layout";
import NoDemo from "./components/NoDemo";
import componentList from "./db";
import { useState } from "react";
import { Suspense } from "react";

const RUNNING_TASK_IDX = componentList.length - 2

const App = () => {
	// Choose which index to show || render in UI
	const [activeIndex, setActiveIndex] = useState(RUNNING_TASK_IDX);

	const isValidIndex =
		componentList.length > 0 &&
		activeIndex >= 0 &&
		activeIndex < componentList.length;

	const activeComponent = isValidIndex ? componentList[activeIndex] : null;

	return (
		<main className="bg-slate-800 text-slate-300">
			<NavigateBtn onIndexSelect={setActiveIndex} currentTaskIdx={RUNNING_TASK_IDX} />

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
