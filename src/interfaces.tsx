//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

export type TSort = 'title'|'price' |'popular';

//Tags for pizza types. (only for requests)
export type Ttags = 'all'|'meat' | 'hot' | 'cheese';




//All data of 1 pizza
export interface IPizzaData extends IOptionData{
    id: number;
    title: string;
    imageUrl: string;
    price:number
    tags?: Ttags[];

}

export interface ICatalogProps{
    data:IPizzaData[],
    loading:boolean
}

export interface IOptionSelectorProps{
    optionData: IOptionData;
    onOptionSelected: (option:any)=>void;
}

export interface IHeaderProps{
    onPizzaTypeSelected: (tag:Ttags,sortType:TSort )=>void;
}


//All card data
// export interface IPizzaCardData {
//     optionData: IOptionData,
//     title: string

// }

