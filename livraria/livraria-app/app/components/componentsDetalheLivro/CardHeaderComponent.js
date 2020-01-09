import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, CardItem, Thumbnail, Card} from 'native-base';

export default class CardHeaderComponent extends React.Component{
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.uri}} />
                        <Body>
                            <Text>{this.props.title}</Text>
                            <Text note>{this.props.year}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: this.props.uri}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        );
    }
}
