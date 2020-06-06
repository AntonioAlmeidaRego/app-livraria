import React from 'react';
import {Text} from 'react-native';
import TextComponent from "../TextComponent";
import RowComponent from "../RowComponent";
import LeftComponent from "../LeftComponent";
import BorderComponent from "../BorderComponent";
import BoxContainerComponent from "../BoxContainerComponent";
import SpaceLeftComponent from "../componentsSpace/SpaceLeftComponent";
import SpacePaddingTopComponent from "../componentsSpace/SpacePaddingTopComponent";
import RightComponent from "../RightComponent";
import SpaceRightComponent from "../componentsSpace/SpaceRightComponent";
import SpacePaddingBottomComponent from "../componentsSpace/SpacePaddingBottomComponent";

export default class UserDataComponent extends React.Component{
    render() {
        return(
            <BoxContainerComponent
        width={'100%'} height={'100%'} radius={15} padding={7}>
                <BorderComponent background={'#fff'}  color={"#694fad"} borderTop={true} borderWidth={2.5} width={'98%'} height={'100%'} padding={2}>
                    <SpaceLeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextOne}
                                text={this.props.oneText}
                                size={this.props.sizeTextOne}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={15} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextTwo}
                                text={this.props.twoText}
                                size={this.props.sizeTextTwo}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextThree}
                                text={this.props.threeText}
                                size={this.props.sizeTextThree}Text
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextFour}
                                text={this.props.fourText}
                                size={this.props.sizeTextFour}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextFive}
                                text={this.props.fiveText}
                                size={this.props.sizeTextFive}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingBottomComponent space={5} />
                    </SpaceLeftComponent>
                    <RowComponent>
                        {this.props.buttonLeft === undefined &&(
                            <LeftComponent />
                        )}
                        <SpaceRightComponent>
                            {this.props.buttonRight !== undefined &&(
                                <RightComponent>
                                    {this.props.buttonRight}
                                </RightComponent>
                            )}
                        </SpaceRightComponent>
                    </RowComponent>
                </BorderComponent>
            </BoxContainerComponent>
        )
    }
}
