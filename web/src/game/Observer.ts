import { Event } from './constants/Event';
export default abstract class Observer {
    public abstract onNotify(entity: any, event: Event): void
}