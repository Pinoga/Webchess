import React, { useEffect, useState } from 'react'
import './styles.scss'
import Piece from '../../components/Piece/Piece'
import bc from '../../game/main'
import Tile from '../../components/Tile/Tile'


export interface IBoardDisplayTile {
    id: number;
}

function App() {
    const board = bc.board
    const [side, setSide] = useState<number>(1)
    const [BoardDisplay, setBoardDisplay] = useState<IBoardDisplayTile[]>([])
    const [selected, setSelected] = useState<number | null>(null)
    const [highlighted, setHighlighted] = useState<{[index: number]: boolean}>({})
    const [hoverable, setHoverable] = useState<boolean>(true)
    const [color, setColor] = useState<{[index: number]: string}>({})
    
    useEffect(() => {
        // Initialize display board
        let initialColor = {...color}
        let colorOptions = ['black', 'white']
        let currentId = 0
        let initialDisplay: IBoardDisplayTile = {id: 0}
        let boardDisplay: IBoardDisplayTile[] = []
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                let id = 8*y + x
                boardDisplay[id] = {
                    ...initialDisplay, 
                    id: currentId++,
                }
                initialColor[id] = colorOptions[(x%2 + y%2) % 2]
            }
        }
        setColor(initialColor)
        setBoardDisplay(boardDisplay)
    }, [])

    const getPositionByID = (id: number) => {
        let y = Math.floor(id / 8)
        let x = id % 8
        return [x, y]
    }

    const tileClickHandler = (clickedId: number) => {
        if (selected !== null) {
            console.log(selected)
            let positions = [...getPositionByID(selected), ...getPositionByID(clickedId)]
            bc.makeMove( positions[0], positions[1], positions[2], positions[3] )
            setSelected(null)
            setHighlighted({})
        }
        else {
            let newHighlighted = {} as any 
            setSelected(clickedId)
            bc.avaiableMoves(clickedId).forEach((id: number) => {
                newHighlighted[id] = true
            })
            setHighlighted(newHighlighted)
        }
    }



    const getTileCSSClass = (id: number): string => {
        let CSSClass = ''
        CSSClass += (selected === id ? 'selected ' : '')
        CSSClass += (highlighted[id] ? 'highlighted ' : '')
        CSSClass += (hoverable ? 'hoverable ' : '')
        CSSClass += color[id]
        return CSSClass
    }

    return (
        <div className="App">
            <div id="controls">
                <button onClick={() => setSide(-side)}>Change sides</button>
                <button onClick={() => setHoverable(!hoverable)}>Toggle hover</button>
            </div>
            <div id="board">
                {BoardDisplay.sort((t1, t2) => side*(t1.id - t2.id)).map(tile => {
                    let tileProps = {
                        ...tile,
                        style: getTileCSSClass(tile.id),
                        onClick: () => tileClickHandler(tile.id),
                    }
                    let piece = board[tile.id].piece
                    return (
                        <Tile {...tileProps} key={tile.id}>
                            {
                            board[tile.id].piece ? (<Piece piece={`${piece!.team}${piece!.pieceName()}`}/>) : null
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
