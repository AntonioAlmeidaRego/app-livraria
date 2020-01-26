import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import IconHome from 'react-native-vector-icons/Octicons';

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
            <HeaderComponent
                title={"Livraria PDF"}
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Categorias"}>
                            <TabListagemCategorias onDetalhe={this.detalhe}/>
                        </Tab>
                        <Tab active tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Livros"}>
                            <TabListagemLivros onDetalheLivro={this.detalheLivro} />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Promoções"}>
                            <TabListagemPromocoes onDetalheLivro={this.detalheLivro}/>
                        </Tab>
                    </Tabs>
                }
            />
        );
    }
}
