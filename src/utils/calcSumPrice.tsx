import { ICartSlice } from "../redux/slices/cartSlice";

export function calcSumPrice(array:ICartSlice[]):number{
    return array.reduce((acc, firstVal)=>{return acc + firstVal.price},0)
}