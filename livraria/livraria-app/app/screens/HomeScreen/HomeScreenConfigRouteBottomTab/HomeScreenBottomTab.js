import * as React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreenStack from "../HomeScreenConfigRoute/HomeScreenStack";
import IconHome from 'react-native-vector-icons/Octicons';
import ContainerComponent from "../../../components/ContainerComponent";
import ContainerCenterComponent from "../../../components/ContainerCenterComponent";
import StylesScreen from "../../../styles/StylesScreen";

const homeScreenBottom = createMaterialBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreenStack,
            navigationOptions:{
                title: 'Home',
                size: 15,
            }
        },
    },
    {
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
        defaultNavigationOptions:{
            tabBarIcon: ()=> (<Icon>
                <IconHome name={'home'} color={'#fff'} size={25}/>
                              </Icon>)

        }
    }
);

export default homeScreenBottom;