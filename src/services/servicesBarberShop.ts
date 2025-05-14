import { get } from "./config/httpService";

export const getAllServices = () => {
    return get('services',{})
}