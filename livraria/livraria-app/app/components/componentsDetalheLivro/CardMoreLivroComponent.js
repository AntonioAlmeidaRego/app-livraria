import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'native-base';
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";
import LeftComponent from "../LeftComponent";
import RightComponent from "../RightComponent";
import TextComponent from "../TextComponent";

export default class CardMoreLivroComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent justifyContent={'center'} alignSelf={'center'} alignItems={'center'}
                                   width={'100%'} height={'100%'} radius={15} padding={2}>
                <BorderComponent color={"#c2c0c7"} value={0.3} width={'100%'} height={'100%'} padding={2}>
                    <View>
                        <ListItem itemDivider>
                            <LeftComponent>
                                <TextComponent
                                    text={'Ano'}
                                    color={"#000"}
                                    size={16}
                                    weight={'bold'}
                                    upper
                                />
                            </LeftComponent>
                            <RightComponent>
                                <TextComponent
                                    text={this.props.ano}
                                    color={"#000"}
                                    size={16}
                                />
                            </RightComponent>
                        </ListItem>
                        <ListItem>
                            <LeftComponent>
                                <TextComponent
                                    text={'peso'}
                                    color={"#000"}
                                    size={16}
                                    weight={'bold'}
                                    upper
                                />
                            </LeftComponent>
                            <RightComponent>
                                <TextComponent
                                    text={this.props.peso}
                                    color={"#000"}
                                    size={16}
                                />
                            </RightComponent>
                        </ListItem>
                        <ListItem itemDivider>
                            <LeftComponent>
                                <TextComponent
                                    text={'largura'}
                                    color={"#000"}
                                    size={16}
                                    weight={'bold'}
                                    upper
                                />
                            </LeftComponent>
                            <RightComponent>
                                <TextComponent
                                    text={this.props.largura}
                                    color={"#000"}
                                    size={16}
                                />
                            </RightComponent>
                        </ListItem>
                        <ListItem>
                            <LeftComponent>
                                <TextComponent
                                    text={'altura'}
                                    color={"#000"}
                                    size={16}
                                    weight={'bold'}
                                    upper
                                />
                            </LeftComponent>
                            <RightComponent>
                                <TextComponent
                                    text={this.props.altura}
                                    color={"#000"}
                                    size={16}
                                />
                            </RightComponent>
                        </ListItem>
                    </View>

                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}
