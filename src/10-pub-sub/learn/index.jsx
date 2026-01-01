import PublisherCartBtn from "./components/Publisher-Cart-Btn";
import SubscriberCart from "./components/Subscriber-Cart";
import CodeViewer from "./components/CodeViewer";
import {
  codeSnippetForCrossTabChannel,
  codeSnippetForBroadcast,
  codeSnippetForEventBus,
  codeSnippetForUseEvent,
} from "./const";

const PubSubLearn = () => {
  return (
    <div className="p-4 container mx-auto space-y-5">
      <div className="flex gap-4 justify-center flex-wrap">
        <SubscriberCart />

        <div className="space-y-2 text-center">
          <PublisherCartBtn />

          <a
            target="_blank"
            rel="noreferrer"
            href="/day-10-learn"
            className="text-center text-slate-500/80 hover:underline hover:text-slate-400 duration-300 underline-offset-6 cursor-pointer"
          >
            Open same-page in new tab - to see the button click effect & log
          </a>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="space-y-4">
          <CodeViewer codeSnippet={codeSnippetForUseEvent} icon="🪝" />
          <CodeViewer codeSnippet={codeSnippetForCrossTabChannel} icon="📢" />
          <CodeViewer codeSnippet={codeSnippetForBroadcast} icon="📡Log-" />
        </div>

        <CodeViewer codeSnippet={codeSnippetForEventBus} icon="📅" />
      </div>
    </div>
  );
};

export default PubSubLearn;
