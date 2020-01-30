import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../../styles/StylesScreen";

export default class SpacePaddingBottomComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createPaddingBottom(this.props.space)]}>
                {this.props.children}
            </View>
        );
    }
}