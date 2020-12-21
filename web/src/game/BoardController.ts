import { Team } from './constants/Team';
import Cell, { Cell_v } from './Cell'
import Piece from './Piece'
import Position from './constants/Position'
import Subject from './constants/Subject';
import PieceEventsObserver from './PieceEventsObserver';
import { Event } from './constants/Event';
import { NumberAttributeValue } from 'aws-sdk/clients/clouddirectory';

type Board = Array<Cell>

export default class BoardController {
    private _board: Board
    private _subject: Subject
    constructor(pieceEvents: PieceEventsObserver) {
        this._board = []
        this._subject = new Subject(10)
        this._subject.addObserver(pieceEvents)
    }

    get board(): Board {
        return this._board
    }

    public initializeBoard(): void {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                this._board.push(new Cell({x, y}))
            }

        }
    }

    public cellAt(x: number, y: number): Cell_v {
        return (this.isCellOutOfBounds(x,y) ? null : this.board[8*y + x] )
    }

    public isCellOutOfBounds(x: number, y: number): boolean {
        if (x <= 7 && x >= 0 && y <= 7 && y >= 0)
            return false
        else return true
    }

    public isCellAvailable(x: number, y: number): boolean {
        return !this.isCellOutOfBounds(x, y) && this.cellAt(x, y)!.isEmpty()
    }

    public placePiece(piece: Piece, cell: Cell) {
        let cell0 = piece.currentCell
        piece.currentCell = cell
        cell.piece = piece
        if (cell0) cell0!.piece = null
    }

    public movePiece(piece: Piece, cell: Cell) {
        this.placePiece(piece, cell)



        if (!piece.hasMoved() && piece.pieceName() === 'Pawn') {
            this._subject.notify(piece, Event.EVENT_PAWN_FIRST_MOVE)
        }

    }

    private installObserversIntoThreatenedCells(piece: Piece) {
        piece.pvThreats.forEach((position: Position) => {
            
        })
    }

    // ---------------- Methods acessible to the graphical interface ---------------

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

    public avaiableMoves(id: number): number[] {
        let cell = this.board[id]
        if (cell.piece) {
            return BoardController.positionArray(cell.position, cell.piece.team, ...cell.piece.pvMoves)
        }
        return []
    }

    // --------------------------- Static methods ----------------------------------

    // Given the piece's current position, team and a list of relative positions to the
    // current position, return a list of absolute positions (positive y always refer
    // to 'going up' from a team's POV, and positive x always refer to 'going right'
    public static positionArray(currentPosition: Position, team: Team, ...args: Position[]) : number[] {
        let positionArray: number[] = []
        console.log('a')
        console.log(args)
        args.forEach(position => {
            let xyPos = this.addRelativePositions(currentPosition, position, team)
            positionArray.push(8*xyPos.y + xyPos.x)
        })
        return positionArray
    }

    // Given a absolute position, a relative position and a team
    // return an absolute position
    public static addRelativePositions(p1: Position, p2: Position, team: Team): Position {
        return {
            x: p1.x + team*p2.x,
            y: p1.y + team*p2.y
        }
    } 
}
