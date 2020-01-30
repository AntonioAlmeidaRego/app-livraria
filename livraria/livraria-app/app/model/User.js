export default class User {
    constructor(nome: string, data: string, email: string, senha: string,
                estado: string, cidade: string, rua: string, bairro: string) {
        this._nome = nome;
        this._data = data;
        this._email = email;
        this._senha = senha;
        this._estado = estado;
        this._cidade = cidade;
        this._rua = rua;
        this._bairro = bairro;
    }


    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get data(): string {
        return this._data;
    }

    set data(value: string) {
        this._data = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get senha(): string {
        return this._senha;
    }

    set senha(value: string) {
        this._senha = value;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(value: string) {
        this._estado = value;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    get rua(): string {
        return this._rua;
    }

    set rua(value: string) {
        this._rua = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    isEmpty(){
        if(this.nome != "" && this.bairro != ""
            && this.cidade != "" && this.data != ""
            && this.email != "" && this.estado != ""
            && this.rua != "" && this.senha != ""
        ){
            return false;
        }
        return true;
    }
}