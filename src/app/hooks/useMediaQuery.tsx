import { useState, useEffect } from "react"

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        // Triggered at the first client-side load and if query changes
        function handleChange() {
            setMatches(matchMedia.matches)
        }
        handleChange();

        matchMedia.addEventListener('change', handleChange)
        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }

    }, [query])

    return matches
}

