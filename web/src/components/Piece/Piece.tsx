import React from 'react'
import piecesIcons from '../../data/iconsMap'

interface PieceProps {
    piece: string
}

const Piece: React.FC<PieceProps> = ({ piece }) => {
    return (
        <div className="piece-icon-container">
            {piecesIcons[piece]}
        </div>
    )
}

export default Piece
