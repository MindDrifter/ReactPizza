//One pizza options
export interface IOptionData {
    size: string[];
    dough: string[];
}

export interface IPizzaData extends IOptionData{
    id: number;
    title: string;
    imageUrl: string;
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

