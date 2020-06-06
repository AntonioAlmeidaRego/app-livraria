import React from 'react';
import {FlatList, View} from 'react-native';
import {Content, Spinner} from 'native-base';
import CardLivroDescrition from "./CardLivroDescrition";
import EmptyComponent from "./componentsEmpty/EmptyComponent";
import StylesScreen from '../styles/StylesScreen';

export default class TabComponent extends React.Component{

    state={
        viewSpinner: this.props.isViewSpinner,
    };

    showViewSpinner(){
        if(this.state.viewSpinner){
            return (
                <Spinner color={'#DF5757'}/>
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
                            <CardLivroDescrition 
                                onParcelamento={this.props.onParcelamento}
                                livro={item} onDetalheLivro={this.props.onDetalheLivro}
                                price={item.preco}
                                subtitle={item.titulo}
                                id={item.id} 
                                title={item.titulo}
                            />
                        ]
                    }
                />
                <View style={StylesScreen.createSpaceBottom()}>

                </View>
            </Content>
        );
    }
}
