import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Card, CardItem, Thumbnail, Left,
    Right, Button, Icon, ListItem, List, Item, Input, Label} from 'native-base';

import HeaderStackComponent from '../../components/HeaderStackComponent';
import SoapController from '../../controllers/SoapController';
import CardAmountComponent from '../../components/componentsDetalheLivro/CardAmountComponent';
import TitleBannerComponent from "../../components/TitleBannerComponent";
import StylesScreen from "../../styles/StylesScreen";
import LoadingCepModal from "../../componentsModals/LoadingCepModal";
import ConversorUtil from "../../utils/ConversorUtil";
import CardAutorDescritionComponent from "../../components/componentsDetalheLivro/CardAutorDescritionComponent";
import ApiController from "../../controllers/ApiController";
import CardHeaderComponent from "../../components/componentsDetalheLivro/CardHeaderComponent";
import CardLivroDescrition from "../../components/CardLivroDescrition";
import CardSinopsieComponent from "../../components/componentsDetalheLivro/CardSinopsieComponent";
import CardMoreLivroComponent from "../../components/componentsDetalheLivro/CardMoreLivroComponent";
import SpaceTopComponent from "../../components/componentsSpace/SpaceTopComponent";
import SpaceBottomComponent from "../../components/componentsSpace/SpaceBottomComponent";
import TabComponent from "../../components/TabComponent";
const uriImg = "https://livraria-pdf.herokuapp.com/livro/imagem/";
export default class DetalheLivroScreen extends React.Component{

    static navigationOptions ={
        header: null,
    };

    state = {
        livro: {},
        autors: [],
        livrosRelateds: [],
        value: 0,
        prazo: 0,
        frete: 0,
        amount: 1,
        visible: false,
        isAmount: false,
        isConsult: false,
    };

    increment= async ()=>{
        if(this.state.amount > 0){
            this.setState({
                amount: this.state.amount + 1,
                isAmount: true,
                isConsult: true,
                value: parseFloat(this.state.value).toFixed(2) * parseFloat(this.state.amount + 1),
            });
        }
    };

    decrement = async ()=>{
        if(this.state.amount > 1){
            this.setState({
                amount: this.state.amount-1,
                isAmount: false,
                isConsult: true,
                value: parseFloat(this.state.value) / parseFloat(this.state.amount),
            });
        }
    };

    async componentDidMount(): void {
        const value =  parseFloat(this.props.navigation.state.params.livro.preco);
        const idLivro = parseInt(this.props.navigation.state.params.livro.id);

        this.setState({
            livro: this.props.navigation.state.params.livro
        });

        await this.onListLivrosRelatedByValue(value, idLivro);

        this.setState({
            value: value,
        });

        await this.onListAutorLinkedLivro(idLivro);
    }

    onVisible = async ()=>{
        this.setState({
            visible: true,
        });
    };

    offVisible = async ()=>{
        this.setState({
            visible: false,
        });
    };

    onIncrementAndCep = async (cep: string)=>{
       await this.increment();
        if(cep != ""){
            await this.consulCEP(cep, this.state.value);
        }
    };

    onDecrementAndCep = async (cep: string)=>{
        await this.decrement();
        if(cep != ""){
            await this.consulCEP(cep, this.state.value);
        }
    };

    onListAutorLinkedLivro = async (idLivro: number)=>{
        this.onVisible();
        const autorController = new ApiController();
        const autors = await autorController.get('https://livraria-pdf.herokuapp.com/api/autor/findAllLinkedLivro/'+idLivro);
        this.setState({
            autors: autors,
        });
        this.offVisible();
    };

    onListLivrosRelatedByValue = async (value: number, idLivro: number)=>{
        const apiController = new ApiController();
        const livros = await apiController.get('https://livraria-pdf.herokuapp.com/api/livro/findAllRelatedByValue/'+value+'/'+idLivro);
        this.setState({
            livrosRelateds: livros,
        });
    };

    consulCEP = async (cep: string, preco: string)=>{
        let conversorUtil = new ConversorUtil;

        await this.onVisible();

        const soap = new SoapController;

        let precoAux = 0;

        if(this.state.isConsult){
            if(this.state.isAmount){
                precoAux = parseFloat(this.state.livro.preco) * this.state.amount;
            }else{
                precoAux = parseFloat(this.state.livro.preco) * this.state.amount;
            }
        }else{
            precoAux = preco;
        }


        const api = await soap.getSoap("https://api-correios-soap.herokuapp.com/"+cep+"/"+parseInt(this.state.livro.peso) * this.state.amount
            +"/"+this.state.livro.comprimento+"/"+this.state.livro.altura+"/"+this.state.livro.largura
            +"/"+precoAux);

        const objetoXML = await api.text();

        const result = parseFloat(parseFloat(precoAux) + conversorUtil.convertsCommaToPoint(soap.$find(objetoXML, 'Valor')));

        this.setState({
            value: result.toFixed(2),
            frete: conversorUtil.convertsCommaToPoint(soap.$find(objetoXML, 'Valor')),
            prazo: soap.$find(objetoXML, 'PrazoEntrega'),
        });

        await this.offVisible();
    };

    detalheLivro = async (objeto)=>{
        this.props.navigation.push("DetalheLivro", {
            livro: objeto
        });
    };

    render() {
        return (
            <HeaderStackComponent
                background={"#694fad"}
                favorite={true}
                title={"Detalhe do Livro"}
                onBack={() => this.props.navigation.goBack()}
                children={
                    <Content>
                        <SpaceTopComponent />
                        <CardHeaderComponent
                            uri={uriImg+this.state.livro.id}
                            title={this.state.livro.titulo}
                            year={this.state.livro.ano}
                        />
                        <CardAmountComponent
                            prazo={this.state.prazo}
                            freight={this.state.frete}
                            onSearchCep={this.consulCEP}
                            amount={this.state.amount}
                            onIncrement={this.onIncrementAndCep}
                            onDecrement={this.onDecrementAndCep}
                            price={this.state.value}
                        />
                        <SpaceTopComponent />

                        <LoadingCepModal visible={this.state.visible}/>
                    </Content>
                }
            />
        );
    }
}
