import { useState, useEffect, Suspense } from "react";
import NavigateBtn from "./components/NavigateBtn";
import useUrlSlug from "./hooks/useUrlSlug";
import Loading from "./components/Loading";
import RootContainerLayout from "./layout";
import NoDemo from "./components/NoDemo";
import componentList from "./db";

const RUNNING_TASK_IDX = componentList.length - 1;

const App = () => {
  const slug = useUrlSlug();

  // Choose which index to show || render in UI
  const [activeIndex, setActiveIndex] = useState(RUNNING_TASK_IDX);

  const isValidIndex =
    componentList.length > 0 &&
    activeIndex >= 0 &&
    activeIndex < componentList.length;

  const activeComponent = isValidIndex ? componentList[activeIndex] : null;

  // 🔍 Find matching component by slug
  useEffect(() => {
    if (slug) {
      const targetId = componentList.find((item) =>
        item.id.toLowerCase().includes(slug)
      );

      if (targetId) {
        const index = componentList.indexOf(targetId);
        setActiveIndex(index);
        return;
      }
    }

    // Fallback: invalid or missing slug → show latest task
    setActiveIndex(RUNNING_TASK_IDX);
  }, [slug]);

  return (
    <main className="bg-slate-800 text-slate-300">
      <NavigateBtn
        onIndexSelect={setActiveIndex}
        currentTaskIdx={activeIndex}
      />

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
