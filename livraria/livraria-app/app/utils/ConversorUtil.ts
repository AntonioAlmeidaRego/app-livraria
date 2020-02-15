export default class ConversorUtil {

    static convertsCommaToPoint(value: string): number{
        const array = value.split('');
        let str = "";

        for (let i = 0; i < array.length; i++) {
            if (array[i] == ",") {
                str += ".";
            } else {
                str += array[i];
            }
        }

        return parseFloat(str);
    }

    static convertsPointToComma(value: number): string{
        const valueString = value.toString();
        let existPoint = false;
        const array = valueString.split('');
        let str = "";

        for (let i = 0; i < array.length; i++) {
            if (array[i] == ".") {
                str += ",";
                existPoint = true;
            } else {
                str += array[i];
            }
        }

        if(!existPoint){
            return str+",00";
        }

        return str;
    }
}