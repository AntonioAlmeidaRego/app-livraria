import RequestController from './RequestController';

export default class LivroController {
    constructor() {
        this._request = new RequestController;
    }

    getAll = async (url)=>{
        return await this._request.$getJSON(url);
    };

    getOne = async (url)=>{
        return await this._request.$getJSON(url);
    };
}
