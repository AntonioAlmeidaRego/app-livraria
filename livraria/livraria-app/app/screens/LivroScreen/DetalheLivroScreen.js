import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Card, CardItem, Thumbnail, Left,
    Right, Button, Icon, ListItem, List, Item, Input, Label} from 'native-base';
import IconSecret from 'react-native-vector-icons/Entypo';
import HeaderStackComponent from '../../components/HeaderStackComponent';
import StylesScreen from '../../styles/StylesScreen';
const uriImg = "https://livraria-pdf.herokuapp.com/livro/imagem/";
export default class DetalheLivroScreen extends React.Component{

    static navigationOptions ={
        header: null,
    };

    state = {
        livro: {},
    };

    async componentDidMount(): void {
        this.setState({
            livro:this.props.navigation.state.params.livro
        });
    }

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
                                <Text>R$ {this.state.livro.preco}</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header bordered>
                                <Text style={StylesScreen.createToLocaleUppercase()}>compra</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Item stackedLabel>
                                    <Label>CEP</Label>
                                    <Input
                                        maxLength={8}
                                        placeholder={"_____-___"}
                                        keyboardType={'numeric'}
                                    />
                                </Item>
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
