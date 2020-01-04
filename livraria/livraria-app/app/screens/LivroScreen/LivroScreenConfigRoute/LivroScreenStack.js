import {createStackNavigator} from 'react-navigation';
import LivroScreen from '../LivroScreen';
import HomeScreenStack from '../../HomeScreen/HomeScreenConfigRoute/HomeScreenStack';
import LivroScreenRouter from './index';

const LivroScreenStack = createStackNavigator({
    LivroScreen:{
        screen: LivroScreenRouter,
    },
    HomeScreen:{
        screen: HomeScreenStack,
    }
},
    {
        initialRouteName: 'LivroScreenRouter',
    }

);

export default LivroScreenStack;
