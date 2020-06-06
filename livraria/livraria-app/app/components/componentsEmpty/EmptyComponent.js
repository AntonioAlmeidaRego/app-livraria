import React from 'react';
import {Thumbnail} from 'native-base';
import LayoutComponent from "../LayoutComponent";
import StylesScreen from "../../styles/StylesScreen";
import RowComponent from "../RowComponent";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import TextComponent from "../TextComponent";
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";

export default class EmptyComponent extends React.Component{
    render(){
        return (
            <LayoutComponent>
                <SpaceTopComponent />
                <RowComponent>
                    <LeftComponent>
                        <Thumbnail
                            source={{uri: this.props.uri}}
                            square
                            style={[StylesScreen.createWidth(200), StylesScreen.createHeight(200)]}
                        />
                    </LeftComponent>
                    <RightComponent>
                        <TextComponent
                            text={this.props.title}
                            size={20}
                            upper
                            color={'#b3b1b8'}
                        />
                    </RightComponent>
                </RowComponent>
            </LayoutComponent>
        );
    }
}
