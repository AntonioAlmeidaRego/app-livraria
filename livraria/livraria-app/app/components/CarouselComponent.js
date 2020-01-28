import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, ListItem} from 'native-base';
import StylesScreen from "../styles/StylesScreen";
import LayoutComponent from "./LayoutComponent";
import CardLivroDescrition from "./CardLivroDescrition";

export default class CarouselComponent extends React.Component{
    render() {
        return (
            <LayoutComponent>
                <ScrollView
                    horizontal
                >
                {this.props.array.map(item=>
                    <CardLivroDescrition livro={item} onDetalheLivro={this.props.onDetalheLivro} price={item.preco} subtitle={item.titulo} id={item.id} title={item.titulo} />
                )}
                </ScrollView>
            </LayoutComponent>
        );
    }
}