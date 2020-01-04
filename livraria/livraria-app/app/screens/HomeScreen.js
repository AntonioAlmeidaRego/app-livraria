import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab} from 'native-base';
import StylesScreen from '../styles/StylesScreen';
import TabListagemLivros from '../tabs/TabListagemLivros';
import TabListagemPromocoes from '../tabs/TabListagemPromocoes';
import HeaderComponent from '../components/HeaderComponent';

export default class HomeScreen extends React.Component{
    render() {
        return (
            <HeaderComponent
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#ffd410'}} activeTextStyle={{color: '#000'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#ffd410'}} heading={"Livros"}>
                            <TabListagemLivros />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#ffd410'}} activeTextStyle={{color: '#000'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: '#ffd410'}} heading={"Promoções"}>
                            <TabListagemPromocoes />
                        </Tab>
                    </Tabs>
                }
            />
        );
    }
}
