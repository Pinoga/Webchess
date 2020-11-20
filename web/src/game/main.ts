import BoardController from './BoardController'
import Pawn from './Pawn'
import { WHITE, BLACK } from './constants/teams'

const boardController = new BoardController()
const board = boardController.board
boardController.initializeBoard()

const pawn = new Pawn(WHITE)
const bpawn = new Pawn(BLACK)
boardController.movePiece(pawn, boardController.cellAt(0, 7)!)
boardController.movePiece(pawn, boardController.cellAt(3, 7)!)
boardController.movePiece(bpawn, boardController.cellAt(4, 4)!)
export default boardController
