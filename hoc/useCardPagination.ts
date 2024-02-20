import { IPlayerCard } from '@/types/home/IPlayer';
import { useState } from 'react';

const useCardPagination = (initialStartIndex: number, maxVisibleCards: number, playerList: IPlayerCard[]) => {
    const [currentStartIndex, setCurrentStartIndex] = useState<number>(initialStartIndex);

    const handleLeftClick = (): void => {
        setCurrentStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleRightClick = (): void => {
        setCurrentStartIndex((prevIndex) =>
            Math.min(prevIndex + 1, playerList.length - maxVisibleCards)
        );
    };

    const visibleCards: IPlayerCard[] = playerList.slice(
        currentStartIndex,
        currentStartIndex + maxVisibleCards
    );

    return {
        currentStartIndex,
        handleLeftClick,
        handleRightClick,
        visibleCards,
    };
};

export default useCardPagination;
