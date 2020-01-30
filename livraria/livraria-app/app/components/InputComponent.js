import React, {} from 'react';
import {FlatList, DatePickerAndroid, View} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body, Form, Label, Input, Icon} from 'native-base';
import LivrariaUtil from "../utils/LivrariaUtil";

export default class InputComponent extends React.Component{

    state={
        value: '',
    };

    render() {
        return (
            <View>
                {this.props.maskCep !== undefined && (
                    <Input keyboardType={this.props.typeInput} value={this.state.value} onChangeText={val => this.setState({
                        value: LivrariaUtil.maskCep(val)
                    })} />
                )}
            </View>
        );
    }
}