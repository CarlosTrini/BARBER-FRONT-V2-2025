import { get } from "../config/httpService";

export const getAllServices = () => {
    const response  = get('/services',{})
    return response;
}

export const getAllLocations = () => {
    const response = get('/locations', {});
    return response;
}