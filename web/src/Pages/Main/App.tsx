import React, { useState } from 'react'
import './styles.scss'
import BoardController from '../../game/BoardController'
import Cell from '../../game/Cell'
import Piece from '../../components/Piece/Piece'
import bc from '../../game/main'
import Tile from '../../components/Tile/Tile'

function App() {
    const board = bc.board
    const [selected, setSelected] = useState<number | null>(null)

    const getPositionByID = (id: number) => {
        let y = Math.floor(id / 8)
        let x = id % 8
        return {x, y}
    }

    const tileClickHandler = (id: number, x: number, y: number) => {
        if (selected !== null) {
            let position = getPositionByID(selected)
            bc.makeMove(position.x, position.y, x, y)
            setSelected(null)
        }
        else {
            setSelected(id)
        }
    }

    return (
        <div className="App">
            <div id="board">
                {board.map((boardRow, y) => 
                    boardRow.map((cell: Cell, x) => 
                        {
                            let id = board[x][y].id   
                            return (
                                <Tile x={x} y={y} id={id} onClick={() => tileClickHandler(id, x, y)} selected={selected === id}>
                                    {
                                    board[x][y].piece ? (<Piece piece={board[x][y].piece!.pieceName()}/>) : null
                                    }
                                </Tile>
                            )
                        }
                    )
                )}
            </div>
        </div>
    )
}

export default App
