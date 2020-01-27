import React, {} from 'react';
import {FlatList} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body, Form, Label, Input, Icon} from 'native-base';
import TabListComponent from "../components/TabListComponent";
import SpaceTopComponent from "../components/componentsSpace/SpaceTopComponent";
import StylesScreen from "../styles/StylesScreen";
import InputTextComponent from "../components/InputTextComponent";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class TabRegisterUser extends React.Component{
    render() {
        return (
            <Container>
                <Content>
                    <SpaceTopComponent />
                    <Form>
                        <InputTextComponent
                            label={"Nome"}
                            size={16}
                            upper
                            colorLabel={'#694fad'}
                            paddingValue={10}
                            renderIconLeft={
                                <Icon>
                                    <AntDesign size={25} name={'user'} color={'#694fad'}/>
                                </Icon>
                            }
                        />
                        <InputTextComponent
                            label={"Data de NAscimento"}
                            size={16}
                            type={'numeric'}
                            upper
                            colorLabel={'#694fad'}
                            paddingValue={10}

                            borderColor={'#694fad'}
                            renderIconLeft={
                                <Icon>
                                    <FontAwesome name={'birthday-cake'} size={25} color={'#694fad'}/>
                                </Icon>
                            }
                        />
                        <InputTextComponent
                            label={"Email"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            paddingValue={10}
                            renderIconLeft={
                                <Icon>
                                    <MaterialCommunityIcons name={'email'} size={25} color={'#694fad'}/>
                                </Icon>
                            }
                        />
                        <InputTextComponent
                            label={"Senha"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            renderIconLeft={
                                <Icon>
                                    <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#694fad'}/>
                                </Icon>
                            }
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Confirme Senha"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            renderIconLeft={
                                <Icon>
                                    <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#694fad'}/>
                                </Icon>
                            }
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Cep"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            renderIconLeft={
                                <Icon>
                                    <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                                </Icon>
                            }
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Estado"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            disabled={true}
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Municipio"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            disabled={true}
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Rua"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            paddingValue={10}
                        />
                        <InputTextComponent
                            label={"Bairro"}
                            size={16}
                            upper
                            type={'email'}
                            colorLabel={'#694fad'}
                            paddingValue={10}
                        />
                    </Form>
                </Content>
            </Container>
        );
    }
}