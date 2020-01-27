import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";
import ContainerComponent from "./ContainerComponent";

export default class CardItemComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createJustifyContent('space-around'),
                StylesScreen.createAlignSelf('auto'),
                StylesScreen.createAlignItems('center'),
                StylesScreen.createAlignContent('flex-start'),
                {direction: 'inherit', flexDirection: 'row', flexWrap: 'wrap'}
            ]}>
                {this.props.children}
            </View>
        );
    }
}