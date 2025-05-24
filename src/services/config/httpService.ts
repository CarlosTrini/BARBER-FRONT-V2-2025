// "use server"
import { API } from './ApiInstance';

import { AxiosError, AxiosInstance as AxiosInstanceType, AxiosResponse } from 'axios';

export interface ConfigProps {
    ACCESS_KEY: string;
    SECRET_ACCESS_KEY: string;
    REGION: string;
    BUCKET_NAME: string;
    PATH_FOLDER: string;
    API: string;
    NEXT_PUBLIC_URL_IMAGES: string;
}


export interface ResponseProps<T> {
    statuscode: number;
    success: boolean;
    message: string;
    result: T;
}

// Interceptor de solicitud
API.interceptors.request.use(
    (config: any) => {
        config.headers["Content-Type"] = (config?.multipart ?? false) ? "multipart/form-data" : "application/json";
        let token = 'ESTE_ES_UN_TOKEN_FAKE_TOKEN_FAEK';
        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config
    },
    (error) => Promise.reject(error)
);

// Interceptor de respuesta
API.interceptors.response.use(
    (response: AxiosResponse) => ({ ...response, data: { ...response.data, success: response.status === 200 ? true : false } }),
    // (error: AxiosError) => {
    async (error: any) => {
        console.log("response-------------------");
        console.log(error);
        // console.log(error.status);
        // console.log(error.response?.data);
        const originalRequest = error.config;
        if (originalRequest) {
            console.log("error?.response", error?.response);
            if (error?.response?.status === 401) {

                await CloseSession();
                window.location.href = '/';
                // && !originalRequest?._retry
                // originalRequest._retry = true;
                // try {
                //           const refreshToken = async () => {
                //                     await RefresLoginAction();
                //                     return API(originalRequest);
                //           };
                //           return refreshToken();
                // } catch (refreshError) {
                //           // Swal.fire({
                //           //           title: 'Error!',
                //           //           text: 'Your session has expired. Please log in again.',
                //           //           icon: 'error',
                //           //           confirmButtonText: 'Aceptar'
                //           // });

                //           return Promise.reject(refreshError);
                // }
            }
        }

        // if (error?.response?.status === 403) {
        //           // Swal.fire({
        //           //           title: 'Acceso Denegado',
        //           //           text: 'No tienes permiso para acceder a este recurso. Por favor, inicia sesión nuevamente.',
        //           //           icon: 'error',
        //           //           confirmButtonText: 'Aceptar'
        //           // })
        //           // window.location.href = '/iniciar-sesion';
        // }

        // const description = error?.response?.data?.errordescription ?? "";
        // if (description) {
        //           // Swal.fire({
        //           //           title: 'Lo sentimos!!',
        //           //           text: description,
        //           //           icon: 'warning',
        //           //           confirmButtonText: 'Aceptar'
        //           // });
        // }
        return Promise.reject(error);
    }
);

export async function get<T>(resource: string, params: object = {}): Promise<ResponseProps<T>> {
    try {

        // const response: AxiosResponse<ResponseProps<T>> = await API.get(resource, { params });
        const response: AxiosResponse = await API.get(resource, {params})

        const responseFake: AxiosResponse<ResponseProps<T>> = {
            data: {
                statuscode: 200,
                success: true,
                message: 'Todo bien',
                result: response.data // Usamos el tipo genérico T aquí
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {} as any,
            request: {}
        };
        return responseFake.data

        // AGREGAR VALIDACIONES PARA LOS ESTATUS DIFERENTES DE 200...

    } catch (error: any) {
        return { success: false, statuscode: error.status, message: error.response?.data?.message ?? JSON.stringify(error.response?.data), result: undefined } as ResponseProps<T>;
    }
}

// export async function post<T>(resource: string, data: object, multipart: boolean = false): Promise<ResponseProps<T>> {
//           try {
//                     const response: AxiosResponse<ResponseProps<T>> = await API.post(resource, data, { multipart } as any);
//                     return response.data;
//           } catch (error: any) {
//                     return { success: false, statuscode: error.status, errorDescription: error.response?.data?.message ?? JSON.stringify(error.response?.data), result: undefined } as ResponseProps<T>;
//           }
// }

// export async function patch<T>(resource: string, data: object, multipart: boolean = false): Promise<ResponseProps<T>> {
//           try {
//                     const response: AxiosResponse<ResponseProps<T>> = await API.patch(resource, data, { multipart } as any);
//                     return response.data;
//           } catch (error: any) {
//                     return { success: false, statuscode: error.status, errorDescription: error.response?.data?.message ?? JSON.stringify(error.response?.data), result: undefined } as ResponseProps<T>;
//           }
// }

// export async function put<T>(resource: string, data: object): Promise<ResponseProps<T>> {
//           try {
//                     const response: AxiosResponse<ResponseProps<T>> = await API.put(resource, data);
//                     return response.data;
//           } catch (error: any) {
//                     return { success: false, statuscode: error.status, errorDescription: error.response?.data?.message ?? JSON.stringify(error.response?.data), result: undefined } as ResponseProps<T>;
//           }
// }

// export async function remove<T>(resource: string, data: object = {}): Promise<ResponseProps<T>> {
//           try {
//                     const response: AxiosResponse<ResponseProps<T>> = await API.delete(resource, { data });
//                     return response.data;
//           } catch (error: any) {
//                     return { success: false, statuscode: error.status, errorDescription: error.response?.data?.message ?? JSON.stringify(error.response?.data), result: undefined } as ResponseProps<T>;
//           }
// }

const default_response = {
    statuscode: 701,
    success: false,
    errorDescription: "Lo sentimos, algo salio mal, vuelve a intentarlo",
    data: null
};


// export interface ValuesEnum {
//           value: number;
//           text: string;
// }