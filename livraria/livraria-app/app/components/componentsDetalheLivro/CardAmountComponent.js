import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, Picker, Form, Input} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import Iconlocation from "react-native-vector-icons/Octicons";

export default class CardAmountComponent extends React.Component{

    state={
        value: '',
    };



    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={StylesScreen.createSpaceBottom()}></View>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainerText()]}>
                    <View style={StylesScreen.createSpaceBottom()}></View>
                    <View style={StylesScreen.createFlexDirection('row')}>
                        <View style={[StylesScreen.createFlexDirection('row'),
                            StylesScreen.createContainer()]}>
                            <Image
                                style={[StylesScreen.createWidth(40), StylesScreen.createHeight(40)]}
                                source={require('../../../images/price.png')}
                            />
                            <Text style={StylesScreen.createText('#000', 20, null, null, null, null, null, null)
                            }>
                                R$ {this.props.price}
                            </Text>
                        </View>
                    </View>
                    <View style={StylesScreen.createContainerText()}>
                        <Text style={[StylesScreen.createText('#000', 20, null, null, null, null, null, null),
                            StylesScreen.createToLocaleUppercase()
                        ]}>
                            Quantidade de Livros
                        </Text>
                    </View>
                    <CardItem>
                        <Left>
                            <Button success onPress={() => this.props.onIncrement(this.state.value, this.props.price)}>
                                <Icon size={30}  name="ios-add"/>
                            </Button>
                        </Left>
                        <Body style={StylesScreen.createBox('center', 'center', 'center')}>
                            <Text style={StylesScreen.createText('#000',
                                28, 'bold',null, 'center', 'center',
                                null, null)}>
                                {this.props.amount}
                            </Text>
                        </Body>
                        <Right>
                            <Button danger onPress={() => this.props.onDecrement(this.state.value, this.props.price)}>
                                <Icon size={30} name="ios-remove" />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button style={[StylesScreen.createButtonColor('#D8D636')]}>
                                <Icon>
                                    <Iconlocation name={"location"} size={30}/>
                                </Icon>
                            </Button>
                        </Left>
                        <View style={StylesScreen.createBox('center', 'center', 'center', '40%', '50%')}>
                            <View style={[StylesScreen.createBorder('#000', 0.98, 0),
                                StylesScreen.createWidth(Dimensions.get('window').width-205),
                                StylesScreen.createSpaceRight(30),
                                StylesScreen.createHeight(50)
                            ]}>
                                <Item style={StylesScreen.removeBorderBottom()}>
                                    <Input
                                        keyboardType={'numeric'}
                                        value={this.state.value}
                                        onChangeText={val => this.setState({value: val})}
                                    />
                                </Item>
                            </View>
                        </View>
                        <Right>
                            <Button onPress={() => this.props.onSearchCep(this.state.value, this.props.price)} style={[StylesScreen.createButtonColor('#D8D636')]}>
                                <Icon>
                                    <Iconlocation name={"search"} size={30}/>
                                </Icon>
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            {this.props.freight > 0 && (
                                [<Text style={[StylesScreen.createText('#000', 18, 'bold', null,
                                    'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}>
                                    Frete:
                                </Text>,
                                <Text style={[StylesScreen.createText('#000', 20, null, null,
                                    'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}> {this.props.freight}</Text>]
                            )}
                        </Left>
                        <Left>
                            {
                                this.props.prazo > 0 && (
                                   [ <Text style={[StylesScreen.createText('#000', 18, 'bold', null,
                                        'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}>
                                        Prazo:
                                    </Text>,
                                    <Text style={[StylesScreen.createText('#000', 20, null, null,
                                'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}> {this.props.prazo} Dias</Text>]
                                )
                            }
                        </Left>
                    </CardItem>
                    <Button style={[StylesScreen.createButtonColor('#D8D636')
                    ]}>
                        <Icon name={"ios-cart"} size={30}/>
                        <Text style={StylesScreen.createText('#fff', 18, 'bold',
                            null, 'center', null, null, null)}>Comprar </Text>
                        <Icon />
                    </Button>
                    <View style={StylesScreen.createSpaceBottom()}></View>
                </View>
                <View style={StylesScreen.createSpaceBottom()}></View>
            </View>
        );
    }
}
