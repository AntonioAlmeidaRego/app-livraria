import React, { Component } from "react";
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import {Dimensions} from 'react-native';
import LogoutScreen from "../LogoutScreen";


const LogoutScreenStackRouter = createSwitchNavigator(
    {
        LogoutScreen: {
            screen: LogoutScreen
        }
    },
    {
        initialRouteName: 'LogoutScreen',
    }
);


export default LogoutScreenStackRouter;