import eventBus from "./event-bus";

const crossTabChannel = new BroadcastChannel("app-cart-events");

crossTabChannel.onmessage = (event) => {

    const { eventName, payload } = event.data;

    // re-publish locally without re-broadcasting
    eventBus.publish(eventName, payload, { broadcast: false });

    console.log('crossTabChannel.onmessage() :- ', { event });
};

export default crossTabChannel;