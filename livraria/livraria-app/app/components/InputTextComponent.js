import React , {} from 'react';
import {View, Text} from 'react-native';
import StylesScreen from "../../app/styles/StylesScreen";
import {Input, Item, Label, Container} from "native-base";
import TextComponent from "./TextComponent";
import RowComponent from "./RowComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import ContainerComponent from "./ContainerComponent";
import SpaceRightComponent from "./componentsSpace/SpaceRightComponent";
import SpaceLeftComponent from "./componentsSpace/SpaceLeftComponent";
import SpaceBottomComponent from "./componentsSpace/SpaceBottomComponent";

export default class InputTextComponent extends React.Component{
    render() {

        return (
            [<RowComponent>
                <LeftComponent value={3}>
                    <ContainerComponent>
                        <TextComponent
                            color={this.props.colorLabel}
                            text={this.props.label}
                            size={this.props.size}
                            weight={this.props.weight}
                            justifyContent={this.props.justifyContent}
                            alignSelf={this.props.alignSelf}
                            alignItems={this.props.alignItems}
                            textAlign={this.props.textAlign}
                            upper={this.props.upper !== undefined ? true : null}
                        />
                    </ContainerComponent>
                </LeftComponent>
                <RightComponent value={10}>
                    <Item>
                        {this.props.renderIconLeft}
                        <Input keyboardType={this.props.type}
                               disabled={this.props.disabled !== undefined ? true : false}
                               style={[StylesScreen.createBorder(this.props.borderColor,
                                   this.props.borderWidthValue, this.props.radiusValue), StylesScreen.createPaddingLeft(this.props.paddingValue)]} />
                        {this.props.renderIconRight}
                    </Item>
                </RightComponent>

            </RowComponent>,
                <SpaceBottomComponent value={3} />
            ]
        );
    }
}