import React, { Component } from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import {Dimensions} from 'react-native';
import LogoutScreen from "../LogoutScreen";


const LogoutScreenStackRouter = createStackNavigator(
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