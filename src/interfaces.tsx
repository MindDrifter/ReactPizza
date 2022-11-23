//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

export interface ISelectedOptionData {
    size: string;
    dough: string;
}


export interface IClick {
    onCardClick:()=>void
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
    loading:boolean,
    onModalOpened:(id:number)=>void
}

export interface ICardProps extends IPizzaData{
    onCardClick:()=>void
}

export interface IModalProps  {
    opened:boolean,
    onCloseModal:()=>void,
    children: JSX.Element
}

export interface IOptionSelectorProps{
    optionData: IOptionData;
    onOptionSelected: (option:ISelectedOptionData)=>void;
}

export interface IHeaderProps{
    onPizzaTypeSelected: (tag:Ttags,sortType:TSort )=>void;
}


//All card data
// export interface IPizzaCardData {
//     optionData: IOptionData,
//     title: string

// }

