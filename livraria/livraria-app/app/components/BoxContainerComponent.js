import React from 'react';
import {View} from "react-native";
import StylesScreen from "../styles/StylesScreen";

export default class BoxContainerComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createContainer(), this.props.background !== undefined ? StylesScreen.createColorBackground(this.props.background) : null]}>
                <View style={[StylesScreen.createBox(this.props.justifyContent, this.props.alignSelf,
                    this.props.alignItems, this.props.width, this.props.height, this.props.radius, this.props.padding)]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
