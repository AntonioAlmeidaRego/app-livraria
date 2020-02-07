import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Form, Item, Label, Input, Button, Thumbnail} from 'native-base';
import LayoutComponent from "../LayoutComponent";
import UserDataComponent from "../componentsUser/UserDataComponent";

export default class MyAccountComponent extends React.Component{
    render() {
        return(
            <LayoutComponent>
                <UserDataComponent
                    nomeUser={this.props.nomeUser}
                    sizeTextName={18}
                    colorTextName={'#b3b1b8'}
                    emailUser={this.props.emailUser}
                    sizeTextEmail={16}
                    colorTextEmail={'#b3b1b8'}
                    colorTextData={'#b3b1b8'}
                    data={this.props.data}
                    sizeTextData={16}
                />
            </LayoutComponent>
        )
    }
}