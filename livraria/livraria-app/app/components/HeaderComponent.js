import React from 'react';
import {Body, Container, Content, Header, Left, Right, Title} from 'native-base';
import StylesScreen from '../styles/StylesScreen';
  
export default class HeaderComponent extends React.Component{
    render() {
        return (
            <Container>
                <Content style={StylesScreen.createColorBackground(this.props.backgroundContent)}>
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
