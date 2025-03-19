export interface MetaDatas {
    name: string;
    supply: number;
    description: string;
    imageUrl: string | "";
    address: string | "";
    tags: string[];
    properties: Properties[] | [];
    statistic: Statistic[] | [];
}

export interface Properties {
    name: string;
    value: string
}

export interface Statistic {
    name: string;
    value: string
}

export interface Result {
    status: boolean;
    message: string;
}

export interface ResultMany {
    status: boolean;
    message: string[] | string | TokenData;
}

export interface TokenData {
    tokenId: string[] | [];
    url: string[] | [];
}