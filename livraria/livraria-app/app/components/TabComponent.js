import React, {} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body} from 'native-base';
import CardLivroDescrition from "./CardLivroDescrition";
import StylesScreen from "../styles/StylesScreen";
import EmptyComponent from "./componentsEmpty/EmptyComponent";

export default class TabComponent extends React.Component{

    state={
        viewSpinner: true,
    };

    componentDidMount(): void {
        setInterval(()=>{
            this.setState({
                viewSpinner: false,
            });
        }, 8000);
    }

    showViewSpinner(){
        if(this.state.viewSpinner){
            return (
                <Spinner color={'#694fad'}/>
            )
        }
        else if(this.props.isEmpty){
            return(
                <EmptyComponent
                    uri={'https://png.pngtree.com/svg/20160616/category_59688.png'}
                    title={'Sem Livros'}
                />
            );
        }
    }

    render() {
        return (
            <Content>
                <FlatList
                    ListEmptyComponent={
                        this.showViewSpinner()
                    }
                    data={this.props.array}
                    renderItem={({ item }) =>
                        [
                            <CardLivroDescrition livro={item} onDetalheLivro={this.props.onDetalheLivro} price={item.preco} subtitle={item.titulo} id={item.id} title={item.titulo}/>
                        ]
                    }
                />
                <View style={StylesScreen.createSpaceBottom()}>

                </View>
            </Content>
        );
    }
}
