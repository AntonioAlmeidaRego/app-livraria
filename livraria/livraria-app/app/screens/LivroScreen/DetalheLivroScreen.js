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
            console.log(this.state.amount);
            this.setState({
                amount: this.state.amount + 1,
            });
        }
    };

    decrement = async ()=>{
        if(this.state.amount > 1){
            console.log(this.state.amount);
            this.setState({
                amount: this.state.amount-1,
            });
        }
    };

    async componentDidMount(): void {
        this.setState({
            livro:this.props.navigation.state.params.livro
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
                        <CardHeaderComponent
                            uri={uriImg+this.state.livro.id}
                            title={this.state.livro.titulo}
                            year={this.state.livro.ano}
                        />
                        <CardDescritionComponent
                            sinopsie={this.state.livro.sinopsie}
                            preco={this.state.livro.preco}
                            value={this.state.value}
                        />
                        <CardAmountComponent
                            amount={this.state.amount}
                            onIncrement={this.increment}
                            onDecrement={this.decrement}
                        />
                        <CardFreightCalculationComponent
                            onConsulCEP={this.consulCEP}
                            value={this.state.value}
                            deadline={this.state.prazo}
                        />
                        <CardPurchaseComponent />
                    </Content>
                }
            />
        );
    }
}
