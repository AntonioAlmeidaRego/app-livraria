import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Card, CardItem, Thumbnail, Left,
    Right, Button, Icon, ListItem, List, Item, Input, Label} from 'native-base';

import HeaderStackComponent from '../../components/HeaderStackComponent';
import SoapController from '../../controllers/SoapController';
import CardHeaderComponent from '../../components/componentsDetalheLivro/CardHeaderComponent';
import CardDescritionComponent from '../../components/componentsDetalheLivro/CardDescritionComponent';
import CardAmountComponent from '../../components/componentsDetalheLivro/CardAmountComponent';
import CardFreightCalculationComponent from '../../components/componentsDetalheLivro/CardFreightCalculationComponent';
import CardPurchaseComponent from '../../components/componentsDetalheLivro/CardPurchaseComponent';
import TitleBannerComponent from "../../components/TitleBannerComponent";
import StylesScreen from "../../styles/StylesScreen";
const uriImg = "https://livraria-pdf.herokuapp.com/livro/imagem/";
export default class DetalheLivroScreen extends React.Component{

    static navigationOptions ={
        header: null,
    };

    state = {
        livro: {},
        value: 0,
        prazo: 0,
        amount: 1,
    };

    increment= async ()=>{
        if(this.state.amount > 0){
            this.setState({
                amount: this.state.amount + 1,
            });
            this.setState({
                value: parseFloat(this.state.value).toFixed(2) * parseFloat(this.state.amount + 1),
            });
        }
    };

    decrement = async ()=>{
        if(this.state.amount > 1){
            this.setState({
                amount: this.state.amount-1,
            });

            this.setState({
                value: parseFloat(this.state.value) / parseFloat(this.state.amount)
            });
        }
    };

    async componentDidMount(): void {
        this.setState({
            livro:this.props.navigation.state.params.livro
        });

        this.setState({
            value: parseFloat(this.props.navigation.state.params.livro.preco),
        });
    }

    consulCEP = async (cep: string)=>{
        const preco = parseFloat((parseFloat(this.state.livro.preco)) * (parseFloat(this.state.amount)));
        const soap = new SoapController;
        const api = await soap.getSoap("https://api-correios-soap.herokuapp.com/"+cep+"/"+this.state.livro.peso
            +"/"+this.state.livro.comprimento+"/"+this.state.livro.altura+"/"+this.state.livro.largura
            +"/"+preco);
        const objetoXML = await api.text();

        this.setState({
            value: soap.$find(objetoXML, 'Valor'),
            prazo: soap.$find(objetoXML, 'PrazoEntrega'),
        });

    };

    render() {
        return (
            <HeaderStackComponent
                background={"#fff423"}
                favorite={true}
                title={"Detalhe do Livro"}
                onBack={() => this.props.navigation.goBack()}
                children={
                    <Content>
                        <View style={StylesScreen.createSpaceTop(30)}></View>
                        <CardHeaderComponent
                            uri={uriImg+this.state.livro.id}
                            title={this.state.livro.titulo}
                            year={this.state.livro.ano}
                        />
                        <View style={StylesScreen.createSpaceTop()}></View>
                        <TitleBannerComponent
                            uri={'https://cdn.pixabay.com/photo/2017/01/13/13/11/book-1977235_960_720.png'}
                            title={"Compra"}
                        />
                        <CardAmountComponent
                            amount={this.state.amount}
                            onIncrement={this.increment}
                            onDecrement={this.decrement}
                            price={this.state.value}
                        />
                        <View style={StylesScreen.createSpaceTop()}></View>
                        <TitleBannerComponent
                            uri={'https://cdn.pixabay.com/photo/2017/01/13/13/11/book-1977235_960_720.png'}
                            title={"Sinopse"}
                        />
                        <View style={StylesScreen.createSpaceTop()}></View>
                        <TitleBannerComponent
                            uri={'https://cdn.pixabay.com/photo/2017/01/13/13/11/book-1977235_960_720.png'}
                            title={"Autores"}
                        />
                        <View style={StylesScreen.createSpaceTop()}></View>
                        <TitleBannerComponent
                            uri={'https://cdn.pixabay.com/photo/2017/01/13/13/11/book-1977235_960_720.png'}
                            title={"Mais sobre o Livro"}
                        />
                        <View style={StylesScreen.createSpaceBottom()}></View>
                    </Content>
                }
            />
        );
    }
}
