import { codeSnippetForPub, eventName } from "../const";
import eventBus from "../service/event-bus";
import CodeViewer from "./CodeViewer";

const generateId = () => crypto.randomUUID();

const products = [
  { id: generateId(), name: "Bed" },
  { id: generateId(), name: "Soap" },
  { id: generateId(), name: "Towel" },
  { id: generateId(), name: "Light" },
  { id: generateId(), name: "Mirror" },
];

const PublisherCartBtn = () => {
  function addToCartHandler() {
    const randomIndex = Math.floor(Math.random() * products.length);

    const product = products[randomIndex];

    const data = {
      id: product.id,
      name: product.name,
    };

    eventBus.publish(eventName.ADD_TO_CART, data);
  }

  return (
    <div className="flex flex-col gap-3 border rounded border-slate-600 p-4 self-start">
      <h2 className="text-2xl p-2 text-center rounded border border-slate-600">
        ✍️ Publisher
      </h2>

      <CodeViewer codeSnippet={codeSnippetForPub} icon="✍️" />

      <button
        className="bg-emerald-600 rounded py-1 px-3 cursor-pointer text-xl text-slate-200"
        onClick={addToCartHandler}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PublisherCartBtn;
