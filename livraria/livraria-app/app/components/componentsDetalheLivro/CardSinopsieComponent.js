
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
    ListItem, Right
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";
import TextComponent from "../TextComponent";

export default class CardSinopsieComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                                   width={'100%'} height={'100%'} radius={15} padding={2}>
                <BorderComponent color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <TextComponent
                        color={"#000"}
                        size={18}
                        textAlign={'justify'}
                        justifyContent={'center'}
                        alignSelf={'center'}
                        alignItems={'center'}
                        upper
                        lineHeight={25}
                        text={this.props.sinopsie}
                    />
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}