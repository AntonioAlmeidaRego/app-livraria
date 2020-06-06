import React from 'react';
import {View} from 'react-native';
import StylesScreen from "../styles/StylesScreen";

export default class ContainerCenterComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createContainerText(), StylesScreen.createFlex(1), this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}
