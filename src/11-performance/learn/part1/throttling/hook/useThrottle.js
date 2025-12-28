import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay = 300) => {

    const [throttledValue, setThrottledValue] = useState(value);

    const lastExecuted = useRef(Date.now());

    useEffect(() => {

        const handler = setTimeout(() => {

            const now = Date.now();

            if (now - lastExecuted.current >= delay) {
                console.log("Do DOM Manipulation");

                setThrottledValue(value);

                lastExecuted.current = now;
            }

        }, delay - (Date.now() - lastExecuted.current));

        return () => clearTimeout(handler);

    }, [value, delay]);

    return throttledValue;
}

export default useThrottle;