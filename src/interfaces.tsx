//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

//Tags for pizza types. (only for requests)
export type Ttags = 'all'|'meat' | 'hot' | 'cheese'

//All data of 1 pizza
export interface IPizzaData extends IOptionData{
    id: number;
    title: string;
    imageUrl: string;
    tags?: Array <'all'|'meat' | 'hot' | 'cheese'>;

}

export interface ICatalogProps{
    data:IPizzaData[]
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

