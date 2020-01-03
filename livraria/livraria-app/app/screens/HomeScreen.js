import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container} from 'native-base';
import StylesScreen from '../styles/StylesScreen';

export default class HomeScreen extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <Header style={StylesScreen.createColorBackground('#ff4')}>
                        <Body>
                            <Text>Livraria PDF</Text>
                        </Body>
                    </Header>
                </Content>
            </Container>
        );
    }
}
