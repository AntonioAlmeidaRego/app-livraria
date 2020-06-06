import LivrariaUtil from "./LivrariaUtil";

let inCep = false;
let inCPFPos2 = false;
let inCPFPos6 = false;
let inCPFPos9 = false;
let inPhonePos0 = false;
let inPhonePos3 = false;
let inPhonePos4 = false;
let inPhonePos10 = false;
let arrayCep = [];
let arrayCPF = [];
let arrayPhone = [];

export default class LivrariaUtilImpl extends LivrariaUtil{


    static maskCPF(value: string): string{
        const cpf = value.split('');

        if(this.isInserting(cpf, arrayCPF)){
            if((!this.findCharacter(',', cpf, 0)) && (!this.findCharacter(',', cpf, 1))
                && (!this.findCharacter(',', cpf, 2)) &&
                (!this.findCharacter(',', cpf, 4)) && (!this.findCharacter(',', cpf, 5)) &&
                (!this.findCharacter(',', cpf, 6)) && (!this.findCharacter(',', cpf, 8)) &&
                (!this.findCharacter(',', cpf, 9)) && (!this.findCharacter(',', cpf, 10))  &&
                (!this.findCharacter(',', cpf, 12)) && (!this.findCharacter(',', cpf, 13))
                &&
                (!this.findCharacter('.', cpf, 0)) && (!this.findCharacter('.', cpf, 1))
                && (!this.findCharacter('.', cpf, 2)) &&
                (!this.findCharacter('.', cpf, 4)) && (!this.findCharacter('.', cpf, 5)) &&
                (!this.findCharacter('.', cpf, 6)) && (!this.findCharacter('.', cpf, 8)) &&
                (!this.findCharacter('.', cpf, 9)) && (!this.findCharacter('.', cpf, 10))  &&
                    (!this.findCharacter('.', cpf, 12)) && (!this.findCharacter('.', cpf, 13))
                    &&
                    (!this.findCharacter('-', cpf, 0)) && (!this.findCharacter('-', cpf, 1))
                    && (!this.findCharacter('-', cpf, 2)) &&
                    (!this.findCharacter('-', cpf, 4)) && (!this.findCharacter('-', cpf, 5)) &&
                    (!this.findCharacter('-', cpf, 6)) && (!this.findCharacter('-', cpf, 8)) &&
                    (!this.findCharacter('-', cpf, 9)) && (!this.findCharacter('-', cpf, 10))  &&
                    (!this.findCharacter('-', cpf, 12)) && (!this.findCharacter('-', cpf, 13))
                    &&
                    (!this.findCharacter(';', cpf, 0)) && (!this.findCharacter(';', cpf, 1))
                    && (!this.findCharacter(';', cpf, 2)) &&
                    (!this.findCharacter(';', cpf, 4)) && (!this.findCharacter(';', cpf, 5)) &&
                    (!this.findCharacter(';', cpf, 6)) && (!this.findCharacter(';', cpf, 8)) &&
                    (!this.findCharacter(';', cpf, 9)) && (!this.findCharacter(';', cpf, 10))
                    && (!this.findCharacter(';', cpf, 12)) && (!this.findCharacter(';', cpf, 13))
                    &&
                    (!this.findCharacter('_', cpf, 0)) && (!this.findCharacter('_', cpf, 1))
                    && (!this.findCharacter('_', cpf, 2)) &&
                    (!this.findCharacter('_', cpf, 4)) &&
                    (!this.findCharacter('_', cpf, 5)) &&
                    (!this.findCharacter('_', cpf, 6)) &&
                    (!this.findCharacter('_', cpf, 8)) &&
                    (!this.findCharacter('_', cpf, 9))
                    && (!this.findCharacter('_', cpf, 10))
                    && (!this.findCharacter('_', cpf, 12)) && (!this.findCharacter('_', cpf, 13))
                    &&
                    (!this.findCharacter(' ', cpf, 0)) && (!this.findCharacter(' ', cpf, 1))
                    && (!this.findCharacter(' ', cpf, 2)) &&
                    (!this.findCharacter(' ', cpf, 4)) && (!this.findCharacter(' ', cpf, 5)) &&
                    (!this.findCharacter(' ', cpf, 6)) && (!this.findCharacter(' ', cpf, 8))
                    &&
                    (!this.findCharacter(' ', cpf, 9))
                    &&
                    (!this.findCharacter(' ', cpf, 10))
                    &&
                    (!this.findCharacter(' ', cpf, 12)) && (!this.findCharacter(' ', cpf, 13))){
                arrayCPF = cpf;
            }else{
                return value.substring(0, value.length-1);
            }
        }else if(this.isDeleting(cpf, arrayCPF)){
            arrayCPF.pop();
            if(!this.findCharacter('.', cpf, 3)){
                inCPFPos2 = false;
            }else if(!this.findCharacter('.', cpf, 7)){
                inCPFPos6 = false;
            }else if(!this.findCharacter('-', cpf, 11)){
                inCPFPos9 = false;
            }
        }

        let str = [];

        for(let i = 0; i < cpf.length;i++){
            if(i == 2 && !inCPFPos2){
                str += cpf[i] + '.';
                inCPFPos2 = true;
            }else if(i == 6 && !inCPFPos6){
                str += cpf[i] + ".";
                inCPFPos6 = true;
            }else if(i == 10 && !inCPFPos9){
                str += cpf[i] + "-";
                inCPFPos9 = true;
            }else {
                str += cpf[i];
            }
        }


        return str;
    }

    maskPhone(phone: string): string {
        return super.maskPhone(phone);
    }

     maskCep(cep: string): string {
         return super.maskCep(cep);
     }

    maskCpf(cpf: string): string {
        return super.maskCpf(cpf);
    }

    maskRg(rg: string): string {
        return super.maskRg(rg);
    }

    calPMT(pv: number, n: number, i: string): number {
        return super.calPMT(pv, n, i);
    }

    checkPasswords(password: string, confirmPassword: string): boolean {
        if(password != "" && confirmPassword != ""){
            if(password == confirmPassword){
                return true;
            }
        }
        return false;
    }


}
