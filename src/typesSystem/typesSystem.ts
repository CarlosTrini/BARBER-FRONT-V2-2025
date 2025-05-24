export interface UserInfo {
    userName: string;
    id: string;
    fullName: string;
}
export interface ServiceDescI {
    name: string;
    description: string;
    price: string:
}
export interface ServiceI {
    id: string;
    packageName: string,
    services: ServiceDescI[]
}

export interface LocationI {
    id: string;
    img: string;
    city: string;
    NeighborhoodName: string;
    address: string;
    route: string;
}

export interface ProductsI {
    id: string;
    img: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    discount: number;
}

export interface ProductsCartI extends ProductsI {
    qty: number;
}

export interface WhislistI extends ProductsI {}

export interface GalleryI {
    img: string;
    id: string;
}