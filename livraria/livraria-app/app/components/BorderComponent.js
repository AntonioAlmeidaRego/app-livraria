import React , {} from 'react';
import {View, Text, Dimensions} from "react-native";
import StylesScreen from "../styles/StylesScreen";
import {Button} from "native-base";

export default class BorderComponent extends React.Component{
    render() {
        return (
            [this.props.button !== undefined && (
                <Button style={[StylesScreen.createWidth(Dimensions.get('window').width), StylesScreen.createHeight(220)]} transparent onPress={() => this.props.button(this.props.object)}>
                    <View style={[
                        StylesScreen.createWidth( this.props.width),
                        StylesScreen.createHeight(this.props.height),
                        StylesScreen.createBorderRadius(this.props.radius),
                        StylesScreen.createPadding(this.props.padding),
                        this.props.border == true ? StylesScreen.createBorder(this.props.color, this.props.borderWidth, this.props.radius) : null,
                        this.props.style,
                        this.props.borderBottom == true ? StylesScreen.createBorderBottom(this.props.color, this.props.borderWidth, this.props.radius) : null,
                        this.props.borderTop == true ? StylesScreen.createBorderTop(this.props.color, this.props.borderWidth, this.props.radius) : null,
                        this.props.borderLeft == true ? StylesScreen.createBorderLeft(this.props.color, this.props.borderWidth, this.props.radius) : null,
                        this.props.borderRight == true ? StylesScreen.createBorderRight(this.props.color, this.props.borderWidth, this.props.radius) : null,
                    ]}>

                        {this.props.children}
                    </View>
                </Button>
            ),
            this.props.button == undefined &&(
                <View style={[
                    StylesScreen.createWidth( this.props.width),
                    StylesScreen.createHeight(this.props.height),
                    StylesScreen.createBorderRadius(this.props.radius),
                    StylesScreen.createPadding(this.props.padding),
                    this.props.border == true ? StylesScreen.createBorder(this.props.color, this.props.borderWidth, this.props.radius) : null,
                    this.props.style,
                    this.props.borderBottom == true ? StylesScreen.createBorderBottom(this.props.color, this.props.borderWidth, this.props.radius) : null,
                    this.props.borderTop == true ? StylesScreen.createBorderTop(this.props.color, this.props.borderWidth, this.props.radius) : null,
                    this.props.borderLeft == true ? StylesScreen.createBorderLeft(this.props.color, this.props.borderWidth, this.props.radius) : null,
                    this.props.borderRight == true ? StylesScreen.createBorderRight(this.props.color, this.props.borderWidth, this.props.radius) : null,
                ]}>

                    {this.props.children}
                </View>
            )]
        );
    }
}