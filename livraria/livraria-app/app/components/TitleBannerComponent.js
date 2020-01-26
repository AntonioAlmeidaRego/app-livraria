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
import StylesScreen from "../styles/StylesScreen";
import ContainerComponent from "./ContainerComponent";
import RowComponent from "./RowComponent";
import BorderComponent from "./BorderComponent";
import BoxContainerComponent from "./BoxContainerComponent";
import TextComponent from "./TextComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

export default class TitleBannerComponent extends React.Component{
    render(){
        return (
                <BoxContainerComponent
                    justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                    width={85} height={85} radius={20}
                >
                    <BorderComponent
                        color={"#000"} value={0.98}
                        radius={200}
                        style={[StylesScreen.createBackground('#694fad')]}>
                        <RowComponent>
                            <LeftComponent>
                                <Thumbnail  style={[StylesScreen.createBackground('#694fad'), StylesScreen.createWidth(100),
                                    StylesScreen.createHeight(30)]} large source={{uri: this.props.uri}}/>
                            </LeftComponent>
                            <RightComponent>
                                <ContainerComponent>
                                    <TextComponent
                                        textAlign={'center'}
                                        justifyContent={'center'}
                                        alignSelf={'center'}
                                        alignItems={'center'}
                                        size={20}
                                        upper
                                        color={'#fff'}
                                        text={this.props.title}
                                    />
                                </ContainerComponent>
                            </RightComponent>
                        </RowComponent>
                    </BorderComponent>
                </BoxContainerComponent>
        );
    }
}