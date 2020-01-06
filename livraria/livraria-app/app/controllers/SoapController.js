import RequestController from './RequestController';

export default class SoapController {
    constructor(){
        this._request = new RequestController;
    }

    getSoap = async (url)=>{
      return await this._request.$getJSON(url);
    };

    $find(text: string, seach: string){
        const array = text.split('');
        const posicao = text.search(seach);
        let str = "";
        let i = posicao+seach.length;
        let j = i+1;
        for(i; i < text.length;i++){
            if(array[i] == '<'){
                for(j; j < i;j++){
                    str += text[j];
                }
                break;
            }
        }
        return str;
    };
}
