import {Api} from './ApiInstance';


export const get = (url: string, config: {}) => {
    try {
        const response =  Api.get(url, config);
        return response;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}