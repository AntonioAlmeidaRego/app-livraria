import React from 'react';
import {View, Text} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Left, TabHeading} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import IconHome from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextComponent from "../../components/TextComponent";
import SpacePaddingLeftComponent from "../../components/componentsSpace/SpacePaddingLeftComponent";
export default class HomeScreen extends React.Component{

    detalhe = async (objeto)=>{
        this.props.navigation.navigate("ListagemLivrosLinkedCategoria", {
            categoria: objeto,
            onDetalheLivro: this.detalheLivro
        });
    };

    detalheLivro = async (objeto)=>{
        this.props.navigation.navigate("DetalheLivro", {
            livro: objeto
        });
    };


    render() {
        return (
            <HeaderComponent
                title={"Livraria PDF"}
                background={'#694fad'}
                iconLeft={
                    <Icon>
                        <FontAwesome size={30} name={'book'} color={'#fff'} />
                    </Icon>
                }
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}}
                             heading={<TabHeading style={StylesScreen.createColorBackground('#694fad')}><Icon name={'ios-list'} /><SpacePaddingLeftComponent space={3}/><TextComponent text={'Categorias'} color={'#fff'}/></TabHeading>}>
                            <TabListagemCategorias onDetalhe={this.detalhe}/>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}}
                             heading={<TabHeading style={StylesScreen.createColorBackground('#694fad')}><Icon name={'ios-book'} /><SpacePaddingLeftComponent space={3}/><TextComponent text={'Livros'} color={'#fff'}/></TabHeading>}>
                            <TabListagemLivros onDetalheLivro={this.detalheLivro} />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#694fad'}} activeTextStyle={{color: '#fff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#694fad'}} heading={"Promoções"}>
                            <TabListagemPromocoes onDetalheLivro={this.detalheLivro}/>
                        </Tab>
                    </Tabs>
                }
            />
        );
    }
}
