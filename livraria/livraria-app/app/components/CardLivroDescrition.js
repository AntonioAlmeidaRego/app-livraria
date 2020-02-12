import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, ListItem} from 'native-base';
import StylesScreen from "../styles/StylesScreen";
import IconInfo from 'react-native-vector-icons/Octicons';
import BoxContainerComponent from "./BoxContainerComponent";
import BorderComponent from "./BorderComponent";
import RowComponent from "./RowComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import TextComponent from "./TextComponent";
import SpaceTopComponent from "./componentsSpace/SpaceTopComponent";
import SpaceBottomComponent from "./componentsSpace/SpaceBottomComponent";
import CenterComponent from "./CenterComponent";
import SpaceLeftComponent from "./componentsSpace/SpaceLeftComponent";
import LayoutComponent from "./LayoutComponent";

const urlImage = "https://livraria-pdf.herokuapp.com/livro/imagem/";
const urlLocalImage = "http://192.168.1.7:8080/livro/imagem/";
export default class CardLivroDescrition  extends React.Component{
    render() {
        return(
            <LayoutComponent

                >
                <BorderComponent button={this.props.onDetalheLivro}
                                 object={this.props.livro} color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <RowComponent>
                        <LeftComponent>
                            <Thumbnail square style={[StylesScreen.createWidth(145), StylesScreen.createHeight(195)]}
                                       source={{uri: urlLocalImage+this.props.id}} />
                        </LeftComponent>
                        <RightComponent>
                            <TextComponent
                                text={this.props.title}
                                upper
                                color={'#000'}
                                size={14}
                                weight={'bold'}
                            />
                            <TextComponent
                                text={this.props.subtitle}
                                upper
                                color={'#000'}
                                size={11}
                            />
                            <RowComponent>
                                <CenterComponent>
                                    <TextComponent
                                        text={'R$ '+ this.props.price}
                                        upper
                                        color={'#000'}
                                        size={25}
                                    />
                                    <TextComponent
                                        text={'1x de R$ 9.32 s/ juros'}
                                        size={16}
                                        color={'#b3b1b8'}
                                    />
                                    <SpaceTopComponent space={6} />
                                    <RowComponent>
                                        <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                        <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                        <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                        <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                        <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                    </RowComponent>
                                </CenterComponent>
                            </RowComponent>
                            <SpaceBottomComponent space={3} />
                        </RightComponent>
                    </RowComponent>
                </BorderComponent>
            </LayoutComponent>
        );
    }
}