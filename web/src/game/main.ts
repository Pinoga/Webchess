import BoardController from './BoardController'
import Pawn from './Pawn'
import { WHITE, BLACK } from './constants/teams'

const boardController = new BoardController()
const board = boardController.board
boardController.initializeBoard()

const pawn = new Pawn(WHITE)
const bpawn = new Pawn(BLACK)
boardController.movePiece(pawn, board[0][7])
boardController.movePiece(pawn, board[0][3])
boardController.movePiece(bpawn, board[4][4])
export default boardController
