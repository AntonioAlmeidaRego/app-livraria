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
import RowComponent from "../RowComponent";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import SpaceLeftComponent from "../componentsSpace/SpaceLeftComponent";
import CenterComponent from "../CenterComponent";

export default class CardHeaderComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent
                                   width={'100%'} height={'100%'} radius={15} padding={15}>
                <ContainerCenterComponent>
                    <Thumbnail square style={[StylesScreen.createWidth(145), StylesScreen.createHeight(195)]}
                               source={{uri: this.props.uri}} />
                    <SpaceTopComponent />

                </ContainerCenterComponent>
                <RowComponent>
                    <LeftComponent>
                        <TextComponent
                            text={this.props.title}
                            color={'#585858'}
                            size={18}
                        />
                    </LeftComponent>
                </RowComponent>
                <RowComponent>
                    <LeftComponent>
                        <TextComponent
                            text={'Lançamento '+this.props.year}
                            color={'#585858'}
                            size={16}
                        />
                    </LeftComponent>
                </RowComponent>
            </BoxContainerComponent>
        );
    }
}