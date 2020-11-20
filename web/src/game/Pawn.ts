import Cell from './Cell'
import Pattern from './Pattern'
import Piece from './Piece'

type Cell_v = Cell | null

export default class Pawn extends Piece {

    public pieceName(): string {
        return `${this.team}Pawn`
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
