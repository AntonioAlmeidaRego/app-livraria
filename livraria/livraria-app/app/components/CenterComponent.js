import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../styles/StylesScreen";
import ContainerComponent from "./ContainerComponent";

export default class CenterComponent extends React.Component{
    render() {
        return (
            <ContainerComponent>
                <View style={StylesScreen.createCenter()} >
                    {this.props.children}
                </View>
            </ContainerComponent>
        );
    }
}