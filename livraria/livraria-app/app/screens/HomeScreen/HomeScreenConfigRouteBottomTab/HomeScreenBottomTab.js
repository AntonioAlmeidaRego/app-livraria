
import React from 'react';

import {Icon} from 'native-base';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreenStack from "../HomeScreenConfigRoute/HomeScreenStack";
import IconHome from 'react-native-vector-icons/Octicons';
import ShoppingCartScreenStack from "../../ShoppingCartScreen/ShoppingCartConfigRoute/ShoppingCartScreenStack";
import IconShoppingCart from "react-native-vector-icons/MaterialIcons";
import IconLogout from 'react-native-vector-icons/AntDesign';
import IconUser from 'react-native-vector-icons/AntDesign';
import LogoutScreenStackRouter from "../../LogoutScreen/LogoutScreenConfig/LogoutScreenRouter";
import UserScreenRouter from "../../UserScreen/UserScreenRegisterConfigRouter/UserScreenRegisterStackRouter";


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
                tabBarIcon: ()=> (<Icon>
                    <IconShoppingCart name={'shopping-cart'} color={'#fff'} size={25}/>
                </Icon>)
            }
        },

        UserScreen:{
            screen: UserScreenRouter,
            navigationOptions:{
                title: 'Usuário',
                tabBarIcon: ()=> (<Icon>
                    <IconUser name={'user'} color={'#fff'} size={25}/>
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
        barStyle: { backgroundColor: '#DF5757' },
    }

);

export default homeScreenBottom;
