import {Api} from './ApiInstance';


export const getAllServices = async () => {
    try{
        const response = await Api.get('services')
        return response;
    }
    catch (error){
        console.log(error)
    }    
}