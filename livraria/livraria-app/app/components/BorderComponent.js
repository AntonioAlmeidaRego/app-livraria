import React , {} from 'react';
import {View, Text} from "react-native";
import StylesScreen from "../styles/StylesScreen";

export default class BorderComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createBorder(this.props.color, this.props.value, this.props.radius),
                StylesScreen.createWidth( this.props.width),
                StylesScreen.createHeight(this.props.height),
                StylesScreen.createBorderRadius(this.props.radius),
                StylesScreen.createPadding(this.props.padding)
                ]}>
                {this.props.children}
            </View>
        );
    }
}