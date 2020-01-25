import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class LeftComponent extends React.Component{
    render() {
        return (
            <View style={StylesScreen.createLeft(this.props.value)} >
                {this.props.children}
            </View>
        );
    }
}