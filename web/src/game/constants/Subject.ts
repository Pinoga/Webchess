import Observer from '../Observer';
import { Event } from './Event';
export default class Subject {

    private _observers: Observer[]
    private _MAX_OBSERVERS: number

    constructor(maxObservers: number) {
        this._observers = []
        this._MAX_OBSERVERS = maxObservers
    }

    public addObserver(observer: Observer): void {
        this._observers.push(observer)
    }
    
    public removeObserver(observer: Observer): void {
        this._observers = this._observers.filter(o => o !== observer)
    }

    public notify(entity: any, event: Event) {
        for (let i = 0; i < this._observers.length; i++) {
            this._observers[i].onNotify(entity, event)
        }
    }
}