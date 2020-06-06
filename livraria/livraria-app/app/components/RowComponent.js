import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class RowComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createJustifyContent('space-around'),
                StylesScreen.createAlignSelf('auto'),
                StylesScreen.createAlignItems('center'),
                StylesScreen.createAlignContent('flex-start'),
                {direction: 'inherit', flexDirection: 'row', flex: 1,},

                this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}
