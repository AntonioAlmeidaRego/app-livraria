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
import HeaderStackComponent from "../../components/HeaderStackComponent";
import LoginComponent from "../../components/loginScreen/LoginComponent";


export default class UserScreen extends React.Component{

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
                title={"Login"}
                iconLeft={
                    <Icon />
                }
                background={'#694fad'}
                children={
                    <LoginComponent register={() => this.props.navigation.push('RegisterUser')} />
                }
            />
        );
    }
}