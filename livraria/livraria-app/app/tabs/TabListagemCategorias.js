import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';

import TabListComponent from '../components/TabListComponent';
import CategoriaController from '../controllers/CategoriaController';
const url = "https://livraria-pdf.herokuapp.com";
const urlLocal = "http://192.168.1.7:8080";
export default class TabListagemCategorias extends React.Component{

    state = {
        categorias: [],
        isEmpty: false,
    };

    async componentDidMount(): void {
        const categoriaController = new CategoriaController;
        const api = await categoriaController.getAll(urlLocal+'/api/categoria/findAll');
        this.setState({
            categorias: api,
            isEmpty: categoriaController.isEmpty(),
        });
    }


    render() {
        return (
            <TabListComponent
                isEmpty={this.state.isEmpty}
                onDetalhe={this.props.onDetalhe}
                array={this.state.categorias}
            />
        );
    }
}
