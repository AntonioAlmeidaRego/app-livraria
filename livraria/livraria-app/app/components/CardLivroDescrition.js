import React from 'react';
import {Thumbnail, ListItem, Left, Right} from 'native-base';
import StylesScreen from "../styles/StylesScreen";
import BorderComponent from "./BorderComponent";
import RowComponent from "./RowComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import TextComponent from "./TextComponent";
import SpaceTopComponent from "./componentsSpace/SpaceTopComponent";
import SpaceBottomComponent from "./componentsSpace/SpaceBottomComponent";
import CenterComponent from "./CenterComponent";
import LayoutComponent from "./LayoutComponent";
import ConversorUtil from "../utils/ConversorUtil";
import LivrariaUtilImpl from "../utils/LivrariaUtilImpl";

const livrariaUtil = new LivrariaUtilImpl;
const urlImage = "https://livraria-pdf.herokuapp.com/livro/imagem/";
const urlLocalImage = "http://192.168.1.7:8080/livro/imagem/";

export default class CardLivroDescrition  extends React.Component{

    state={
        parcelamento: {},
    };


    async componentDidMount(){
        const data = await this.props.onParcelamento(this.props.livro);
        this.setState({
            parcelamento: data,
        });

        console.log(this.props.livro);
    }

    render() { 
        return(
            <LayoutComponent
                >
                <BorderComponent button={this.props.onDetalheLivro}
                                 object={this.props.livro} color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <RowComponent>
                        <LeftComponent>
                            <Thumbnail square style={[StylesScreen.createWidth(145), StylesScreen.createHeight(195)]}
                                       source={{uri: urlImage+this.props.id}} />
                        </LeftComponent> 
                        <RightComponent>
                            <TextComponent
                                text={this.props.title}
                                upper
                                color={'#000'}
                                size={14}
                                weight={'bold'} 
                                style={{paddingVertical: 3}}
                            />
                            <TextComponent
                                text={this.props.subtitle}
                                upper
                                color={'#000'}
                                size={11}
                            />
                            <TextComponent
                                text={'R$ '+ ConversorUtil.convertsPointToComma(livrariaUtil.calPMT(this.props.price, this.state.parcelamento.totalParcelas, '2,29%')
                                    .toFixed(2) * this.state.parcelamento.totalParcelas)}
                                upper
                                color={'#000'}
                                size={25}
                            />
                            <TextComponent
                                text={this.state.parcelamento.totalParcelas+'x' + ' de R$  '+
                                livrariaUtil.calPMT(this.props.price, this.state.parcelamento.totalParcelas, '2,29%').toFixed(2)
                                + ' com juros'}
                                size={16}
                                color={'#b3b1b8'}
                            /> 
                            <RowComponent>
                                <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                                <Thumbnail style={{width: 20, height: 20}} source={{uri: 'https://i.pinimg.com/originals/54/27/d1/5427d1dcdda19c993d44d6798ef029a2.png'}}/>
                            </RowComponent>
                            <SpaceBottomComponent space={3} />
                        </RightComponent>
                    </RowComponent>
                </BorderComponent>
            </LayoutComponent>
        );
    }
}
