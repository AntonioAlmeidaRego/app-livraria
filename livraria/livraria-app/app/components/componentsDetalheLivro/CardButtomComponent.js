import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
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
import LeftComponent from "../LeftComponent";
import BorderComponent from "../BorderComponent";

export default class CardButtomComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent
                width={'100%'} height={'100%'} radius={15} padding={15}>
                <BorderComponent color={"#c2c0c7"} borderTop={true} borderBottom={true} borderWidth={0.9} width={Dimensions.get('window').width} height={'100%'} padding={2}>
                    <Button transparent>
                        {this.props.renderIconLeft}
                        {this.props.textComponent}
                        {this.props.renderIconRight}
                    </Button>
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}