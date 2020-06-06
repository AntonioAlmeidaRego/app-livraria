import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpaceBottomComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceBottom(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}
