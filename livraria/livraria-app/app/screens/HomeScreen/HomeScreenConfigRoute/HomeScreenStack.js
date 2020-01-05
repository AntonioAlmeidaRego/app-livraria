import {createStackNavigator} from 'react-navigation';
import LivroScreen from '../../LivroScreen/LivroScreen';
import HomeScreen from '../HomeScreen';
import DetalheLivroScreen from '../../LivroScreen/DetalheLivroScreen';

const HomeScreenStack = createStackNavigator({
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:{
            header: null,
        },
    },
    ListagemLivrosLinkedCategoria:{
        screen: LivroScreen,
    },
    DetalheLivro:{
        screen: DetalheLivroScreen,
    }
},
    {
        initialRouteName: 'HomeScreen',
    },
);


export default HomeScreenStack;
