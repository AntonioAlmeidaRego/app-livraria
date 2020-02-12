import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Card, CardItem, Thumbnail, Left,
    Right, Button, Icon, ListItem, List, Item, Input, Label, Spinner} from 'native-base';

export default class LoadingComponent extends React.Component{
    render() {
        return (
            <View>
                { this.props.isViewSpinner &&(
                    <Spinner color={'#694fad'}/>
                )}
                {!this.props.isViewSpinner&&(
                    this.props.children
                )}
            </View>
        );
    }
}