import RequestController from "./RequestController";

export default class ApiController {
    constructor() {
        this._request = new RequestController;
        this._empty = false;
    }

    get = async (url)=>{
        const api = await this._request.$getJSON(url);
        if(api.status == 200){
            this._empty = false;
            return await api.json();
        }
        this._empty = true;
        return [];
    };

    isEmpty(){
        return this._empty;
    }
}