import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Icon, Form, Item, Label, Input, Button, Thumbnail} from 'native-base';
import SpaceTopComponent from "../componentsSpace/SpaceTopComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ContainerCenterComponent from "../ContainerCenterComponent";
import User from "../../model/User";
import StylesScreen from "../../styles/StylesScreen";
import SpacePaddingBottomComponent from "../componentsSpace/SpacePaddingBottomComponent";
import LayoutComponent from "../LayoutComponent";
import UserController from "../../controllers/UserController";
const urlLocal = "http://192.168.1.8:8080/api/user/autenticationUser";
export default class LoginComponent extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.user = new User('', '', '', '', '', '', '', '');
    }


    autentication = async ()=>{
       if(this.user.email != "" && this.user.senha != ""){
           const userController = new UserController;
           const data={
               email: this.user.email,
               senha: this.user.senha,
           };

           const api = await userController.userAutentication(urlLocal, data);

           console.log(api.status);
       }else{
           alert("Preencha os campos");
       }
    };


    render() {
        return (
            <Container>
                <LayoutComponent>
                    <SpaceTopComponent />
                    <Thumbnail large source={{uri: 'https://wab.org/wp-content/uploads/2017/10/fiction.jpg'}}
                           style={[StylesScreen.createWidth('90%'), StylesScreen.createHeight('100%')]}
                    />
                </LayoutComponent>
                <ContainerCenterComponent>
                    <Form>
                        <Item>
                            <Label>Email</Label>
                            <Icon>
                                <MaterialCommunityIcons name={'email'} size={25} color={'#694fad'}/>
                            </Icon>
                            <Input
                                value={this.user.email}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
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
                                secureTextEntry={true}
                                autoCapitalize={'none'}
                                onChangeText={senha => this.setState({
                                    ...this.user.senha = senha
                                })}
                            />
                        </Item>
                        <SpacePaddingBottomComponent space={20}/>
                        <Item style={[StylesScreen.removeBorderBottom(), StylesScreen.createContainerButton()]}>
                            <Button onPress={() => this.autentication()} success style={[StylesScreen.createWidth('85%'), StylesScreen.createContainerButton()]}>
                                <Text style={StylesScreen.createText('#fff', 20, 'bold')}>Entrar</Text>
                            </Button>
                        </Item>
                        <SpacePaddingBottomComponent space={20}/>
                        <Item />
                        <Button onPress={() => this.props.register()} transparent style={StylesScreen.createContainerButton()}>
                            <Text style={[StylesScreen.createText('#694fad', 16, null)
                            ]}>Não tem cadastro ? </Text>
                            <Text style={[StylesScreen.createText('#694fad', 16, null),
                                StylesScreen.createToLocaleUppercase()
                            ]}>Registar-se</Text>
                        </Button>
                    </Form>
                </ContainerCenterComponent>
            </Container>
        );
    }
}