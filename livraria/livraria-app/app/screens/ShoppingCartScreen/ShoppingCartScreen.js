import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon} from 'native-base';
import HeaderStackComponent from "../../components/HeaderStackComponent";
import TabComponent from "../../components/TabComponent";
import IconShoppingCart from "react-native-vector-icons/MaterialIcons";

export default class ShoppingCartScreen extends React.Component{
    static navigationOptions ={
        header: null,
    };

    render() {
        return (
            <HeaderStackComponent
                background={"#694fad"}
                onBack={() => this.props.navigation.goBack()}
                title={"Carrinho de Compras"}
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