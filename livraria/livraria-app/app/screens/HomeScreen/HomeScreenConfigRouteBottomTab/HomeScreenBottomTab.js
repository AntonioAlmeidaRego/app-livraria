import * as React from 'react';
import {View} from 'react-native';
import {Icon, List} from 'native-base';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreenStack from "../HomeScreenConfigRoute/HomeScreenStack";
import IconHome from 'react-native-vector-icons/Octicons';
import ContainerComponent from "../../../components/ContainerComponent";
import ContainerCenterComponent from "../../../components/ContainerCenterComponent";
import StylesScreen from "../../../styles/StylesScreen";
import ShoppingCartScreenStack from "../../ShoppingCartScreen/ShoppingCartConfigRoute/ShoppingCartScreenStack";
import IconShoppingCart from "react-native-vector-icons/MaterialIcons";
import IconLogout from 'react-native-vector-icons/AntDesign';
import LogoutScreenStackRouter from "../../LogoutScreen/LogoutScreenConfig/LogoutScreenRouter";


const homeScreenBottom = createMaterialBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreenStack,
            navigationOptions:{
                title: 'Home',
                size: 15,
                tabBarIcon: ()=> (<Icon>
                    <IconHome name={'home'} color={'#fff'} size={25}/>
                </Icon>)
            }
        },
        ShoppingCartScreen:{
            screen: ShoppingCartScreenStack,
            navigationOptions:{
                title: 'Carrinho',
                size: 15,
                tabBarIcon: ()=> (<Icon>
                    <IconShoppingCart name={'shopping-cart'} color={'#fff'} size={25}/>
                </Icon>)
            }
        },
        LogoutScreen:{
            screen: LogoutScreenStackRouter,
            navigationOptions:{
                title: 'Sair',
                size: 15,
                tabBarIcon: ()=> (<Icon>
                    <IconLogout name={'logout'} color={'#fff'} size={25}/>
                </Icon>)
            }
        }
    },

    {
        activeColor: '#f0edf6',
        inactiveColor: '#c2c0c7',
        barStyle: { backgroundColor: '#694fad' },
    }

);

export default homeScreenBottom;