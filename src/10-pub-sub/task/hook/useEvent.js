import eventBus from "../service/eventBus";
import { useEffect } from "react";

const useEvent = (eventName, handler) => {

    useEffect(() => {
        const unsubscribe = eventBus.subscribe(eventName, handler);
        return () => unsubscribe(); // cleanup on unmount

    }, [eventName, handler]); // re-subscribe only if event or handler changes
}

export default useEvent;