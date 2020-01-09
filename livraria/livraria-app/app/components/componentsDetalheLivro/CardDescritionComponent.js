import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, CardItem, Thumbnail, Card} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardDescritionComponent extends React.Component{
    render() {
        return (
            <Card>
                <CardItem header bordered>
                    <Text style={StylesScreen.createToLocaleUppercase()}>descrição</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {this.props.sinopsie}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Text>R$ {parseFloat(parseFloat(this.props.preco) + parseFloat(this.props.value))}</Text>
                </CardItem>
            </Card>
        );
    }
}
