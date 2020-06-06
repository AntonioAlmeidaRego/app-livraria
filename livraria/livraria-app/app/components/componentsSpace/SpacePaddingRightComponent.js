import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpacePaddingRightComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createPaddingLeft(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}
