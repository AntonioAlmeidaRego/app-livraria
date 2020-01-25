export default class ConversorUtil {

    convertsCommaToPoint(value: string): number{
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
}