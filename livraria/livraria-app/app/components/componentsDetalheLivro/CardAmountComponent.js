import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardAmountComponent extends React.Component{
    render() {
        return (
            <Card>
                <CardItem header bordered>
                    <Text style={StylesScreen.createToLocaleUppercase()}>quantidade</Text>
                </CardItem>
                <CardItem bordered>
                    <Left>
                        <Button success onPress={() => this.props.onIncrement()}>
                            <Icon size={30}  name="ios-add"/>
                        </Button>
                    </Left>
                    <Body style={StylesScreen.createBox()}>
                        <Text style={StylesScreen.createText('#000',
                            20, 'bold',null, 'center', 'center',
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
            </Card>
        );
    }
}
