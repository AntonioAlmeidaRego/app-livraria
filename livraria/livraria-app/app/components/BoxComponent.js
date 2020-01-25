import React , {} from 'react';
import {View, Text} from "react-native";
import StylesScreen from "../styles/StylesScreen";

export default class BoxComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen]}>
                {this.props.children}
            </View>
        );
    }
}