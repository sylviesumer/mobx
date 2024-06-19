import { action, observable } from "mobx";

class BookSearchStore {
    @observable term = '';
    @observable status = '';
    @observable.shallow results = [];
    @observable totalCount = 0;

    @action.bound
    setTerm(value) {
        this.term = value;
    }

    @action.bound
    async search() {
        
    }
}

export const store = new BookSearchStore();