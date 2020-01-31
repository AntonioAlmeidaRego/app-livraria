import RequestController from "./RequestController";

export default class UserController {

    constructor() {
        this._request = new RequestController;
    }

     saveUser = async (url, data) =>{
       const api = await this._request.$postJSON(url, data);
       return api;
    };

     userAutentication = async (url, data) => {
        const api = await this._request.$postJSON(url, data);
        return api;
    };
}