import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class RowComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createFlexDirection('row'), StylesScreen.createFlex(1)]}>
                {this.props.children}
            </View>
        );
    }
}