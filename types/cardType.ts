import DataType from "./response";

export interface CardType {
    desc: string;
    name: string;
    url: string;
}

export interface ListType {
    data: DataType[];
    setCategoryData?: React.Dispatch<React.SetStateAction<string[]>>
    categoryData?: string[];
    listedData?: DataType[];
}