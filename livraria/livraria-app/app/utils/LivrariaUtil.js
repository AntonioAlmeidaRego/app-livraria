let inCep = false;

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

    static maskCep(value: string): string{
        const cep = value.split('');
        let str = "";

        if(!this.findCharacter('-', cep)){
            inCep = false;
        }

        for(let i = 0; i < cep.length;i++){
            if(i == 4 && !inCep){
                inCep = true;
                str += cep[i] + '-';
            }else if(i < 9){
                str += cep[i];
            }
        }



        return str;
    }
}