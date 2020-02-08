import MaskUtil from "./MaskUtil";
import ValidationUtil from "./ValidationUtil";

let inCep = false;

export default class MaskCep extends MaskUtil{
    private value: string;
    private lenght: number;
    private array;
    private valid: ValidationUtil;

    constructor(value: string) {
        super();
        this.value = value;
        this.lenght = 9;
        this.array = [];
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

        if(this.isInserting(cep, this.array)){
            if(this.valid.isInvalidCharacter(arrayChars, cep, 0)
            && this.valid.isInvalidCharacter(arrayChars, cep, 1)
            && this.valid.isInvalidCharacter(arrayChars, cep, 2)
            && this.valid.isInvalidCharacter(arrayChars, cep, 3)
            && this.valid.isInvalidCharacter(arrayChars, cep, 4)
            && this.valid.isInvalidCharacter(arrayChars, cep, 6)
            && this.valid.isInvalidCharacter(arrayChars, cep, 7)
            && this.valid.isInvalidCharacter(arrayChars, cep, 8)){
                this.array = cep;
            }
        }else if(this.isDeleting(cep, this.array)){
            this.array.pop();
            if(this.valid.isInvalidCharacter(arrayChars, cep, 5)){
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

    isDeleting(array, auxArray): boolean {
        return super.isDeleting(array, auxArray);
    }

    isInserting(array, auxArray): boolean {
        return super.isInserting(array, auxArray);
    }
}