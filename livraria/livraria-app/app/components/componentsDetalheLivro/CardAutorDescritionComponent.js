import React from 'react';
import {View, Text, Image, Dimensions, FlatList} from 'react-native';
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
    Button,
    Icon, Right, Item, Input, ListItem
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import RowComponent from "../RowComponent";
import TextComponent from "../TextComponent";
import ContainerComponent from "../ContainerComponent";

export default class CardAutorDescritionComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                                   width={'100%'} height={'100%'} radius={15} padding={10}>
                <BorderComponent color={"#000"} value={1} width={'100%'} height={'100%'} radius={15} padding={10}>
                    <FlatList
                        data={this.props.autors}
                        renderItem={({ item })=>
                            [
                                <ContainerComponent>
                                    <RowComponent>
                                        <LeftComponent>
                                            <Thumbnail large source={{uri: 'https://livraria-pdf.herokuapp.com/autor/imagem/'+item.id}} />
                                        </LeftComponent>
                                        <RightComponent>
                                            <TextComponent
                                                text={item.nome}
                                                color={"#000"}
                                                size={22}
                                                textAlign={'center'}
                                                justifyContent={'center'}
                                                alignSelf={'center'}
                                                alignItems={'center'}
                                                weight={'bold'}
                                            />
                                        </RightComponent>
                                    </RowComponent>
                                    <LeftComponent>
                                        <TextComponent
                                            text={'Descrição...'}
                                            color={"#000"}
                                            size={18}
                                            weight={'bold'}
                                            padding={15}
                                        />
                                    </LeftComponent>
                                    <LeftComponent>
                                        <ListItem itemDivider>
                                            <TextComponent
                                                text={item.email}
                                                color={"#000"}
                                                size={16}
                                            />
                                        </ListItem>
                                    </LeftComponent>
                                </ContainerComponent>
                            ]
                        }
                    />
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}