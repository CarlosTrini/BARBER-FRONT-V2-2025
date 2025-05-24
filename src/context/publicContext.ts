import { GalleryI, LocationI, ProductsCartI, ServiceI, UserInfo, WhislistI } from '@typesSystem/typesSystem';
import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

/*
NOTA: 🔒 Este store o context se encargará de manejar:
Login 👤 => Autenticación
Usuario => Data del usuario
PublicSite Servicios 📌 => Sección de servicios en el home y página de servicios
PublicSite Sucursales 📌 => Sección de sucursales en el home y en página de sucursales
PublicSite Galería 📌 => Sección de galería en el home
PublicSite Carrito 📌 => carrito de Compras
PublicaSite lista de deseos 📌 => agregados a favoritos
*/

interface PublicState {
    isAuth: boolean;
    userInfo: UserInfo;
    services: ServiceI[];
    branches: LocationI[];
    gallery: GalleryI[];
    productsCart: ProductsCartI[];
    whislist: WhislistI[];

    updateAuth: (isAuthUser: boolean) => void;
    updateServices: () => void;
    updateBranches: () => void;
    updateGallery: () => void;
    updateCart: () => void;
    updateWhislist: () => void;
}

const usePublicStore = create<PublicState>()(
    devtools((set) => ({
        isAuth: false,
        userInfo: {},
        services: [],
        branches: [],
        gallery: [],
        productsCart: [],
        whislist:[],
        updateAuth: (isAuthUser) => {
            if (isAuthUser == undefined || isAuthUser == null){
                set({isAuth: false})
            }else {
                set({isAuth: isAuthUser})
            }
        },
        updateServices: () => {},
        updateBranches: () => {},
        updateGallery: () => {},
        updateCart: () => {},
        updateWhislist: () => {},


    }))
);

export default usePublicStore;
