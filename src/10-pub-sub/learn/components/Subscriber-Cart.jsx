import { codeSnippetForSub, eventName } from "../const";
import { useState } from "react";
import useEvent from "../hook/useEvent";
import CodeViewer from "./CodeViewer";

const SubscriberCart = () => {
  const [items, setItems] = useState([]);

  function handler(data) {
    console.log("handler() :- ", data);

    setItems((prev) => [...prev, data]);
  }

  useEvent(eventName.ADD_TO_CART, handler);

  return (
    <div className="flex flex-col gap-3 h-[600px] border rounded border-slate-600 p-4">
      <h2 className="text-2xl p-2 rounded border border-slate-600 text-center">
        🔔 Subscriber
      </h2>

      <CodeViewer codeSnippet={codeSnippetForSub} icon="🔔" />

      <p className="text-2xl text-center">🛒 {items.length}</p>

      <ul className="flex-1 border border-slate-700 rounded space-y-1 overflow-y-auto pubSubScrollbar">
        {items.map((item) => (
          <li key={item.id} className="text-center">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriberCart;
