import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpaceTopComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}
