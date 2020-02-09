export default class ValidationUtil {
    isInvalidCharacter(arrayCharacters, value, pos: number): boolean{
        for(let j = 0; j < arrayCharacters.length; j++){
            if(value[pos] == arrayCharacters[j]){
                return true;
            }
        }

        return false;
    }

    totalInvalidCharactersPhone(arrayCharacters, value, pos0: number = 0, pos3: number = 3, pos4: number = 4,
                                pos10: number = 10): number{
        let total = 0;
        for(let i = 0; i < arrayCharacters.length; i++){
            for(let j = 0; j < value.length; j++){
                if(j != pos0 && j != pos3 && j != pos4 && j != pos10){
                    if(value[j] == arrayCharacters[i]){
                        total++;
                    }
                }
            }
        }
        return total;
    }

    totalInvalidCharacters(arrayCharacters, value, pos: number): number{
        let total = 0;
        for(let i = 0; i < arrayCharacters.length; i++){
            for(let j = 0; j < value.length; j++){
                if(j != pos){
                    if(value[j] == arrayCharacters[i]){
                        total++;
                    }
                }
            }
        }
        return total;
    }
}