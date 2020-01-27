
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
import LayoutComponent from "../LayoutComponent";

export default class CardSinopsieComponent extends React.Component{
    render() {
        return (
            <LayoutComponent>
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
            </LayoutComponent>
        );
    }
}