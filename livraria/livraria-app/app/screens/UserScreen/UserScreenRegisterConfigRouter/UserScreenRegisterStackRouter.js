import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import UserScreenRegister from "../UserScreenRegister";


const UserScreenRouter = createStackNavigator({
        UserScreenRegister:{
            screen: UserScreenRegister,
        }
    },
    {
        initialRouteName: 'UserScreenRegister',
    }
);

export default UserScreenRouter;
