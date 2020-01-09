import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import LivroController from '../controllers/LivroController';
import TabComponent from '../components/TabComponent';

const url = "https://livraria-pdf.herokuapp.com";
export default class TabListagemPromocoes extends React.Component{
    state = {
        livros: [],
    };

    async componentDidMount(): void {
        const livroController = new LivroController;
        const livros = await livroController.getListAllFirstPromotions(url+'/api/livro/findAllPromocaoPrimeiros');
        this.setState({
            livros: livros,
        });
    }

    render() {
        return (
            <TabComponent array={this.state.livros} />
        );
    }
}
