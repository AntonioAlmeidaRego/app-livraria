import React from 'react';
import {Icon, Tab, TabHeading, Tabs} from 'native-base';
import TabListagemLivros from '../../tabs/TabListagemLivros';
import TabListagemPromocoes from '../../tabs/TabListagemPromocoes';
import HeaderComponent from '../../components/HeaderComponent';
import TabListagemCategorias from '../../tabs/TabListagemCategorias';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextComponent from "../../components/TextComponent";
import StylesScreen from '../../styles/StylesScreen';
import SpacePaddingLeftComponent from '../../components/componentsSpace/SpacePaddingLeftComponent';
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
                background={'#DF5757'}
                iconLeft={
                    <Icon>
                        <FontAwesome size={30} name={'book'} color={'#fff'} />
                    </Icon>
                }
                children={
                    <Tabs>
                        <Tab tabStyle={{backgroundColor: '#DF5757'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#DF5757'}}
                             heading={<TabHeading style={StylesScreen.createColorBackground('#DF5757')}><Icon name={'ios-list'} /><SpacePaddingLeftComponent space={3}/><TextComponent text={'Categorias'.toUpperCase()} color={'#fff'}/></TabHeading>}>
                            <TabListagemCategorias onDetalhe={this.detalhe}/>
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#DF5757'}} activeTextStyle={{color: '#fff'}}
                             textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#DF5757'}}
                             heading={<TabHeading style={StylesScreen.createColorBackground('#DF5757')}>
                                 <Icon name={'ios-book'} /><SpacePaddingLeftComponent space={3}/><TextComponent text={'Livros'.toUpperCase()} color={'#fff'}/></TabHeading>}>
                            <TabListagemLivros onDetalheLivro={this.detalheLivro} />
                        </Tab>
                        <Tab tabStyle={{backgroundColor: '#DF5757'}} activeTextStyle={{color: '#fff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#DF5757'}} heading={"Promoções".toUpperCase()}>
                            <TabListagemPromocoes onDetalheLivro={this.detalheLivro}/>
                        </Tab>
                    </Tabs>
                }
            />
        );
    }
}
