import React from 'react';
import {View, Text, Image, ActivityIndicator, Dimensions} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Form, Item, Label, Input, Button, Thumbnail, Right} from 'native-base';
import LayoutComponent from "../LayoutComponent";
import TextComponent from "../TextComponent";
import RowComponent from "../RowComponent";
import LeftComponent from "../LeftComponent";
import BorderComponent from "../BorderComponent";
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";
import BoxContainerComponent from "../BoxContainerComponent";
import SpaceLeftComponent from "../componentsSpace/SpaceLeftComponent";
import SpacePaddingTopComponent from "../componentsSpace/SpacePaddingTopComponent";
import RightComponent from "../RightComponent";
import CenterComponent from "../CenterComponent";
import SpaceRightComponent from "../componentsSpace/SpaceRightComponent";

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
                                color={this.props.colorTextName}
                                text={this.props.nomeUser}
                                size={this.props.sizeTextName}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={15} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextEmail}
                                text={this.props.emailUser}
                                size={this.props.sizeTextEmail}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextData}
                                text={this.props.data}
                                size={this.props.sizeTextData}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                        <SpacePaddingTopComponent space={5} />
                        <LeftComponent>
                            <TextComponent
                                color={this.props.colorTextPhone}
                                text={this.props.phone}
                                size={this.props.sizeTextPhone}
                                upper={this.props.upper}
                            />
                        </LeftComponent>
                    </SpaceLeftComponent>
                    <RowComponent>
                        <LeftComponent />
                        <SpaceRightComponent>
                            <RightComponent>
                                <Button transparent>
                                    <RowComponent>
                                        <CenterComponent>
                                            <TextComponent
                                                text={'Alterar Email ou senha'}
                                                upper
                                                weight={'bold'}
                                                color={'#694fad'}
                                            />
                                        </CenterComponent>
                                    </RowComponent>
                                </Button>
                            </RightComponent>
                        </SpaceRightComponent>
                    </RowComponent>
                </BorderComponent>
            </BoxContainerComponent>
        )
    }
}