import React from 'react'

interface TileProps {
    id: number;
    selected: boolean;
    x: number;
    y: number;
    onClick: () => void;
}

const Tile: React.FC<TileProps> = ({id, x, y, onClick, selected, children}) => {

    const getCssTileColor = (x: number, y: number) : string => {
        if ((x % 2 === 0 && y % 2 === 0) || (x % 2 === 1 && y % 2 === 1))
            return 'white'
        return 'black'
    }

    

    return (
        <div
            className={`tile ${getCssTileColor(x, y)}${selected ? ' selected' : ''}`}
            key={id}
            onClick={onClick}
        >
            {children}
        </div>        
    )
}

export default Tile