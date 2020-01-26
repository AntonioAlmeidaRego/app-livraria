import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab} from 'native-base';
import HeaderComponent from '../../components/HeaderComponent';
import ListComponent from '../../components/ListComponent';
import LivroController from '../../controllers/LivroController';
import HeaderStackComponent from '../../components/HeaderStackComponent';
import TabComponent from '../../components/TabComponent';
const url = "https://livraria-pdf.herokuapp.com";

export default class LivroScreen extends React.Component{


    constructor(props: P, context: any, state) {
        super(props, context);

        this.state={
            livros: [],
            categoria: '',
        };

        const objetoCategoria = props.navigation.state.params.categoria;

        const livro = new LivroController;

        livro.getListAllLinkedCategoria(
            url+'/api/livro/findAllLinkedCategoria/'+objetoCategoria.id).then().then(data=>{
            this.setState({
                livros: data,
                categoria: 'Livros sobre ' + objetoCategoria.nome
            });
        });
    }

    static navigationOptions ={
        header: null,
    };

    render() {
        return (
            <HeaderStackComponent
                background={"#fff423"}
                onBack={() => this.props.navigation.goBack()}
                title={this.state.categoria}
                children={
                    <TabComponent
                        onDetalheLivro={this.props.navigation.state.params.onDetalheLivro}
                        array={this.state.livros}
                    />
                }
            />
        );
    }
}
