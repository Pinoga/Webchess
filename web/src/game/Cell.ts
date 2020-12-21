import Piece from './Piece'
import Position from './constants/Position'
import Subject from './constants/Subject';

export type Piece_v = Piece | null
export type Cell_v = Cell | null

export default class Cell {
    public id: number;
    public _position: Position
    public _subject: Subject
    private _piece: Piece_v
    private _threatenedBy: Array<Piece>


    constructor(position: Position) {
        this.id = 8*position.y + position.x
        this._position = position
        this._piece = null
        this._threatenedBy = []
        this._subject = new Subject(16)
    }

    get position() : Position {
        return this._position
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
