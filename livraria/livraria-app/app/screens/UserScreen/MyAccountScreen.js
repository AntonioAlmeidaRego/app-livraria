import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Form, Item, Label, Input, Button, Thumbnail} from 'native-base';
import LayoutComponent from "../../components/LayoutComponent";
import UserDataComponent from "../../components/componentsUser/UserDataComponent";
import SessionController from "../../controllers/SessionController";
import HeaderComponent from "../../components/HeaderComponent";
import FormatterUtil from "../../utils/FormatterUtil";

const formatterUtil = new FormatterUtil;

export default class MyAccountScreen extends React.Component{

    state = {
        usuario: {},
    };

    async componentDidMount(): void {
        let session = new SessionController;
        this.setState({
            usuario: await session.getSession("usuario-logado"),
        });
    }

    render() {
        return(
            <HeaderComponent
                iconLeft
                background={'#694fad'}
                title={'Minha Conta'}
                backgroundContent={'#ececec'}
                children={
                    <View>
                        <UserDataComponent
                            nomeUser={this.state.usuario.nome}
                            sizeTextName={18}
                            colorTextName={'#585858'}
                            emailUser={this.state.usuario.email}
                            sizeTextEmail={16}
                            colorTextEmail={'#585858'}
                            colorTextData={'#585858'}
                            data={formatterUtil.formatterDatePtBr(this.state.usuario.dataNascimento)}
                            sizeTextData={16}
                        />
                    </View>
                }
            />
        )
    }
}