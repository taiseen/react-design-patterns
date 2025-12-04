import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [localValue, setLocalValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);

            if (value) {
                // if value present, return that value...
                return JSON.parse(value);
            } else {
                // if no value is available, set passing default-value...
                window.localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const updateLocalValue = (valueOrFunction) => {
        let newValue;

        if (typeof valueOrFunction === "function") {
            newValue = valueOrFunction(localValue);
        } else {
            newValue = valueOrFunction;
        }

        window.localStorage.setItem(key, JSON.stringify(newValue));
        setLocalValue(newValue);
    };

    return [localValue, updateLocalValue];
};

export default useLocalStorage;
