import MaskUtil from "./MaskUtil";
import ValidationUtil from "./ValidationUtil";

let array = [];
export default class MaskCep extends MaskUtil{
    private value: string;

    private valid: ValidationUtil;

    constructor(value: string) {
        super();
        this.value = value;
        this.valid = new ValidationUtil();
    }

    public mask(): string{
        const cep = this.value.split('');
        const arrayChars = [
            '.',
            ';',
            ':',
            ',',
            '_',
            '*',
            '&',
            '%',
            '$',
            '#',
            '@',
            '!',
            '-',
            '=',
            '+',
            '/',
            '|',
            '\\',
            '?',
        ];

        if(this.isInserting(cep, array)){
            if(!this.valid.isInvalidCharacter(arrayChars, cep, 0)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 1)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 2)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 3)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 4)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 6)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 7)
            && !this.valid.isInvalidCharacter(arrayChars, cep, 8)){
                array = cep;
            }else{
                return this.value.substring(0, this.value.length-this.valid.totalInvalidCharacters(arrayChars, cep, 5));
            }
        }else if(this.isDeleting(cep, array)){
            array.pop();
        }

        let str = "";

        for(let i = 0; i < cep.length;i++){
            if(i == 4 && !this.valid.isInvalidCharacter(arrayChars, array, 5)){
                str += cep[i] + '-';
            }else if(i < 9){
                str += cep[i];
            }
        }
        return str;
    }

    isDeleting(array, auxArray): boolean {
        return super.isDeleting(array, auxArray);
    }

    isInserting(array, auxArray): boolean {
        return super.isInserting(array, auxArray);
    }
}
