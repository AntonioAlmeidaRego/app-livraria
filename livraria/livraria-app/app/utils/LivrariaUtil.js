let inCep = false;
let inCPFPos2 = false;
let inCPFPos6 = false;
let inCPFPos9 = false;
let arrayCep = [];
let arrayCPF = [];

export default class LivrariaUtil {

    static checkPasswords(senha: string, confirmaSenha: string): boolean{
        if(senha != "" && confirmaSenha != ""){
            if(senha == confirmaSenha){
                return true;
            }
        }
        return false;
    }

    static findCharacter(character: string, array): boolean{
        for(let i = 0; i < array.length; i++){
            if(character == array[i]){
                return true;
            }
        }
        return false;
    }

    static findCharacter(character: string, array, i: number):boolean {
        return character == array[i] ? true : false;
    }

    static maskCPF(value: string): string{
        const cpf = value.split('');

        if(this.isInserting(cpf, arrayCPF)){
            arrayCPF = cpf;
            console.log("INSERINDO...");
        }else if(this.isDeleting(cpf, arrayCPF)){
            arrayCPF.pop();
            console.log("DELETANDO...");
        }

        let str = "";

        for(let i = 0; i < cpf.length;i++){
            if(i == 2 && !inCPFPos2){
                str += cpf[i] + '.';
                inCPFPos2 = true;
            }else if(i == 6 && !inCPFPos6){
                str += cpf[i] + ".";
                inCPFPos6 = true;
            }else if(i == 9 && !inCPFPos9){
                str += cpf[i] + "-";
                inCPFPos9 = true;
            }else {
                str += cpf[i];
            }
        }

        return str;
    }

    static maskCep(value: string): string{
        const cep = value.split('');


        if(this.isInserting(cep, arrayCep)){
            if(
                (!this.findCharacter(',', cep, 0)) && (!this.findCharacter(',', cep, 1))
                && (!this.findCharacter(',', cep, 2)) &&
                    (!this.findCharacter(',', cep, 3)) && (!this.findCharacter(',', cep, 4)) &&
                        (!this.findCharacter(',', cep, 6)) && (!this.findCharacter(',', cep, 7)) &&
                            (!this.findCharacter(',', cep, 8))
                &&
                (!this.findCharacter('.', cep, 0)) && (!this.findCharacter('.', cep, 1))
                    && (!this.findCharacter('.', cep, 2)) &&
                        (!this.findCharacter('.', cep, 3)) && (!this.findCharacter('.', cep, 4)) &&
                            (!this.findCharacter('.', cep, 6)) && (!this.findCharacter('.', cep, 7)) &&
                                (!this.findCharacter('.', cep, 8))
                &&
                (!this.findCharacter('-', cep, 0)) && (!this.findCharacter('-', cep, 1))
                    && (!this.findCharacter('-', cep, 2)) &&
                        (!this.findCharacter('-', cep, 3)) && (!this.findCharacter('-', cep, 4)) &&
                            (!this.findCharacter('-', cep, 6)) && (!this.findCharacter('-', cep, 7)) &&
                                (!this.findCharacter('-', cep, 8))
                &&
                (!this.findCharacter(';', cep, 0)) && (!this.findCharacter(';', cep, 1))
                    && (!this.findCharacter(';', cep, 2)) &&
                        (!this.findCharacter(';', cep, 3)) && (!this.findCharacter(';', cep, 4)) &&
                            (!this.findCharacter(';', cep, 6)) && (!this.findCharacter(';', cep, 7)) &&
                                (!this.findCharacter(';', cep, 8))
                &&
                (!this.findCharacter('_', cep, 0)) && (!this.findCharacter('_', cep, 1))
                    && (!this.findCharacter('_', cep, 2)) &&
                        (!this.findCharacter('_', cep, 3)) &&
                            (!this.findCharacter('_', cep, 4)) &&
                                (!this.findCharacter('_', cep, 6)) &&
                                    (!this.findCharacter('_', cep, 7)) &&
                                        (!this.findCharacter('_', cep, 8))
                &&
                (!this.findCharacter(' ', cep, 0)) && (!this.findCharacter(' ', cep, 1))
                    && (!this.findCharacter(' ', cep, 2)) &&
                        (!this.findCharacter(' ', cep, 3)) && (!this.findCharacter(' ', cep, 4)) &&
                            (!this.findCharacter(' ', cep, 6)) && (!this.findCharacter(' ', cep, 7))
                                &&
                                (!this.findCharacter(' ', cep, 8))
                            ){
                arrayCep = cep;
            }else{
                return value.substring(0, value.length-1);
            }
        }else if(this.isDeleting(cep, arrayCep)){
            arrayCep.pop();
            if(!this.findCharacter('-', cep, 5)){
                inCep = false;
            }
        }

        let str = "";

        for(let i = 0; i < cep.length;i++){
            if(i == 4 && !inCep){
                str += cep[i] + '-';
                inCep = true;
            }else if(i < 9){
                str += cep[i];
            }
        }
        return str;
    }

    static isDeleting(array, varAux): boolean{
        return array.length < varAux.length ? true : false;
    }

    static isInserting(array, arrayAux) : boolean{
        return array.length >= arrayAux.length ? true : false;
    }
}