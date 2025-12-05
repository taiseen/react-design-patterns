import { useState, useEffect } from 'react';

const useUrlSlug = () => {
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const path = window.location.pathname;

        // Remove leading slash and decode (in case of special chars)
        const cleanSlug = path.substring(1).toLowerCase();

        // Set slug
        setSlug(cleanSlug || null);
    }, []);

    return slug;
};

export default useUrlSlug;