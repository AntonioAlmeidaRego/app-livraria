/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './livraria-app/app/screens/HomeScreen/HomeScreen';
import LivroScreen from './livraria-app/app/screens/LivroScreen/LivroScreen';
import HomeScreenStack from './livraria-app/app/screens/HomeScreen/HomeScreenConfigRoute/HomeScreenStack';
import LivroScreenStack from './livraria-app/app/screens/LivroScreen/LivroScreenConfigRoute/LivroScreenStack';
import HomeScreenBottomTab from './livraria-app/app/screens/HomeScreen/HomeScreenConfigRouteBottomTab/HomeScreenBottomTab';
import ShoppingCartScreenStack from './livraria-app/app/screens/ShoppingCartScreen/ShoppingCartConfigRoute/ShoppingCartScreenStack';
import LogoutScreenStackRouter from "./livraria-app/app/screens/LogoutScreen/LogoutScreenConfig/LogoutScreenRouter";

const switchRoute = createSwitchNavigator({
        HomeScreen: {
            screen: HomeScreenBottomTab,
        },

        LivroScreen:{
            screen: LivroScreenStack,
        },

        ShoppingCartScreen:{
            screen: ShoppingCartScreenStack,
        },

        LogoutScreen:{
            screen: LogoutScreenStackRouter,
        }
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default createAppContainer(switchRoute);


