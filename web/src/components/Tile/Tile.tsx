import React from 'react'
import { BoardDisplayTile } from '../../Pages/Main/App'

interface TileProps extends BoardDisplayTile {
    id: number;
    selected: string;
    hover: string;
    highlighted: string;
    color: string;
    onClick: () => any;
    onMouseEnter: () => any;
    onMouseLeave: () => any;
}

const Tile: React.FC<TileProps> = (p) => {


    return (
        <div
            className={`tile ${p.color} ${p.selected} ${p.hover} ${p.highlighted}`}
            key={p.id}
            onClick={p.onClick}
            onMouseEnter={p.onMouseEnter}
            onMouseLeave={p.onMouseLeave}
        >
            {p.id}
            {p.children}
        </div>        
    )
}

export default Tile