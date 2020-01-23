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

export class FilterInfo<T> extends Loader {
    filters: T;

    constructor(TCreator: { new (): T; }){
        super();
        this.filters = new TCreator();
    }
}