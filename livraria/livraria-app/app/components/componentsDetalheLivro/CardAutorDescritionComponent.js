import React from 'react';
import {FlatList} from 'react-native';
import {ListItem, Thumbnail} from 'native-base';
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
                                   width={'100%'} height={'100%'} radius={15} padding={2}>
                <BorderComponent color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
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
