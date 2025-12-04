import { useState, useCallback } from 'react';

const useClipboard = () => {
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState(null);

    const copy = useCallback(async (text) => {
        if (!text) {
            setError('Nothing to copy');
            return;
        }

        if (typeof navigator === 'undefined' || !navigator.clipboard) {
            setError('Clipboard API not supported');
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setError(null);

            // auto-reset copied status after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            setError(err.message || 'Failed to copy text');
            setCopied(false);
        }
    }, []);

    return { copy, copied, error };
}

export default useClipboard;