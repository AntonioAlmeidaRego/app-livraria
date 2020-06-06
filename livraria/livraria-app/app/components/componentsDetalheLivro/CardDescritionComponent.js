import React from 'react';
import {Text} from 'react-native';
import {Body, Card, CardItem} from 'native-base';

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
