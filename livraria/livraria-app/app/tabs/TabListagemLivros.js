import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import LivroController from '../controllers/LivroController';
import TabComponent from '../components/TabComponent';


export default class TabListagemLivros extends React.Component{

    state = {
        livros: [],
    };

    async componentDidMount(): void {
        const livroController = new LivroController;
        const livros = await livroController.getAll('https://livraria-pdf.herokuapp.com/api/livro/findAll');
        this.setState({
            livros: livros,
        });
    }

    render() {
        return (
            <TabComponent livros={this.state.livros} />
        );
    }
}
