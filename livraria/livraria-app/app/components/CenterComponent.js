import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class CenterComponent extends React.Component{
    render() {
        return (
            <View style={StylesScreen.createFlex(6)} >
                {this.props.children}
            </View>
        );
    }
}