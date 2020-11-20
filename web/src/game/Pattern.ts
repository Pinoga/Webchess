export default class Pattern {
    protected _type: string
    protected static _patterns = {
        'Pawn': {
            
        }
    }
    constructor(type: string) {
        this._type = type
    }
}