import { Team } from './constants/Team';
import Position from './constants/Position';
import Cell from './Cell'
import Observer from './Observer'
import Pattern from './Pattern'

type Cell_v = Cell | null

export default abstract class Piece {
    //The current cell the piece is occupying.
    //null if isn't occupying any cell
    protected _currentCell: Cell_v

    //The current team the piece belongs to.
    //1 for white, -1 for black
    protected _team: number

    //Array of the piece's past moves
    protected _moveHistory: Array<Cell>

    //Necessarily a superset of the possible moves the Piece can make
    protected _pseudoValidMoves: Position[]

    protected _pseudoValidThreats: Position[]

    public get currentCell(): Cell_v {
        return this._currentCell
    }
    public set currentCell(newCell: Cell_v) {
        this._currentCell = newCell
    }

    public get team(): number {
        return this._team
    }
    public set team(team: number) {
        this._team = team
    }

    public get pvMoves(): Position[] {
        return this._pseudoValidMoves
    }

    public set pvMoves(moves: Position[]) {
        this._pseudoValidMoves = moves
    }

    
    public get pvThreats() : Position[] {
        return this._pseudoValidThreats
    }

    
    public set pvThreats(threats : Position[]) {
        this._pseudoValidThreats = threats;
    }
    
    public hasMoved() {
        return this._moveHistory.length !== 0
    }

    constructor(team: Team) {
        this._currentCell = null
        this._team = team
        this._moveHistory = []
        this._pseudoValidMoves = []
        this._pseudoValidThreats = []
    }

    public abstract pieceName(): string
    // public abstract validMoves(): Array<Cell>
    // public abstract threatens(cell: Cell): boolean
    // public abstract attackMoves(): Array<Position>
}
