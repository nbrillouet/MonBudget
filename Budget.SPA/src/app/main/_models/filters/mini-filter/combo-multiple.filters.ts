import { ComboMultiple } from "../../generics/combo.model";
import { ISelect, ISelectGroup } from "../../generics/select.model";

export class FilterComboMultiple {
    placeholder: string;
    combos: ComboMultiple<ISelect>;
}

export class FilterComboMultipleGroup {
    placeholder: string;
    combos: ComboMultiple<ISelectGroup>;
}