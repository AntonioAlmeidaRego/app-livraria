import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab} from 'native-base';
import HeaderComponent from '../../components/HeaderComponent';
import ListComponent from '../../components/ListComponent';
import LivroController from '../../controllers/LivroController';
const url = "https://livraria-pdf.herokuapp.com";

export default class LivroScreen extends React.Component{

    state={
        livros: [],
    };

    async componentDidMount(): void {
        const objetoCategoria = this.props.navigation.state.params;
        const livro = new LivroController;
        const api = await livro.getListAllLinkedCategoria(url+'/api/livro/findAllLinkedCategoria/'+objetoCategoria.id);
        this.setState({
            livros: api,
        });
    }


    render() {
        return (
            <HeaderComponent
                title={"Livros"}
                children={
                    <ListComponent
                        array={this.state.livros}
                    />
                }
            />
        );
    }
}
