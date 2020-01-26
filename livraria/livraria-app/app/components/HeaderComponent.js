import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left} from 'native-base';
import StylesScreen from '../styles/StylesScreen';

export default class HeaderComponent extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <Header style={StylesScreen.createColorBackground('#694fad')}>
                        <Left/>
                        <Body>
                            <Title style={{color: '#fff',}}>{this.props.title}</Title>
                        </Body>
                    </Header>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}
