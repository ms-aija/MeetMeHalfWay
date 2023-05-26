//useDebounce hook typescript
import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay: number) {
    console.log('useDebounce called with value: ',value)
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const debounceHandler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(debounceHandler);
        };
    }, [value, delay]);
    console.log('useDebounce returning: ',debouncedValue)
    return debouncedValue;
}