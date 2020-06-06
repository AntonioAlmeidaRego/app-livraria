import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpaceRightComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceRight(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}
