import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpaceLeftComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceLeft(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}
