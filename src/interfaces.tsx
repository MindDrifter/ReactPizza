//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

export interface Ttags{
    tag:'all'|'meat' | 'hot' | 'cheese'
}

// export type Ttags = 'all'|'meat' | 'hot' | 'cheese';

export interface IPizzaData extends IOptionData{
    id: number;
    title: string;
    imageUrl: string;
    tags?: Array <'all'|'meat' | 'hot' | 'cheese'>;
}

export interface IOptionSelectorProps{
    optionData: IOptionData;
    onChecked: (title:string)=>void;
}


//All card data
// export interface IPizzaCardData {
//     optionData: IOptionData,
//     title: string

// }

