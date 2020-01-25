import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import LivroController from '../controllers/LivroController';
import TabComponent from '../components/TabComponent';
import ApiController from "../controllers/ApiController";


export default class TabListagemLivros extends React.Component{

    state = {
        livros: [],
    };

    async componentDidMount(): void {
        const livroController = new ApiController();
        const livros = await livroController.get('https://livraria-pdf.herokuapp.com/api/livro/findAll');
        this.setState({
            livros: livros,
        });
    }

    render() {
        return (
            <TabComponent onDetalheLivro={this.props.onDetalheLivro} array={this.state.livros} />
        );
    }
}
