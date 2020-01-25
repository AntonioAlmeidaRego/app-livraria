import React , {} from 'react';
import {View, Text} from "react-native";
import StylesScreen from "../styles/StylesScreen";

export default class BoxContainerComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBox(this.props.justifyContent, this.props.alignSelf,
                    this.props.alignItems, this.props.width, this.props.height, this.props.radius, this.props.padding)]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}