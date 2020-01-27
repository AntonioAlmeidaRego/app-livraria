import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, Picker, Form, Input} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import Iconlocation from "react-native-vector-icons/Octicons";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import CenterComponent from "../CenterComponent";
import RowComponent from "../RowComponent";
import SpaceBottomComponent from "../componentsSpace/SpaceBottomComponent";
import ContainerComponent from "../ContainerComponent";
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";
import BoxInputComponent from "../BoxInputComponent";
import TextComponent from "../TextComponent";
import ContainerCenterComponent from "../ContainerCenterComponent";

export default class CardAmountComponent extends React.Component{

    state={
        value: '',
    };

    render() {
        return (
            <BoxContainerComponent justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                width={'100%'} height={'100%'} radius={15} padding={2}>
                <BorderComponent color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <ContainerCenterComponent>
                        <RowComponent>
                            <Image
                                style={[StylesScreen.createWidth(40), StylesScreen.createHeight(40)]}
                                source={require('../../../images/price.png')}
                            />
                            <TextComponent
                                text={'R$ ' + this.props.price}
                                size={20}
                                color={'#000'}
                            >
                            </TextComponent>
                        </RowComponent>
                    </ContainerCenterComponent>
                    <SpaceBottomComponent />
                    <TextComponent
                        color={"#000"}
                        size={20}
                        textAlign={'center'}
                        justifyContent={'center'}
                        alignSelf={'center'}
                        alignItems={'center'}
                        upper
                        text={"Quantidade de Livros"}
                    />
                    <SpaceBottomComponent />
                    <RowComponent>
                        <LeftComponent>
                            <Button success onPress={() => this.props.onIncrement(this.state.value, this.props.price)}>
                                <Icon size={30}  name="ios-add"/>
                            </Button>
                        </LeftComponent>
                        <CenterComponent style={StylesScreen.createFlex(6)}>
                           <Text style={StylesScreen.createText('#000',
                               28, 'bold',null, 'center', 'center',
                               'center', 'center')}>
                               {this.props.amount}
                           </Text>
                        </CenterComponent>
                        <RightComponent>
                            <Button danger onPress={() => this.props.onDecrement(this.state.value, this.props.price)}>
                                <Icon size={30} name="ios-remove" />
                            </Button>
                        </RightComponent>
                    </RowComponent>
                    <SpaceBottomComponent space={15} />
                    <RowComponent>
                        <LeftComponent
                            value={1.5}
                        >
                            <Button style={[StylesScreen.createButtonColor('#694fad')]}>
                                <Icon>
                                    <Iconlocation name={"location"} size={30}/>
                                </Icon>
                            </Button>
                        </LeftComponent>
                        <CenterComponent>
                            <BoxInputComponent
                                    height={50}
                                    value={1}
                                    justifyContent={'center'}
                                    alignSelf={'center'}
                                    alignItems={'center'}
                                    >
                                <Item style={[StylesScreen.removeBorderBottom() ]}>
                                    <Input
                                        style={[StylesScreen.createBorderBottom('#000', 0.99)]}
                                        keyboardType={'numeric'}
                                        value={this.state.value}
                                        onChangeText={val => this.setState({value: val})}
                                    />
                                </Item>
                            </BoxInputComponent>
                        </CenterComponent>
                        <RightComponent value={1.5}>
                            <Button onPress={() => this.props.onSearchCep(this.state.value, this.props.price)} style={[StylesScreen.createButtonColor('#694fad')]}>
                                <Icon>
                                    <Iconlocation name={"search"} size={30}/>
                                </Icon>
                            </Button>
                        </RightComponent>
                    </RowComponent>
                    <RowComponent>
                        <LeftComponent>
                            {this.props.freight > 0 && (
                                [<Text style={[StylesScreen.createText('#000', 18, 'bold', null,
                                    'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}>
                                    Frete:
                                </Text>,
                                <Text style={[StylesScreen.createText('#000', 20, null, null,
                                    'center', 'center', 'center', 'center'), StylesScreen.createToLocaleUppercase()]}> {this.props.freight}</Text>]
                            )}
                        </LeftComponent>
                        <LeftComponent>
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
                        </LeftComponent>
                    </RowComponent>
                    <SpaceBottomComponent />
                    <ContainerCenterComponent>
                        <Button style={[StylesScreen.createButtonColor('#694fad')
                        ]}>
                            <Icon name={"ios-cart"} size={30}/>
                            <Text style={StylesScreen.createText('#fff', 18, 'bold',
                                null, 'center', null, null, null)}>Comprar </Text>
                            <Icon />
                        </Button>
                    </ContainerCenterComponent>
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}
