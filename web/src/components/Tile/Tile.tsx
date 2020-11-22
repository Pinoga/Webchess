import React from 'react'
import { IBoardDisplayTile } from '../../Pages/Main/App'

interface TileProps extends IBoardDisplayTile {
    id: number;
    style: string;
    onClick: () => any;
}

const Tile: React.FC<TileProps> = (p) => {

    return (
        <div
            className={`tile ${p.style}`}
            key={p.id}
            onClick={p.onClick}
        >
            {p.id}
            {p.children}
        </div>        
    )
}

export default Tile