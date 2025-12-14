import eventBus from "./eventBus";

class BroadcastChannelManager {

    constructor(channelName = "app-notification-events") {

        this.channel = new BroadcastChannel(channelName);

        this.channel.onmessage = this.handleBroadCastMessage.bind(this);
    }

    handleBroadCastMessage(event) {
        const { eventName, payload } = event.data;

        eventBus.publish(eventName, payload, { broadcast: false });
    }

    postMessage(message) {
        this.channel.postMessage(message);
    }

    close() {
        this.channel.close();
    }
}

export default new BroadcastChannelManager();