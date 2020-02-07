import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import UserScreen from "../UserScreen";
import RegisterUserScreen from "../RegisterUserScreen";
import RegisterUserRouterStack from "../RegisterUserScreenConfigRouter/RegisterUserScreenRouterStack";
import MyAccountRouterStack from "../MyAccountScreenConfigRouter/MyAccountRouterStack";


const UserScreenRouter = createStackNavigator({
        UserScreen:{
            screen: UserScreen,
        },
        RegisterUser:{
            screen: RegisterUserRouterStack,
            navigationOptions:{
                header: null,
            }
        },
        MyAccount:{
            screen: MyAccountRouterStack,
            navigationOptions:{
                header: null,
            }
        },

    },
    {
        initialRouteName: 'UserScreen',
    }
);

export default UserScreenRouter;
