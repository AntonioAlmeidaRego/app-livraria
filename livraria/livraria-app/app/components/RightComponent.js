import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class RightComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createRight(),
                this.props.style,
            ]} >
                {this.props.children}
            </View>
        );
    }
}
