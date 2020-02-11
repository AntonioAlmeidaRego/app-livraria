import MaskUtil from "./MaskUtil";
import ValidationUtil from "./ValidationUtil";

let array = [];

export default class MaskPhone extends MaskUtil{
    private value: string;

    private valid: ValidationUtil;

    constructor(value: string) {
        super();
        this.value = value;
        this.valid = new ValidationUtil();
    }

    public mask(): string{
        const phone = this.value.split('');
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

        if(this.isInserting(phone, array)){
            if(!this.valid.isInvalidCharacter(arrayChars, phone, 1)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 2)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 5)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 6)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 7)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 8)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 9)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 11)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 12)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 13)
                && !this.valid.isInvalidCharacter(arrayChars, phone, 14)
            ){
                array = phone;
            }else{
                return this.value.substring(0, this.value.length-this.valid.totalInvalidCharactersPhone(arrayChars, phone));
            }
        }else if(this.isDeleting(phone, array)){
            array.pop();
        }

        let str = "";

        for(let i = 0; i < phone.length;i++){
            if(i == 0 && !this.valid.isExistCharacter('(', array, 0)){
                str += "(" + phone[i];
            }else if(i == 2 && !this.valid.isExistCharacter(')', array, 3)){
                str += phone[i] + ") ";
            }else if(i == 9 && !this.valid.isExistCharacter('-', array, 10)){
                str += phone[i] + "-";
            }else {
                str += phone[i];
            }
        }

        return str;
    }

    isInserting(array, auxArray): boolean {
        return super.isInserting(array, auxArray);
    }

    isDeleting(array, auxArray): boolean {
        return super.isDeleting(array, auxArray);
    }
}