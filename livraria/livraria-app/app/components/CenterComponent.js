import React from 'react';
import {View} from 'react-native';
import ContainerComponent from "./ContainerComponent";
import StylesScreen from '../styles/StylesScreen';

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
