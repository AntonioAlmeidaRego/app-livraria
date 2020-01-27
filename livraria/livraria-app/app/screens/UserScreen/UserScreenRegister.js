import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import IconHome from 'react-native-vector-icons/Octicons';
import TabRegisterUser from "../../tabs/TabRegisterUser";

export default class UserScreenRegister extends React.Component{

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

    static navigationOptions ={
        header: null,
    };


    render() {
        return (
            <HeaderComponent
                title={"Registro de Usuario"}
                background={'#694fad'}
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Registro"}>
                            <TabRegisterUser />
                        </Tab>
                        <Tab active tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Registro via Facebook"}>
                            <TabListagemLivros onDetalheLivro={this.detalheLivro} />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}} textStyle={{color: '#fff'}}
                             activeTabStyle={{backgroundColor: '#694fad'}} heading={"Registro via Gmail"}>
                            <TabListagemPromocoes onDetalheLivro={this.detalheLivro}/>
                        </Tab>
                    </Tabs>
                }
            />
        );
    }
}