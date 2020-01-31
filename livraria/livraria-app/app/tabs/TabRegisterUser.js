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
import UserController from "../controllers/UserController";
import ApiController from "../controllers/ApiController";
import toArray from "@babel/runtime/helpers/esm/toArray";

const url = "http://192.168.1.7:8080/api/user/saveUser";

export default class TabRegisterUser extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.user = new User('', '', '', '', '', '', '', '');
        this.state={
            data: null,
            confirmaSenha: '',
            cep: '',
            isDisabledCep: false,
            isDisabledBairro: false,
            isDisabledRua: false,
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
            cep: LivrariaUtil.maskCep(cep)
        });
    };

    onConsulCep = async ()=>{
        const api = new ApiController();
        const objeto = await api.get('https://api.postmon.com.br/v1/cep/'+this.state.cep);
        if(!Array.isArray(objeto)){
            this.setState({
                ...this.user.estado = objeto.estado_info.nome,
                ...this.user.cidade = objeto.cidade,
                ...this.user.bairro = objeto.bairro != "" ? objeto.bairro : this.user.bairro,
                ...this.user.rua = objeto.logradouro !== undefined && objeto.logradouro != null ? objeto.logradouro : this.user.rua,
                isDisabledCep: true,
                isDisabledRua: this.user.rua != "" ? true : false,
                isDisabledBairro: this.user.bairro != "" ? true : false,
            });
        }else {
            alert("CEP não encontrado!");
        }
    };

    onClear = async () =>{
        this.setState({
            ...this.user.estado = "",
            ...this.user.cidade = "",
            ...this.user.bairro = "",
            ...this.user.rua = "",
            ...this.user.data = "",
            ...this.user.senha = "",
            ...this.user.email = "",
            ...this.user.nome = "",
            confirmaSenha: '',
            cep: '',
            isDisabledRua: false,
            isDisabledBairro: false,
            isDisabledCep: false,
        });
    };

    onCancelConsultCep = async ()=>{
        this.setState({
            ...this.user.estado = "",
            ...this.user.cidade = "",
            ...this.user.bairro = "",
            ...this.user.rua = "",
            isDisabledCep: false,
            isDisabledRua: false,
            isDisabledBairro: false,
            cep: '',
        });
    };

    onSaveUser = async ()=>{
        const format = new FormatterUtil;
        if(!this.user.isEmpty()){
            const data ={
                nome: this.user.nome,
                email: this.user.email,
                senha: this.user.senha,
                rua: this.user.rua,
                bairro: this.user.bairro,
                dataNascimento: format.formatterDateUSA(this.user.data),
                municipio: this.user.cidade,
                estado: this.user.estado
            };

            const userController = new UserController;
            const api = await userController.saveUser(url, data);
            if(api.status == 201){
                alert("Salvo com Sucesso!")
            }else if(api.status == 400 || api.status == 404 || api.status == 500){
                alert("Erro ao Salvar!");
            }
           await this.onClear();
        }else{
            alert("Informe todos os dados!!!");
        }
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
                                disabled={this.state.isDisabledCep}
                                value={this.state.cep}
                                onChangeText={cep => this.onMaskCep(cep)}
                            />
                            {this.state.isDisabledCep == false &&(
                                <Icon onPress={() => this.onConsulCep()}>
                                    <AntDesign color={'#694fad'} size={25} name={'search1'} />
                                </Icon>
                            )}
                            {this.state.isDisabledCep == true &&(
                                <Icon onPress={() => this.onCancelConsultCep()}>
                                    <FontAwesome name={'remove'} size={25} color={'#694fad'} />
                                </Icon>
                            )}
                        </Item>
                        <Item>
                            <Label>Estado</Label>
                            <Icon>
                                <MaterialIcons name={'add-location'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.estado}
                                disabled={true}
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
                                disabled={true}
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
                                disabled={this.state.isDisabledRua}
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
                                disabled={this.state.isDisabledBairro}
                                onChangeText={bairro => this.setState({
                                    ...this.user.bairro = bairro
                                })}
                            />
                        </Item>
                        <SpaceBottomComponent />
                        <RowComponent>
                            <LeftComponent>
                                <ContainerCenterComponent>
                                    <Button onPress={() => this.onSaveUser()} success style={{width: '85%',}}>
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