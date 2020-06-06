import React from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';

import IconBack from 'react-native-vector-icons/MaterialIcons';
import IconFavorito from 'react-native-vector-icons/MaterialIcons';
import StylesScreen from '../styles/StylesScreen';


export default class HeaderStackComponent extends React.Component{
    render() {
        return (
            <Container>
                <Header style={StylesScreen.createColorBackground(this.props.background)}>
                    <Left>
                        <Button transparent >
                            <Icon onPress={() => this.props.onBack()}>
                                <IconBack name="keyboard-backspace" size={25} color="#fff"/>
                            </Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={[StylesScreen.createColorText('#fff'), StylesScreen.createToLocaleUppercase(), StylesScreen.createFontSize(16)]}>{this.props.title}</Title>
                    </Body>
                    {
                        this.props.favorite !== undefined &&(
                            <Right>
                                <Icon>
                                    <IconFavorito color={'#fff'} size={30} name={"favorite-border"}/>
                                </Icon>
                            </Right>
                        )
                    }
                </Header>
                <Content>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}
