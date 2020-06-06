import {createSwitchNavigator} from 'react-navigation';
import LivroScreen from '../LivroScreen';


const LivroScreenRouter = createSwitchNavigator({
        LivroScreen:{
            screen: LivroScreen,
        }
    },
    {
        initialRouteName: 'LivroScreen',
    }
);

export default LivroScreenRouter;
