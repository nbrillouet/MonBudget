import { Loader } from "./loading-info.model";

export class Datas<T> extends Loader {
    datas: T;
    constructor() {
        super();
        this.datas = null;
    }
}

export class DataInfo<T> extends Loader {
    datas: T;
        
    constructor(){
        super();
        this.datas = null;
    }
}



export class DatasFilter<T,U> extends Datas<T>  {
    filter: U;
    constructor () {
        super();
    }
}

// export class TableInfo<T,U>  extends DataSource<T[]> {
//     filter: U;
//     constructor () {
//         super();
//     }
// }
