import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon} from 'native-base';
import HeaderComponent from '../../components/HeaderComponent';
import LoginComponent from "../../components/UserScreenComponent/LoginComponent";
import SessionController from "../../controllers/SessionController";
import MyAccountComponent from "../../components/UserScreenComponent/MyAccountComponent";


export default class UserScreen extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            isScreenUser: false,
            isScreenLogin: false,
            usuario: {},
        };
    }


    async componentDidMount(): void {
        let session = new SessionController;
        const object = await session.getSession("usuario-logado");

        if(!Array.isArray(object)){
            this.setState({
                usuario: object,
                isScreenUser: true,
                isScreenLogin: false,
            });
        }else{
            this.setState({
                isScreenUser: false,
                isScreenLogin: true,
            });
        }
    }

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

    returnScreen(){
        if(this.state.isScreenLogin){
            return (
                <LoginComponent action={() => this.props.navigation.navigate('MyAccount')} register={() => this.props.navigation.push('RegisterUser')} />
            )
        }else if(this.state.isScreenUser){
            this.props.navigation.navigate('MyAccount');
        }

    }

    render() {
        return (
            <HeaderComponent
                title={"Login"}
                iconLeft={
                    <Icon />
                }
                background={'#694fad'}
                children={
                    this.returnScreen()
                }
            />
        );
    }
}