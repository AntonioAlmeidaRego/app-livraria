import React, {} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import CardLivroDescrition from "./CardLivroDescrition";
import StylesScreen from "../styles/StylesScreen";

export default class TabComponent extends React.Component{

    render() {
        return (
            <Content>
                <FlatList
                    ListEmptyComponent={
                        <Spinner color={'#694fad'}/>
                    }
                    data={this.props.array}
                    renderItem={({ item }) =>
                        [
                            <CardLivroDescrition livro={item} onDetalheLivro={this.props.onDetalheLivro} price={item.preco} subtitle={item.titulo} id={item.id} title={item.titulo}/>
                        ]
                    }
                />
                <View style={StylesScreen.createSpaceBottom()}>

                </View>
            </Content>
        );
    }
}
