import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../HomeScreen/HomeScreen';
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
