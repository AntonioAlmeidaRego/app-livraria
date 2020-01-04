import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
    Header,
    Body,
    Content,
    Container,
    Tabs,
    Tab,
    Spinner,
    ListItem,
    Right,
    Button,
    Left,
    Thumbnail,
} from 'native-base';

export default class ListComponent extends React.Component{

    render() {
        return (
            <FlatList
                ListEmptyComponent={
                    <Spinner/>
                }
                data={this.props.array}
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
        );
    }
}
