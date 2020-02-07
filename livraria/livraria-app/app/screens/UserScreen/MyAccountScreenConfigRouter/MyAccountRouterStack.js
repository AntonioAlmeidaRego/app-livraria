import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import MyAccountScreen from "../MyAccountScreen";




const MyAccountRouterStack = createStackNavigator({
        MyAccountScreen:{
            screen: MyAccountScreen,
            navigationOptions:{
                header: null,
            }
        },
    },
    {
        initialRouteName: 'MyAccountScreen',
    }
);

export default MyAccountRouterStack;
