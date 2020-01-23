import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, Picker, Form, Input} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import Iconlocation from "react-native-vector-icons/Octicons";


export default class CardAmountComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainer()]}>
                    <View style={StylesScreen.createSpaceTop()}></View>
                    <View style={StylesScreen.createFlexDirection('row')}>

                        <View style={[StylesScreen.createFlexDirection('row'), StylesScreen.createMarginRight(50),
                            StylesScreen.createBox('center', 'center', 'center')]}>
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
                    <View style={StylesScreen.createSpaceTop()}></View>
                    <View style={StylesScreen.createContainer()}>
                        <Text style={[StylesScreen.createText('#000', 20, null, null, null, null, null, null),
                            StylesScreen.createToLocaleUppercase()
                        ]}>
                            Quantidade de Livros
                        </Text>
                    </View>
                    <View style={StylesScreen.createSpaceTop()}></View>
                    <CardItem>
                        <Left>
                            <Button success onPress={() => this.props.onIncrement()}>
                                <Icon size={30}  name="ios-add"/>
                            </Button>
                        </Left>
                        <Body style={StylesScreen.createBox()}>
                            <Text style={StylesScreen.createText('#000',
                                28, 'bold',null, 'center', 'center',
                                null, null)}>
                                {this.props.amount}
                            </Text>
                        </Body>
                        <Right>
                            <Button danger onPress={() => this.props.onDecrement()}>
                                <Icon size={30} name="ios-remove" />
                            </Button>
                        </Right>
                    </CardItem>
                    <View style={StylesScreen.createSpaceTop()}></View>
                    <CardItem>
                        <Left>
                            <Button style={[StylesScreen.createButtonColor('#D8D636')]}>
                                <Icon>
                                    <Iconlocation name={"location"} size={30}/>
                                </Icon>
                            </Button>

                        </Left>
                        <View style={StylesScreen.createBox('center', 'center', 'center')}>
                            <View style={[StylesScreen.createBorder('#000', 0.98, 0),
                                StylesScreen.createWidth(Dimensions.get('window').width-205),
                                StylesScreen.createSpaceRight(30)
                            ]}>
                                <Item>
                                    <Input keyboardType={'numeric'}/>
                                </Item>
                            </View>
                        </View>
                        <Right>
                            <Button style={[StylesScreen.createButtonColor('#D8D636')]}>
                                <Icon>
                                    <Iconlocation name={"search"} size={30}/>
                                </Icon>
                            </Button>
                        </Right>
                    </CardItem>
                    <View style={StylesScreen.createSpaceBottom()}></View>
                    <Button style={[StylesScreen.createButtonColor('#D8D636')]}>
                        <Icon name={"ios-cart"} size={30}/>
                        <Text style={StylesScreen.createText('#fff', 18, 'bold',
                            null, 'center', null, null, null)}>Comprar </Text>
                        <Icon />
                    </Button>
                    <View style={StylesScreen.createSpaceBottom()}></View>
                </View>
            </View>
        );
    }
}
