import MouseTrackerWithChildren from "./pattern/MouseTrackerWithChildren";
import MouseTrackerWithRender from "./pattern/MouseTrackerWithRender";
import Holder from "./components/Holder";

const RenderPropsPatternLearn = () => {
  return (
    <div className="p-4 grid grid-cols-2 gap-4 flex-wrap h-full">
      {/* Parent → call this component... */}
      <MouseTrackerWithRender
        // Render JSX
        render={(location) => <Holder pos={location} text="🚗 Car" />}
      />

      <MouseTrackerWithRender
        // Render JSX
        render={(location) => <Holder pos={location} text="🏍️ Bike" />}
      />

      <MouseTrackerWithChildren>
        {/* Render JSX */}
        {(positions) => <Holder pos={positions} text="👨 Human" />}
      </MouseTrackerWithChildren>

      <MouseTrackerWithChildren>
        {/* Render JSX */}
        {(positions) => <Holder pos={positions} text="✈️ Plane" />}
      </MouseTrackerWithChildren>
    </div>
  );
};

export default RenderPropsPatternLearn;
