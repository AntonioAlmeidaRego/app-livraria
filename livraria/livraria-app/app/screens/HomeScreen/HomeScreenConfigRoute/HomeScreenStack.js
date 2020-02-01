
import {createStackNavigator} from 'react-navigation';
import LivroScreen from '../../LivroScreen/LivroScreen';
import HomeScreen from '../HomeScreen';
import DetalheLivroScreen from '../../LivroScreen/DetalheLivroScreen';
import ShoppingCartScreen from "../../ShoppingCartScreen/ShoppingCartScreen";
import RegisterUserScreen from "../../UserScreen/RegisterUserScreen";

const HomeScreenStack = createStackNavigator({
        HomeScreen:{
            screen: HomeScreen,
            navigationOptions:{
                header: null,
            },
        },
        ListagemLivrosLinkedCategoria:{
            screen: LivroScreen,
            headerStyle: {
                backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
        },
        DetalheLivro:{
            screen: DetalheLivroScreen,
            headerStyle: {
                backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
        },

        ShoppingCartScreen:{
            screen: ShoppingCartScreen,
            headerStyle: {
                backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
        }
    },
    {
        initialRouteName: 'HomeScreen',
    },
);


export default HomeScreenStack;