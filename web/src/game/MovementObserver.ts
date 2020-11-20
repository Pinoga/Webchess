import {Event} from '../game/constants/Events'

export default class MovementObserver {

    public onNotify(event: Event): void {
        switch(event) {
            case Event.EVENT_PAWN_DOUBLE_MOVE:
                break;
            default:
                break;
        }
    }
}