import { useState, useEffect } from 'react';

function useMaxVisibleCards() {
    const [maxVisibleCards, setMaxVisibleCards] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 850) {
                setMaxVisibleCards(3);
            } else if (width < 1150) {
                setMaxVisibleCards(4);
            } else if (width < 1300) {
                setMaxVisibleCards(5);
            } else {
                setMaxVisibleCards(6);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return maxVisibleCards;
}

export default useMaxVisibleCards;
