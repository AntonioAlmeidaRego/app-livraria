import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, Picker, Form, Input} from 'native-base';
import StylesScreen from '../../styles/StylesScreen'; 
import CenterComponent from "../CenterComponent";
import RowComponent from "../RowComponent";
import SpaceBottomComponent from "../componentsSpace/SpaceBottomComponent";
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";
import TextComponent from "../TextComponent";
import LayoutComponent from "../LayoutComponent";
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";

export default class CardAmountComponent extends React.Component{

    state={
        value: '',
    };

    render() {
        return (
            <LayoutComponent>
                <BorderComponent color={"#c2c0c7"} borderTop={true} borderWidth={0.9} width={Dimensions.get('window').width} height={'100%'} padding={2}>
                    <SpaceTopComponent space={6} />
                    <CenterComponent>
                        <TextComponent
                            text={'R$ ' + this.props.price + ',00'}
                            size={25}
                            color={'#000'}
                        />
                        <TextComponent
                            text={'1x de R$ 9.32 s/ juros'}
                            size={16}
                            color={'#b3b1b8'}
                        />
                    </CenterComponent>
                    <SpaceBottomComponent />
                    <BoxContainerComponent width={'87%'} height={'100%'} justifyContent={'center'} alignSelf={'center'} alignItems={'center'} >
                        <Button style={[StylesScreen.createButtonColor('#694fad')
                        ]}>
                            <CenterComponent>
                                <RowComponent>
                                    <Icon name={"ios-cart"} size={30}/>
                                    <TextComponent
                                        text={'R$ ' + this.props.price}
                                        size={18}
                                        weight={'bold'}
                                        textAlign={'center'}
                                        color={'#fff'}
                                        text={'Comprar'}
                                     />
                                </RowComponent>
                            </CenterComponent>
                        </Button>
                    </BoxContainerComponent>
                    <SpaceBottomComponent space={3} />
                </BorderComponent>
            </LayoutComponent>
        );
    }
}
