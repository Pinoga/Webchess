import Cell from './Cell'

export default class BoardController {
    board: Array<Array<Cell>>
    constructor() {
        this.board = [[]]
    }

    initializeBoard() {
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                this.board[x][y] = new Cell(x, y)
            }
        }
    }
}
