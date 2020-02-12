import RequestController from './RequestController';


export default class CategoriaController {

    constructor(){
        this._request = new RequestController;
        this._empty = false;
    }


    getOne = async (url)=>{
        const api = await this._request.$getJSON(url);
        return await api.json() || [];
    };

    getAll = async (url)=>{
        const api = await this._request.$getJSON(url);
        if(api.status == 404){
            this._empty = true;
            return [];
        }else if(api.status == 200){
            this._empty = false;
            return await api.json();
        }
    };

    isEmpty(){
        return this._empty;
    }
}
