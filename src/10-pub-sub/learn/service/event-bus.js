import crossTabChannel from "./broadcast";

const eventList = new Map();

const eventBus = {

    // Publish / Emit an event
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

    // Subscribe to an event
    subscribe(eventName, handler) {

        if (!eventList.has(eventName)) {

            eventList.set(eventName, new Set());
        }

        // handler STORED here ⬇️⬇️⬇️⬇️⬇️⬇️
        eventList.get(eventName).add(handler);

        return () => eventList.get(eventName).delete(handler);
    },
}

export default eventBus;