export function calcPriceWithSize(size:string, price:number){
    switch (size) {
        case '30':
            return price
            break;
        case '40':
            return price+120
            break;
        case '50':
            return price+180
            break;
    }
}