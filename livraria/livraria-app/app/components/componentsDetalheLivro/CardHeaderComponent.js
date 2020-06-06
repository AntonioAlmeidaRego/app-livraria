import React from 'react';
import {Thumbnail} from 'native-base';
import StylesScreen from "../../styles/StylesScreen";
import BoxContainerComponent from "../BoxContainerComponent";
import ContainerCenterComponent from "../ContainerCenterComponent";
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";
import TextComponent from "../TextComponent";
import LeftComponent from "../LeftComponent";

export default class CardHeaderComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent
                                   width={'100%'} height={'100%'} radius={15} padding={15}>
                <ContainerCenterComponent>
                    <Thumbnail square style={[StylesScreen.createWidth(145), StylesScreen.createHeight(195)]}
                               source={{uri: this.props.uri}} />
                    <SpaceTopComponent />
                </ContainerCenterComponent>
                <LeftComponent>
                    <TextComponent
                        text={this.props.title}
                        color={'#585858'}
                        size={18}
                    />
                </LeftComponent>
                <LeftComponent>
                    <TextComponent
                        text={'Lançamento '+this.props.year}
                        color={'#585858'}
                        size={16}
                    />
                </LeftComponent>
                <SpaceTopComponent />
                <LeftComponent>
                    <TextComponent
                        text={'(Cód. 1674455) '}
                        color={'#585858'}
                        size={14}
                    />
                </LeftComponent>
            </BoxContainerComponent>
        );
    }
}
