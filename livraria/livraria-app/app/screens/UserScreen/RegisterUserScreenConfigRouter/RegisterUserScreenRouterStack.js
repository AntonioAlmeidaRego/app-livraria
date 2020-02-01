import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import RegisterUserScreen from "../RegisterUserScreen";


const RegisterUserRouterStack = createStackNavigator({
        RegisterUserScreen:{
            screen: RegisterUserScreen,
            navigationOptions:{
                header: null,
            }
        },
    },
    {
        initialRouteName: 'RegisterUserScreen',
    }
);

export default RegisterUserRouterStack;
