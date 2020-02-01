import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Right, Icon} from 'native-base';
import StylesScreen from '../styles/StylesScreen';


export default class HeaderComponent extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <Header style={StylesScreen.createColorBackground(this.props.background)}>
                        {this.props.iconLeft !== undefined && (
                            <Left>
                                {this.props.iconLeft}
                            </Left>
                        )}
                        <Body>
                            <Title style={{color: '#fff',}}>{this.props.title}</Title>
                        </Body>
                        {this.props.iconRight !== undefined && (
                            <Right>
                                {this.props.iconRight}
                            </Right>
                        )}
                    </Header>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}
