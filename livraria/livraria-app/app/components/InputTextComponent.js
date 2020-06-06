import React from 'react';
import {View} from 'react-native';
import {Input} from "native-base";
import TextComponent from "./TextComponent";
import RowComponent from "./RowComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import CenterComponent from "./CenterComponent";
import BorderComponent from "./BorderComponent";
import ContainerCenterComponent from "./ContainerCenterComponent";

export default class InputTextComponent extends React.Component{
    render() {
        console.log(this.props.borderBottom);
        return (
            <RowComponent>
                <LeftComponent>
                   <ContainerCenterComponent>
                       <RowComponent>
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
                           <View style={StylesScreen.createPaddingLeft(6)}></View>
                           {this.props.renderIconLeft}
                       </RowComponent>
                   </ContainerCenterComponent>
                </LeftComponent>
                <CenterComponent>
                    <BorderComponent width={this.props.width} height={this.props.height} borderBottom={this.props.borderBottom} borderWidth={this.props.borderWidth} color={this.props.color}>
                        <Input keyboardType={this.props.type}
                               disabled={this.props.disabled !== undefined ? true : false}
                        />
                    </BorderComponent>
                </CenterComponent>
                {this.props.renderIconRight !== undefined &&(
                    <RightComponent>
                        {this.props.renderIconRight}
                    </RightComponent>
                )}
            </RowComponent>
        );
    }
}
