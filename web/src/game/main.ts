import { Team } from './constants/Team';
import BoardController from './BoardController'
import PieceEventsObserver from './PieceEventsObserver'
import Pawn from './Pawn'

const pieceObserver = new PieceEventsObserver()
const boardController = new BoardController(pieceObserver)
const board = boardController.board
boardController.initializeBoard()

const pawn = new Pawn(Team.WHITE)
const bpawn = new Pawn(Team.BLACK)
boardController.placePiece(pawn, boardController.cellAt(4, 1)!)
boardController.placePiece(pawn, boardController.cellAt(3, 1)!)
boardController.placePiece(bpawn, boardController.cellAt(4, 6)!)
export default boardController
