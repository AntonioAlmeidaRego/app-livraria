import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class BoxInputComponent extends React.Component{
    render() {
        return (
            <View style={[
                StylesScreen.createHeight(this.props.height),
                StylesScreen.createFlex(this.props.value),
                StylesScreen.createJustifyContent(this.props.justifyContent),
                StylesScreen.createAlignSelf(this.props.alignSelf),
                StylesScreen.createAlignItems(this.props.alignItems)
            ]} >
                {this.props.children}
            </View>
        );
    }
}
