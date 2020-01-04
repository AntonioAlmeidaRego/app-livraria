import RequestController from './RequestController';


export default class CategoriaController {

    constructor(){
        this._request = new RequestController;
    }


    getOne = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };

    getAll = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };
}
