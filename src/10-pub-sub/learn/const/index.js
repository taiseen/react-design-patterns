export const eventName = {
  ADD_TO_CART: "CART:ADD",
  REMOVE_FROM_CART: 'cart:remove',
};


export const codeSnippetForSub = `const [items, setItems] = useState([]);

function handler(data) {
  setItems((prev) => [...prev, data]);
};

useEvent("CART:ADD", handler);`;


export const codeSnippetForPub = `function addToCartHandler() {
  const data = {
      id: productId, 
      name: productName,
  };
  eventBus.publish("CART:ADD", data);
}`;


export const codeSnippetForUseEvent = `const useEvent = (eventName, handler) => {

    useEffect(() => {
        
        // subscribe & its return the unSubscribe function()
        // & registering (stored) your handler with the event-bus.
        const unSubscribe = eventBus.subscribe(eventName, handler);

        return () => unSubscribe(); // cleanup on unmount

    }, [eventName, handler]);

}

export default useEvent`;


export const codeSnippetForEventBus = `import crossTabChannel from "./broadcast";

const eventList = new Map();

const eventBus = {

    publish(eventName, payload, { broadcast = true } = {}) {

        if (eventList.has(eventName)) {

            const handlers = eventList.get(eventName);

            // each handler CALLED here ⬇️⬇️⬇️⬇️⬇️⬇️
            handlers.forEach(handler => handler(payload));
        }

        // 📢 Broadcast to other tabs (avoid infinite loops)
        if (broadcast) {

            crossTabChannel.postMessage({ eventName, payload });
        }
    },

    subscribe(eventName, handler) {

        if (!eventList.has(eventName)) {

            eventList.set(eventName, new Set());
        }

        // handler STORED here ⬇️⬇️⬇️⬇️⬇️⬇️
        eventList.get(eventName).add(handler);

        return () => eventList.get(eventName).delete(handler);
    },
}

export default eventBus;`;



export const codeSnippetForCrossTabChannel = `import eventBus from "./event-bus";

const crossTabChannel = new BroadcastChannel("app-cart-events");

crossTabChannel.onmessage = (event) => {

    const { eventName, payload } = event.data;

    // re-publish locally without re-broadcasting
    eventBus.publish(eventName, payload, { broadcast: false });

    console.log({ event }); 👇👇👇
};

export default crossTabChannel;`;


export const codeSnippetForBroadcast = `event : MessageEvent
{
  type: "message",
  isTrusted: true,
  bubbles: false,
  cancelBubble: false,
  cancelable: false,
  composed: false,
  currentTarget: null,
  defaultPrevented: false,
  data: {
    eventName: "CART:ADD",
    payload: {
      id: "edc15c55-66b0-4229-813f-0bf603518797",
      name: "Light"
    }
  },
  eventPhase: 0,
  lastEventId: "",
  origin: "http://localhost:7000",
  ports: [],
  returnValue: true,
  source: null,
  srcElement: { // BroadcastChannel
    name: "app-cart-events",
    onmessage: (event) => { 
      /* handler */
      [[FunctionLocation]]: broadcast.js:5 
    },
    onmessageerror: null
  }
  target: { // BroadcastChannel
    name: "app-cart-events",
    onmessage: (event) => { 
      /* handler */
      [[FunctionLocation]]: broadcast.js:5 
    },
    onmessageerror: null
  },
  timeStamp: 7129.400000002235,
  userActivation: null,
}`;