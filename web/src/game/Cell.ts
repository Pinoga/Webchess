import Piece from './Piece'

export type Piece_v = Piece | null
export type Cell_v = Cell | null

export default class Cell {
    public id: number;
    private _piece: Piece_v
    protected _threatenedBy: Array<Piece>

    constructor(id: number) {
        this.id = id
        this._piece = null
        this._threatenedBy = []
    }

    get piece(): Piece_v {
        return this._piece
    }
    set piece(piece: Piece_v) {
        this._piece = piece
    }

    // get x(): number {
    //     return this._x
    // }
    // set x(x: number) {
    //     this._x = x
    // }
    // get y(): number {
    //     return this._y
    // }
    // set y(y: number) {
    //     this._y = y
    // }

    public isEmpty(): boolean {
        return this.piece === null
    }
}
