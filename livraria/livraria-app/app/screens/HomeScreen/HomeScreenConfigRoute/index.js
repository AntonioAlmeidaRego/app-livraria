import {createSwitchNavigator} from 'react-navigation';
import HomeScreen from '../HomeScreen';

const HomeScreenRouter = createSwitchNavigator({
        HomeScreen:{
            screen: HomeScreen,
        }
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default HomeScreenRouter;
