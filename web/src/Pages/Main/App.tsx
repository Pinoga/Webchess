import React, { useEffect, useState } from 'react'
import './styles.scss'
import Piece from '../../components/Piece/Piece'
import bc from '../../game/main'
import Tile from '../../components/Tile/Tile'


export interface BoardDisplayTile {
    hover: string;
    selected: string;
    highlighted: string;
    id: number;
    color: string;
}

function App() {
    const board = bc.board
    const [side, setSide] = useState<number>(1)
    const [BoardDisplay, setBoardDisplay] = useState<BoardDisplayTile[]>([]) 
    const [selected, setSelected] = useState<number | null>(null)
    const [hover, setHover] = useState<string | null>(null)
    const [highlighted, setHighlighted] = useState<string | null>(null)
    
    useEffect(() => {
        // Initialize display board
        let colors = ['black', 'white']
        let currentId = 0
        let initialDisplay: BoardDisplayTile = {hover: '', selected: '', highlighted: '', id: 0, color: ''}
        let boardDisplay: BoardDisplayTile[] = []
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                boardDisplay[8*y + x] = {
                    ...initialDisplay, 
                    id: currentId++, 
                    color: colors[(x%2 + y%2) % 2]
                }
            }
        }
        setBoardDisplay(boardDisplay)
    }, [])

    const getPositionByID = (id: number) => {
        let y = Math.floor(id / 8)
        let x = id % 8
        return [x, y]
    }

    const tileClickHandler = (id: number) => {
        if (selected !== null) {
            let positions = [...getPositionByID(selected), ...getPositionByID(id)]
            bc.makeMove( positions[0], positions[1], positions[2], positions[3] )
            setSelected(null)
        }
        else {
            setSelected(id)
        }
    }

    const hoverEnterHandler = (id: number) => {
        console.log('entered ' + id)
        let tileAtId = BoardDisplay[id]
        let newBoardDisplay = [...BoardDisplay]
        newBoardDisplay[id] = {...tileAtId, hover: 'hover'}
        setBoardDisplay(newBoardDisplay)
    }

    const hoverLeaveHandler = (id: number) => {
        console.log('left ' + id)
        let tileAtId = BoardDisplay[id]
        let newBoardDisplay = [...BoardDisplay]
        newBoardDisplay[id] = {...tileAtId, hover: 'a'}
        setBoardDisplay(newBoardDisplay)
    }

    return (
        <div className="App">
            <div id="controls">
                <button onClick={() => setSide(-side)}>Change sides</button>
            </div>
            <div id="board">
                {BoardDisplay.sort((t1, t2) => side*(t1.id - t2.id)).map(tile => {
                    let tileProps = {
                        ...tile,
                        onClick: () => tileClickHandler(tile.id),
                        onMouseEnter: () => hoverEnterHandler(tile.id),
                        onMouseLeave: () => hoverLeaveHandler(tile.id),
                    }   
                    return (
                        <Tile {...tileProps}>
                            {
                            board[tile.id].piece ? (<Piece piece={board[tile.id].piece!.pieceName()}/>) : null
                            }
                        </Tile>
                    )
                    }
                )}
            </div>
        </div>
    )
}

export default App
