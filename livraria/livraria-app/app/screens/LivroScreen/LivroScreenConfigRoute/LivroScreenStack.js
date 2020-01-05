import {createStackNavigator} from 'react-navigation';
import LivroScreenRouter from './index';
import HomeScreen from '../../HomeScreen/HomeScreen';
import HomeScreenRouter from '../../HomeScreen/HomeScreenConfigRoute';
import LivroScreen from '../LivroScreen';
import DetalheLivroScreen from '../DetalheLivroScreen';

const LivroScreenStack = createStackNavigator({
    LivroScreen:{
        screen: LivroScreen,
    },
    HomeScreen:{
        screen: HomeScreen,
    },
    DetalheLivro:{
        screen: DetalheLivroScreen,
    }
},
    {
        initialRouteName: 'LivroScreen',
    }

);

export default LivroScreenStack;
