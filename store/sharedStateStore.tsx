import { makeAutoObservable } from 'mobx';

class SharedStateStore {
    ciudad: string = '';
    pais: string = '';
    consultar = false;

    constructor() {
        makeAutoObservable(this);
    }
}

const sharedStateStore = new SharedStateStore();
export default sharedStateStore;
