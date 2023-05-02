import {Dispatch, SetStateAction} from "react";

export interface Product {
    id: number;
    cardName: string;
    price: number;
    inStoke? : boolean;
    showTitle? : boolean;
    setShowTitle? : Dispatch<SetStateAction<boolean>>;
}