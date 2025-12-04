import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
    useEffect(() => {
        if (!ref || !ref.current) return;

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        };

        // Attach/Mount listener
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside); // for mobile

        return () => {
            // Detach/Unmount listener
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref, callback]);
}

export default useClickOutside