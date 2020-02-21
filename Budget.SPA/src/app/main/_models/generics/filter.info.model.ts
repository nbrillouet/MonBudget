import { Loader } from "./loading-info.model";

// interface NoParamConstructor<T> {
//     new (): T;
// }

// export class FilterInfo<T> {
//     filters: T;

//     constructor(filters: NoParamConstructor<T>){

//         this.filters = new filters();
//     }
// }

//TO DELETE
export class FilterInfo<T> extends Loader {
    filters: T;

    constructor(TCreator: { new (): T; }){
        super();
        this.filters = new TCreator();
    }
}
//END TO DELETE


export class FilterSelected<T> extends Loader {
    selected: T;

    constructor(TCreator: { new (): T; }){
        super();
        this.selected = new TCreator();
    }
}

export class FilterSelection<T> extends Loader {
    selection: T;

    constructor(TCreator: { new (): T; }){
        super();
        this.selection = new TCreator();
    }
}