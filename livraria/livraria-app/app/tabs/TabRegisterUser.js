import React, {} from 'react';
import {FlatList, DatePickerAndroid, View} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Text, Thumbnail, Left, Right, Body, Form, Label, Input, Icon} from 'native-base';
import TabListComponent from "../components/TabListComponent";
import SpaceTopComponent from "../components/componentsSpace/SpaceTopComponent";
import StylesScreen from "../styles/StylesScreen";
import InputTextComponent from "../components/InputTextComponent";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FormatterUtil from "../utils/FormatterUtil";
import RowComponent from "../components/RowComponent";
import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";
import SpaceBottomComponent from "../components/componentsSpace/SpaceBottomComponent";
import SpacePaddingLeftComponent from "../components/componentsSpace/SpacePaddingLeftComponent";
import SpacePaddingRightComponent from "../components/componentsSpace/SpacePaddingRightComponent";
import SpaceRightComponent from "../components/componentsSpace/SpaceRightComponent";
import CenterComponent from "../components/CenterComponent";
import SpaceLeftComponent from "../components/componentsSpace/SpaceLeftComponent";
import ContainerCenterComponent from "../components/ContainerCenterComponent";
import User from "../model/User";
import InputComponent from "../components/InputComponent";
import LivrariaUtil from "../utils/LivrariaUtil";

export default class TabRegisterUser extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.user = new User('', '', '', '', '', '', '', '');
        this.state={
            data: null,
            confirmaSenha: '',
            cep: '',
        }
    }

    showDatePickerTwo = async (options) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                let date = new Date(year, month, day);
                let newState = {};
                newState['date'] = date;
                let formatter = new FormatterUtil();
                this.setState({
                    ...this.user.data = formatter.formatterDatePtBr(date),
                });
                this.setState({
                    data: date,
                });
            }
        } catch (error) {

        }
    };


    onMaskCep = async (cep: string)=>{
        this.setState({
            cep: LivrariaUtil.maskCPF(cep)
        });
    };


    render() {
        return (
            <Container>
                <Content>
                    <SpaceTopComponent />
                    <Form>
                        <Item>
                            <Label>Nome</Label>
                            <Icon>
                                <AntDesign size={25} name={'user'} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.nome}
                                onChangeText={nome => this.setState({
                                    ...this.user.nome = nome
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Data de Nascimento</Label>
                            <Icon>
                                <FontAwesome name={'birthday-cake'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                showSoftInputOnFocus={false}
                                placeholder="__/__/____"
                                value={this.user.data}
                                onTouchStart={() => this.showDatePickerTwo(new Date())}
                            />
                        </Item>
                        <Item>
                            <Label>Email</Label>
                            <Icon>
                                <MaterialCommunityIcons name={'email'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.email}
                                onChangeText={email => this.setState({
                                    ...this.user.email = email
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Senha</Label>
                            <Icon>
                                <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.senha}
                                onChangeText={senha => this.setState({
                                    ...this.user.senha = senha
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Confirme Senha</Label>
                            <Icon>
                                <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.state.confirmaSenha}
                                onChangeText={senha => this.setState({
                                    confirmaSenha: senha
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Cep</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                maxLength={9}
                                keyboardType={'numeric'}
                                value={this.state.cep}
                                onChangeText={cep => this.onMaskCep(cep)}
                            />
                        </Item>
                        <Item>
                            <Label>Estado</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.estado}
                                onChangeText={estado => this.setState({
                                    ...this.user.estado = estado
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Municipio</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.cidade}
                                onChangeText={cidade => this.setState({
                                    ...this.user.cidade = cidade
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Rua</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.rua}
                                onChangeText={rua => this.setState({
                                    ...this.user.rua = rua
                                })}
                            />
                        </Item>
                        <Item>
                            <Label>Bairro</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.bairro}
                                onChangeText={bairro => this.setState({
                                    ...this.user.bairro = bairro
                                })}
                            />
                        </Item>
                        <SpaceBottomComponent />
                        <RowComponent>
                            <LeftComponent>
                                <ContainerCenterComponent>
                                    <Button onPress={() => {}} success style={{width: '85%',}}>
                                        <Text>Salvar Usuario</Text>
                                    </Button>
                                </ContainerCenterComponent>
                            </LeftComponent>
                            <RightComponent>
                                <ContainerCenterComponent>
                                    <Button onPress={() => {}} danger style={{width: '85%',}}>
                                        <Text>Limpar Campos</Text>
                                    </Button>
                                </ContainerCenterComponent>
                            </RightComponent>
                        </RowComponent>
                    </Form>
                </Content>
            </Container>
        );
    }
}