import { Team } from './constants/Team';
import { Event } from './constants/Event';
import Position from './constants/Position'
import Cell from './Cell'
import Pattern from './Pattern'
import Piece from './Piece'
import BoardController from './BoardController';


type Cell_v = Cell | null

export default class Pawn extends Piece {

    constructor(team: Team) {
        super(team)
        this._pseudoValidMoves = [{x: 0, y: 1}, {x: 0, y: 2}]
        this._pseudoValidThreats = [{x: 1, y: 1}, {x: -1, y: 1}]
    }

    public pieceName(): string {
        return `Pawn`
    }

    public static createPattern(): Pattern {
        return new Pattern('Pawn')
    }
    

    // public threatens(cell: Cell): boolean {
    //     let ownCell = this.currentCell
    //     if (ownCell !== null) {
    //         return (
    //             cell.y === ownCell.y - 1 * this.team &&
    //             (cell.x === ownCell.x - 1 || cell.x === ownCell.x + 1)
    //         )
    //     }
    //     return false
    // }
}
