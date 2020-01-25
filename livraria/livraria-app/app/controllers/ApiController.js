import RequestController from "./RequestController";

export default class ApiController {
    constructor() {
        this._request = new RequestController;
    }

    get = async (url)=>{
        const api = await this._request.$getJSON(url);
        if(api.status == 200){
            return await api.json();
        }
        return [];
    };
}