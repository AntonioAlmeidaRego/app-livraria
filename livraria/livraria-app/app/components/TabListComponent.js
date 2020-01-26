import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import CategoriaController from '../controllers/CategoriaController';


export default class TabListComponent extends React.Component{

    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        ListEmptyComponent={
                            <Spinner color={'#694fad'}/>
                        }
                        data={this.props.array}
                        renderItem={({ item }) =>
                            [
                                <ListItem thumbnail>
                                    <Body>
                                        <Text>{item.nome}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={() => this.props.onDetalhe(item)} transparent>
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
