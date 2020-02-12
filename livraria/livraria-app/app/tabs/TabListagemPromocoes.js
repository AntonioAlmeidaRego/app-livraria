import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import LivroController from '../controllers/LivroController';
import TabComponent from '../components/TabComponent';
import ApiController from "../controllers/ApiController";

const url = "https://livraria-pdf.herokuapp.com";
const urlLocal = "http://192.168.1.7:8080";
export default class TabListagemPromocoes extends React.Component{
    state = {
        livros: [],
        isEmpty: false,
    };

    async componentDidMount(): void {
        const livroController = new ApiController();
        const livros = await livroController.get(urlLocal+'/api/livro/findAllPromocaoPrimeiros');
        this.setState({
            livros: livros,
            isEmpty: livroController.isEmpty(),
        });
    }

    render() {
        return (
            <TabComponent isEmpty={this.state.isEmpty} onDetalheLivro={this.props.onDetalheLivro} array={this.state.livros} />
        );
    }
}
