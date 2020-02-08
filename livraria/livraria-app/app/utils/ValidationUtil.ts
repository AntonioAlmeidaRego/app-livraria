export default class ValidationUtil {
    isInvalidCharacter(arrayCharacters, value, pos: number): boolean{
        for(let j = 0; j < arrayCharacters.length; j++){
            if(value[pos] == arrayCharacters[j]){
                return true;
            }
        }

        return false;
    }
}