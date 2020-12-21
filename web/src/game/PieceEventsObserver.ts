import { Event } from './constants/Event';
import Observer from './Observer'
import Piece from './Piece'

export default class PieceEventsObserver extends Observer {
    public onNotify(piece: Piece, event: Event) : void {
        // let positions : Position[]
        console.log(event)
        switch(event) {
            // case Event.EVENT_GAME_START:
            //     positions = [
            //         {x: 1, y: 1},
            //         {x: 2, y: 2}
            //     ]
            //     piece.pvMoves = BoardController.positionArray(piece.currentCell!.position, piece.team, ...positions)
            //     break;
            case Event.EVENT_PAWN_FIRST_MOVE:
                console.log('PAWN FIRST MOVE')
                piece.pvMoves = [
                    {x: 0, y: 1}
                ]
                // piece.pvMoves = BoardController.positionArray(piece.currentCell!.position, piece.team, ...positions)
                break;
            default: break;
        }
    }
}