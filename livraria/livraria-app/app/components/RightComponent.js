import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";
import SpaceRightComponent from "./componentsSpace/SpaceRightComponent";

export default class RightComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createCenter(),

            ]} >
                {this.props.children}
            </View>
        );
    }
}