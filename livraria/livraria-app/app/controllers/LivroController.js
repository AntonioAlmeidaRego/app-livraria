import RequestController from './RequestController';

export default class LivroController {
    constructor() {
        this._request = new RequestController;
    }

    getAll = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };

    getOne = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };

    getListAllFirstPromotions = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };

    getListAllLinkedCategoria = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    }
}
