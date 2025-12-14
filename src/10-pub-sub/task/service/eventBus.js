import crossTabChannel from "./broadcast";

class EventBus {

    constructor() {
        this.handlers = new Map();
    }

    subscribe(eventName, handler) {

        if (!this.handlers.has(eventName)) {

            this.handlers.set(eventName, new Set());
        }

        this.handlers.get(eventName).add(handler);

        return () => this.handlers.get(eventName)?.delete(handler);
    }

    publish(eventName, payload, { broadcast = true } = {}) {

        const handlers = this.handlers.get(eventName);

        if (handlers) {

            handlers.forEach((h) => h(payload));
        }

        if (broadcast) {
            crossTabChannel.postMessage({ eventName, payload });
        }
    }
}

// Singleton export
export default new EventBus();