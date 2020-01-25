import React from 'react';
import {View, Text, Image} from 'react-native';
import {
    Header,
    Body,
    Content,
    Container,
    Tabs,
    Tab,
    Title,
    Left,
    CardItem,
    Thumbnail,
    Card,
    Right,
    Button, Icon
} from 'native-base';
import StylesScreen from "../../styles/StylesScreen";
import BoxContainerComponent from "../BoxContainerComponent";
import ContainerCenterComponent from "../ContainerCenterComponent";
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";
import TextComponent from "../TextComponent";

export default class CardHeaderComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                                   width={'100%'} height={'100%'} radius={15} padding={10}>
                <ContainerCenterComponent>
                    <Thumbnail square style={[StylesScreen.createWidth(300), StylesScreen.createHeight(500)]}
                               source={{uri: this.props.uri}} />
                    <SpaceTopComponent />
                    <TextComponent
                        text={this.props.title}
                        color={'#000'}
                        size={24}
                        weight={'bold'}
                        justifyContent={'center'}
                        alignSelf={'center'}
                        alignItems={'center'}
                        upper
                          />
                </ContainerCenterComponent>
            </BoxContainerComponent>
        );
    }
}