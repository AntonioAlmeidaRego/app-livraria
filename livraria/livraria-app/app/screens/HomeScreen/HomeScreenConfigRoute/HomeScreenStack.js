import {createStackNavigator} from 'react-navigation';
import LivroScreenStack from '../../LivroScreen/LivroScreenConfigRoute/LivroScreenStack';
import HomeScreenRouter from './index';

const HomeScreenStack = createStackNavigator({
    HomeScreen:{
        screen: HomeScreenRouter,
        navigationOptions:{
            header: null,
        },
    },
    ListagemLivrosLinkedCategoria:{
        screen: LivroScreenStack,
    }
},
    {
        initialRouteName: 'HomeScreenRouter',
    },
);


export default HomeScreenStack;
