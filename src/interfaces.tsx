//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

//Tags for pizza types. (only for requests)
export type Ttags = 'all'|'meat' | 'hot' | 'cheese';

export type TSort = 'abc'|'price' |'popular';


//All data of 1 pizza
export interface IPizzaData extends IOptionData{
    id: number;
    title: string;
    imageUrl: string;
    tags?: Ttags[];

}

export interface ICatalogProps{
    data:IPizzaData[],
    loading:boolean
}

export interface IOptionSelectorProps{
    optionData: IOptionData;
    onChecked: (title:string)=>void;
}

export interface IHeaderProps{
    onPizzaTypeSelected: (title:'all'|'meat' | 'hot' | 'cheese')=>void;
}


//All card data
// export interface IPizzaCardData {
//     optionData: IOptionData,
//     title: string

// }

