import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import IconHome from 'react-native-vector-icons/Octicons';

export default class LogoutScreen extends React.Component{
    render(){
        return (
            <View><Text>Saindo....</Text></View>
        );
    }
}