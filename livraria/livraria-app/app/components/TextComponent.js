import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../../app/styles/StylesScreen";

export default class TextComponent extends React.Component{
    render() {

        return (
            <View style={StylesScreen.createContainerText()}>
                <Text style={[StylesScreen.createText(this.props.color, this.props.size,
                    this.props.weight, this.props.fontFamily, this.props.textAlign, this.props.justifyContent, this.props.alignSelf, this.props.alignItems,
                    this.props.padding),
                    this.props.upper == true ? StylesScreen.createToLocaleUppercase() : {},
                    this.props.lower == true ? StylesScreen.createToLocaleLowerCase() : {},
                    this.props.lineHeight !== undefined ? StylesScreen.createLineHeight(this.props.lineHeight) : {},
                    this.props.style,
                ]}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}