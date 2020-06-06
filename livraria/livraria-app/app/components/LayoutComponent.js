import React from 'react';
import {View} from "react-native";
import StylesScreen from '../styles/StylesScreen';

export default class LayoutComponent extends React.Component{
    render() {
        return (
            <View style={StylesScreen.createLayout()}>
                {this.props.children}
            </View>
        );
    }
}
