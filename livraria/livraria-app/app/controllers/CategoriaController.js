import RequestController from './RequestController';


export default class CategoriaController {

    constructor(){
        this._request = new RequestController;
    }


    getOne = async (url)=>{
        return await this._request.$getJSON(url);
    };

    getAll = async (url)=>{
        return await this._request.$getJSON(url);
    };
}
