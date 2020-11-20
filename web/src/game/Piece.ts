import Cell from './Cell'
import Pattern from './Pattern'

type Cell_v = Cell | null

export interface Position {
    x: number,
    y: number
}

export default abstract class Piece {
    //The current cell the piece is occupying.
    //null if isn't occupying any cell
    protected _currentCell: Cell_v

    //The current team the piece belongs to.
    //1 for white, -1 for black
    protected _team: number

    //Array of the piece's past moves
    protected _moveHistory: Array<Cell>

    protected _pseudoValidMoves: Array<Cell_v>

    get currentCell(): Cell_v {
        return this._currentCell
    }
    set currentCell(newCell: Cell_v) {
        this._currentCell = newCell
    }

    public get team(): number {
        return this._team
    }
    public set team(team: number) {
        this._team = team
    }

    public hasMoved() {
        return this._moveHistory.length !== 0
    }

    constructor(team: number) {
        this._currentCell = null
        this._team = team
        this._moveHistory = []
        this._pseudoValidMoves = []
    }

    public abstract pieceName(): string
    // public abstract validMoves(): Array<Cell>
    // public abstract threatens(cell: Cell): boolean
    // public abstract attackMoves(): Array<Position>
}
