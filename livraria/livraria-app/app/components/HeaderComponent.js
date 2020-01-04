import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab} from 'native-base';
import StylesScreen from '../styles/StylesScreen';

export default class HeaderComponent extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <Header style={StylesScreen.createColorBackground('#fff423')}>
                        <Body>
                            <Text>Livraria PDF</Text>
                        </Body>
                    </Header>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}
