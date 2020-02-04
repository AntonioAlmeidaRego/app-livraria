import React from 'react';
import {View, Text, DatePickerAndroid} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Form, Item, Label, Input, Button} from 'native-base';
import SpaceTopComponent from "../../components/componentsSpace/SpaceTopComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SpaceBottomComponent from "../../components/componentsSpace/SpaceBottomComponent";
import RowComponent from "../../components/RowComponent";
import LeftComponent from "../../components/LeftComponent";
import ContainerCenterComponent from "../../components/ContainerCenterComponent";
import RightComponent from "../../components/RightComponent";
import User from "../../model/User";
import FormatterUtil from "../../utils/FormatterUtil";
import LivrariaUtil from "../../utils/LivrariaUtil";
import ApiController from "../../controllers/ApiController";
import UserController from "../../controllers/UserController";
import HeaderStackComponent from "../../components/HeaderStackComponent";
import HeaderComponent from "../../components/HeaderComponent";
import TextComponent from "../../components/TextComponent";

let arrayCep = [];

const url = "http://192.168.1.8:8080/api/user/saveUser";
const urlLocal = "http://192.168.1.8:8080/api/user/verificarEmail/";

export default class RegisterUserScreen extends React.Component{

    static navigationOptions ={
        header: null,
    };

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
            isValid: false,
            isInValid: false,
            isPasswordEquals: false,
            isInserting: false,
            isCepFound: false,
            isInsertingCep: false,
            isInsertingCepValue: false,
            isDeletingCep: false,
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

        await this.verificandoCep(cep);
    };

    verificandoCep = async ()=>{
        if(LivrariaUtil.isInserting(this.state.cep.split(''), arrayCep)){
            arrayCep = this.state.cep.split('');
            this.setState({
                isDeletingCep: false,
                isInsertingCep: false,
            });
        }else if(LivrariaUtil.isDeleting(this.state.cep.split(''), arrayCep)){
            arrayCep.pop();
            this.setState({
                isInsertingCep: false,
                isDeletingCep: true,
            });
        }
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
                isCepFound: true,
                isInsertingCep: true,
            });
        }else {
            this.setState({
                isCepFound: false,
                isInsertingCep: true,
            });
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
        console.log(this.user.senha);
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


    verificarEmailExist = async (email: string)=>{
        this.setState({
            ...this.user.email = email,
        });

        let userController = new UserController;

        const api = await userController.checkEmail(urlLocal+email);

        if(api.status == 404){
            this.setState({
                isValid: true,
                isInValid: false,
            });
        }else if(api.status == 200){
            this.setState({
                isValid: false,
                isInValid: true,
            });
        }
    };

    verificarSenhas = async (confirmarSenha: string)=>{
        this.setState({
            confirmaSenha: confirmarSenha,
        });

        this.setState({
            isInserting: true,
            isPasswordEquals: LivrariaUtil.checkPasswords(this.user.senha, confirmarSenha),
        });
    };


    showMessageCep(text: string) {
        if (!this.state.isCepFound && this.state.isInsertingCep) {
            return (
                <TextComponent
                    color={'red'}
                    size={12}
                    text={text}
                />
            );
        }else{
            if(this.state.isDeletingCep){
                return;
            }
        }
    }

    render(){
        return (
            <HeaderStackComponent
                title={"Registro"}
                iconLeft={
                    <Icon />
                }
                onBack={() => this.props.navigation.pop()}
                background={'#694fad'}
                children={
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
                                        onChangeText={email => this.verificarEmailExist(email)}
                                    />
                                    {this.state.isValid == true && this.state.isInValid == false && (
                                        [
                                        <TextComponent
                                            color={'green'}
                                            size={12}
                                            text={'Email está ok!'}
                                        />,
                                        <Icon>
                                            <AntDesign color={'#694fad'} name={'check'} size={25} />
                                        </Icon>]
                                    )}
                                    {this.state.isInValid == true && this.state.isValid == false && (
                                        [
                                            <TextComponent
                                                color={'red'}
                                                size={12}
                                                text={'Email já Existe!'}
                                            />,
                                        <Icon>
                                            <AntDesign name={'close'} size={25} color={'#694fad'}/>
                                        </Icon>]
                                    )}
                                </Item>
                                <Item>
                                    <Label>Senha</Label>
                                    <Icon>
                                        <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#694fad'}/>
                                    </Icon>
                                    <Input
                                        value={this.user.senha}
                                        secureTextEntry={true}
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
                                        secureTextEntry={true}
                                        onChangeText={senha => this.verificarSenhas(senha)}
                                    />
                                    {this.state.isPasswordEquals == true && this.state.isInserting == true && (
                                        [
                                            <TextComponent
                                                color={'green'}
                                                size={12}
                                                text={'Senhas iguais!'}
                                            />,
                                            <Icon>
                                                <AntDesign color={'#694fad'} name={'check'} size={25} />
                                            </Icon>]
                                    )}
                                    {this.state.isPasswordEquals == false && this.state.isInserting == true &&(
                                        [
                                            <TextComponent
                                                color={'red'}
                                                size={12}
                                                text={'Senhas não são iguais!'}
                                            />,
                                            <Icon>
                                                <AntDesign name={'close'} size={25} color={'#694fad'}/>
                                            </Icon>]
                                    )}
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
                                    {this.showMessageCep('Cep não encontrado!')}
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
                                        <Button onPress={() => this.onSaveUser()} success style={{width: '85%', justifyContent: 'center'}}>
                                            <TextComponent
                                                text={'Salvar Usuario'}
                                                color={'#fff'}
                                                size={18}
                                            />
                                        </Button>
                                    </LeftComponent>
                                    <RightComponent>
                                        <Button onPress={() => this.onClear()} danger style={{width: '85%', justifyContent: 'center'}}>
                                            <TextComponent
                                                text={'Limpar Campos'}
                                                color={'#fff'}
                                                size={18}
                                            />
                                        </Button>
                                    </RightComponent>
                                </RowComponent>
                            </Form>
                        </Content>
                    </Container>
                }
            />
        );
    }
}