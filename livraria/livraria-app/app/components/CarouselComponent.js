import React from 'react';
import {ScrollView} from 'react-native';
import LayoutComponent from "./LayoutComponent";
import CardLivroDescrition from "./CardLivroDescrition";

export default class CarouselComponent extends React.Component{
    render() {
        return (
            <LayoutComponent>
                <ScrollView
                    horizontal
                >
                {this.props.array.map(item=>
                    <CardLivroDescrition onParcelamento={this.props.onParcelamento} parcelamento={this.props.parcelamento} livro={item} onDetalheLivro={this.props.onDetalheLivro} price={item.preco} subtitle={item.titulo} id={item.id} title={item.titulo} />
                )}
                </ScrollView>
            </LayoutComponent>
        );
    }
}
