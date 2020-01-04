import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';

export default class TabComponent extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        ListEmptyComponent={
                            <Spinner/>
                        }
                        onEndReachedThreshold={100}
                        data={this.props.livros}
                        renderItem={({ item }) =>
                            [
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square large source={{ uri: 'https://livraria-pdf.herokuapp.com/livro/imagem/'+item.id }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.titulo}</Text>
                                        <Text note numberOfLines={1}>{item.sinopsie} . .</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Text>Detalhe</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            ]
                        }
                    />
                </Content>
            </Container>
        );
    }
}
