import {AsyncStorage} from 'react-native';

export default class SessionController {

    criarSession = async (key, objeto) => {
        const session = await AsyncStorage.getItem(key);
        if(session != null){
            await AsyncStorage.removeItem(key);
        }
        await AsyncStorage.setItem(key,
            JSON.stringify(objeto));
    };

    getSession = async (key) => {
        return await JSON.parse(await AsyncStorage.getItem(key)) || [];
    };

    removeSession = async (key)=>{
        await AsyncStorage.removeItem(key);
    };

    clearSessions = async ()=>{
        await AsyncStorage.clear();
    };
}
