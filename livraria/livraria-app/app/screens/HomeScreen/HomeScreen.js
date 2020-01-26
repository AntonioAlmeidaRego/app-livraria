import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import HomeScreenBottomTab from '../HomeScreen/HomeScreenConfigRouteBottomTab/HomeScreenBottomTab';

export default class HomeScreen extends React.Component{

    detalhe = async (objeto)=>{
        this.props.navigation.navigate("ListagemLivrosLinkedCategoria", {
            categoria: objeto,
            onDetalheLivro: this.detalheLivro
        });
    };

    detalheLivro = async (objeto)=>{
        this.props.navigation.navigate("DetalheLivro", {
            livro: objeto
        });
    };


    render() {
        return (
            [<HeaderComponent
                title={"Livraria PDF"}
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#ffd410'}} activeTextStyle={{color: '#000'}}
                             textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#ffd410'}} heading={"Categorias"}>
                            <TabListagemCategorias onDetalhe={this.detalhe}/>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#ffd410'}} activeTextStyle={{color: '#000'}}
                             textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#ffd410'}} heading={"Livros"}>
                            <TabListagemLivros onDetalheLivro={this.detalheLivro} />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#ffd410'}} activeTextStyle={{color: '#000'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#ffd410'}} heading={"Promoções"}>
                            <TabListagemPromocoes onDetalheLivro={this.detalheLivro}/>
                        </Tab>
                    </Tabs>
                }
            />,
            <HomeScreenBottomTab />]
        );
    }
}
