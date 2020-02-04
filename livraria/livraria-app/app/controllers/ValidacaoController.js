export default class ValidacaoController {
    constructor() {
    }

    _searchChar(input, char){
        let str = input.split("");
        for(let i = 0; i < str.length;i++){
            if(str[i] == char){
                return true;
            }
        }
        return false;
    }

    notAllowedCharacters(element, input){
        if((element == "Dead") || (element == "AltGraph") || (element == "]")
            || (this._searchChar(input, "}")) || (element == "]") || (this._searchChar(input, "{"))
            || (element == "[") || (this._searchChar(input, "&"))
            || (this._searchChar(input, "-")) || (this._searchChar(input, "#"))
            || (this._searchChar(input, "¨")) || (this._searchChar(input, "(")) || (this._searchChar(input, ")"))
            || (this._searchChar(input, "%"))
            || (this._searchChar(input, "*")) || (element == "/") || (this._searchChar(input, "|"))
            || (this._searchChar(input, "+")) || (this._searchChar(input, "="))
            || (element == "\\") || (element == "'") || (this._searchChar(input, '"'))
            || (this._searchChar(input, "!")) || (element == ";") || (this._searchChar(input, ":"))
            || (element == ",") || (this._searchChar(input, "$"))){
            return true;
        }
        return false;
    }
}