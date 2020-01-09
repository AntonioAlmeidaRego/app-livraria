import React from 'react';
import {View, Text, Image} from 'react-native';
import {
    Header,
    Body,
    Content,
    Container,
    Tabs,
    Tab,
    Title,
    Left,
    CardItem,
    Thumbnail,
    Card,
    Item,
    Label, Input, Right, Button, Icon,
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardFreightCalculationComponent extends React.Component{
    state ={
        cep: '',
    }


    render() {
        return (
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
                        <Button success onPress={() => this.props.onConsulCEP(this.state.cep)}>
                            <Icon/>
                            <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createColorText('#fff')]}>ok</Text>
                            <Icon/>
                        </Button>
                    </Right>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text style={StylesScreen.createToLocaleUppercase()}>Valor</Text>
                        <Text note style={StylesScreen.createToLocaleUppercase()}>{this.props.value}</Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text style={StylesScreen.createToLocaleUppercase()}>Prazo</Text>
                        <Text note style={StylesScreen.createToLocaleUppercase()}>{this.props.deadline} Dias</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
