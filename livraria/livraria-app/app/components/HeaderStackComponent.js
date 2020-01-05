import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Left, Button, Title, Icon, Right} from 'native-base';

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
                                <IconBack name="keyboard-backspace" size={25} color="#000"/>
                            </Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={StylesScreen.createColorText('#000')}>{this.props.title}</Title>
                    </Body>
                    {
                        this.props.favorite !== undefined &&(
                            <Right>
                                <Icon>
                                    <IconFavorito size={30} name={"favorite-border"}/>
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
