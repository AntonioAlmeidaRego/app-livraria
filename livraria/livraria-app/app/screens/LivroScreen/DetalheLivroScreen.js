import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Card, CardItem, Thumbnail, Left,
    Right, Button, Icon, ListItem, List, Item, Input, Label} from 'native-base';
import IconSecret from 'react-native-vector-icons/Entypo';
import HeaderStackComponent from '../../components/HeaderStackComponent';
import StylesScreen from '../../styles/StylesScreen';
import SoapController from '../../controllers/SoapController';
const uriImg = "https://livraria-pdf.herokuapp.com/livro/imagem/";
export default class DetalheLivroScreen extends React.Component{

    static navigationOptions ={
        header: null,
    };

    state = {
        livro: {},
        cep: '',
        valor: 0,
        prazo: 0,
    };

    async componentDidMount(): void {
        this.setState({
            livro:this.props.navigation.state.params.livro
        });
    }

    consulCEP = async ()=>{
        const soap = new SoapController;
        const api = await soap.getSoap("https://api-correios-soap.herokuapp.com/"+this.state.cep+"/"+this.state.livro.peso
            +"/"+this.state.livro.comprimento+"/"+this.state.livro.altura+"/"+this.state.livro.largura
            +"/"+this.state.livro.preco);
        const objetoXML = await api.text();

        this.setState({
            valor: soap.$find(objetoXML, 'Valor'),
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
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: uriImg+this.state.livro.id}} />
                                    <Body>
                                        <Text>{this.state.livro.titulo}</Text>
                                        <Text note>{this.state.livro.ano}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{uri: uriImg+this.state.livro.id}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered>
                                <Text style={StylesScreen.createToLocaleUppercase()}>descrição</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        {this.state.livro.sinopsie}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>R$ {parseFloat(parseFloat(this.state.livro.preco) + parseFloat(this.state.valor))}</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered>
                                <Text style={StylesScreen.createToLocaleUppercase()}>quantidade</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        {this.state.livro.sinopsie}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>R$ {parseFloat(parseFloat(this.state.livro.preco) + parseFloat(this.state.valor))}</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered>
                                <Text style={StylesScreen.createToLocaleUppercase()}>calculo do frete</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Left>
                                    <Item stackedLabel>
                                        <Label>CEP</Label>
                                        <Input
                                            value={this.state.cep}
                                            onChangeText={val => this.setState({cep: val})}
                                            maxLength={8}
                                            placeholder={"_____-___"}
                                            keyboardType={'numeric'}
                                        />
                                    </Item>
                                </Left>
                                <Right>
                                    <Button success onPress={() => this.consulCEP()}>
                                        <Icon/>
                                        <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createColorText('#fff')]}>ok</Text>
                                        <Icon/>
                                    </Button>
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={StylesScreen.createToLocaleUppercase()}>Valor</Text>
                                    <Text note style={StylesScreen.createToLocaleUppercase()}>{this.state.valor}</Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={StylesScreen.createToLocaleUppercase()}>Prazo</Text>
                                    <Text note style={StylesScreen.createToLocaleUppercase()}>{this.state.prazo} Dias</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered>
                                <Text style={StylesScreen.createToLocaleUppercase()}>compra</Text>
                            </CardItem>
                            <CardItem footer bordered>
                                <Left/>
                                <Body>
                                    <Button success>
                                        <Icon name={'ios-cart'} color={"#fff"} size={30}/>
                                        <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createColorText('#fff')]}>Comprar</Text>
                                        <Icon/>
                                    </Button>
                                </Body>
                                <Right/>
                            </CardItem>
                        </Card>
                    </Content>
                }
            />
        );
    }
}
