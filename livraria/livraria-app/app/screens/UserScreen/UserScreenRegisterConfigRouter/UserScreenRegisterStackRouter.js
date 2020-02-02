import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import UserScreen from "../UserScreen";
import RegisterUserScreen from "../RegisterUserScreen";
import RegisterUserRouterStack from "../RegisterUserScreenConfigRouter/RegisterUserScreenRouterStack";


const UserScreenRouter = createStackNavigator({
        UserScreen:{
            screen: UserScreen,
        },
        RegisterUser:{
            screen: RegisterUserRouterStack,
            navigationOptions:{
                header: null,
            }
        }

    },
    {
        initialRouteName: 'UserScreen',
    }
);

export default UserScreenRouter;
