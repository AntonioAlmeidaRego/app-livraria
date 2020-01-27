import React from 'react';
import {View, Text, Image} from 'react-native';
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
export default class CardLivroDescrition  extends React.Component{
    render() {
        return(
            <BoxContainerComponent
                justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                width={'100%'} height={'100%'} radius={15} padding={2}
                >
                <BorderComponent color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <RowComponent>
                        <LeftComponent>
                            <Thumbnail square style={[StylesScreen.createWidth(145), StylesScreen.createHeight(195)]}
                                       source={{uri: 'https://livraria-pdf.herokuapp.com/livro/imagem/'+this.props.id}} />
                        </LeftComponent>
                        <RightComponent>
                            <TextComponent
                                text={this.props.title}
                                upper
                                color={'#000'}
                                size={16}
                                weight={'bold'}
                            />
                            <TextComponent
                                text={this.props.subtitle}
                                upper
                                color={'#000'}
                                size={15}
                            />
                            <SpaceTopComponent />
                            <RowComponent style={[StylesScreen.createMarginRight(50)]}>
                                <LeftComponent value={0}>
                                    <Image
                                        style={[StylesScreen.createWidth(40), StylesScreen.createHeight(40)]}
                                        source={require('../../images/price.png')}
                                    />
                                </LeftComponent>
                                <RightComponent>
                                    <TextComponent
                                        text={'R$ '+ this.props.price}
                                        upper
                                        color={'#000'}
                                        size={20}
                                    />
                                </RightComponent>
                            </RowComponent>
                            <SpaceBottomComponent />
                            <Button onPress={() => this.props.onDetalheLivro(this.props.livro)}
                                    rounded style={[StylesScreen.createButtonColor('#694fad'),
                                    StylesScreen.createSpaceRight()]}>
                                <Icon>
                                    <IconInfo name={"info"} size={30} color={'#fff'}/>
                                </Icon>
                                <RightComponent>
                                    <TextComponent
                                        text={'Detalhe'}
                                        upper
                                        color={'#fff'}
                                        size={15}
                                    />
                                </RightComponent>
                            </Button>
                            <SpaceBottomComponent />
                        </RightComponent>
                    </RowComponent>
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}