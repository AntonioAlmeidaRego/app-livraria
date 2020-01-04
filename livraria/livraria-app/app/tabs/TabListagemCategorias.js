import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import LivroController from '../controllers/LivroController';
import TabComponent from '../components/TabComponent';
import TabListComponent from '../components/TabListComponent';
import CategoriaController from '../controllers/CategoriaController';
const url = "https://livraria-pdf.herokuapp.com";
export default class TabListagemCategorias extends React.Component{

    state = {
        categorias: [],
    };

    async componentDidMount(): void {
        const categoriaController = new CategoriaController;
        const api = await categoriaController.getAll(url+'/api/categoria/findAll');

        this.setState({
            categorias: await api.json(),
        });
    }

    render() {
        return (
            <TabListComponent
                array={this.state.categorias}
            />
        );
    }
}
