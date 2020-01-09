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
    Button,
    Icon, Right,
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardPurchaseComponent extends React.Component{
    render() {
        return (
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
        );
    }
}
