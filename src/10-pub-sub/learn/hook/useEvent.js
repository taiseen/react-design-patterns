import eventBus from "../service/event-bus";
import { useEffect } from "react";

const useEvent = (eventName, handler) => {

    useEffect(() => {

        // subscribe & its return the unSubscribe function()
        // & registering (stored) your handler with the event-bus.
        const unSubscribe = eventBus.subscribe(eventName, handler);

        return () => unSubscribe(); // cleanup on unmount

    }, [eventName, handler]);

}

export default useEvent