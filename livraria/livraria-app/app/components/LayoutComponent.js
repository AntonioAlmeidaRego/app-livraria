import React , {} from 'react';
import {View, Text} from "react-native";
import {Button} from 'native-base';
import StylesScreen from "../styles/StylesScreen";

export default class LayoutComponent extends React.Component{
    render() {
        return (
            <View style={StylesScreen.createLayout()}>
                {this.props.children}
            </View>
        );
    }
}