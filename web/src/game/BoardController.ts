import Cell, { Cell_v } from './Cell'
import Piece from './Piece'

type Board = Array<Array<Cell>>

export default class BoardController {
    private _board: Board
    constructor() {
        this._board = []
    }

    get board(): Board {
        return this._board
    }

    public initializeBoard(): void {
        for (let x = 0; x < 8; x++) {
            this._board.push([])
            for (let y = 0; y < 8; y++) {
                this._board[x].push(new Cell(x, y))
            }
        }
    }

    public cellAt(x: number, y: number): Cell_v {
        return this.board[x][y]
    }

    public isCellOutOfBounds(x: number, y: number): boolean {
        if (x <= 7 && x >= 0 && y <= 7 && y >= 0)
            return false
        else return true
    }

    public isCellAvailable(x: number, y: number): boolean {
        return !this.isCellOutOfBounds(x, y) && this.cellAt(x, y)!.isEmpty()
    }

    public movePiece(piece: Piece, cell: Cell) {
        let cell0 = piece.currentCell
        piece.currentCell = cell
        cell.piece = piece
        if (cell0) cell0!.piece = null
    }

    public makeMove(x0: number, y0: number, x1: number, y1: number) {
        if (!this.isCellOutOfBounds(x0, y0) && !this.isCellOutOfBounds(x1, y1)) {
            let cell0 = this.cellAt(x0, y0)
            let cell1 = this.cellAt(x1, y1)
            if (cell0!.piece && cell0 !== cell1) {
                let piece = cell0!.piece
                this.movePiece(piece, cell1!)
            }
        }
    }
}
