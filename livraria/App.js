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

const switchRoute = createSwitchNavigator({
    HomeScreen: {
      screen: HomeScreenStack,
    },

    LivroScreen:{
      screen: LivroScreenStack,
    }
},
    {
        initialRouteName: 'HomeScreen',
    }
);

export default createAppContainer(switchRoute);


