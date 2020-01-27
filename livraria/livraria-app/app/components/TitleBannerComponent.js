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

                    width={85} height={85} radius={20}
                >
                    <RowComponent>
                        <LeftComponent>
                            <TextComponent
                                size={20}
                                upper
                                color={'#694fad'}
                                text={this.props.title}
                            />
                        </LeftComponent>
                    </RowComponent>
                </BoxContainerComponent>
        );
    }
}