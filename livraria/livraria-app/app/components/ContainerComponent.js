import React , {} from 'react';
import {View, Text} from "react-native";
import StylesScreen from "../styles/StylesScreen";

export default class ContainerComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createContainer()]}>
                {this.props.children}
            </View>
        );
    }
}