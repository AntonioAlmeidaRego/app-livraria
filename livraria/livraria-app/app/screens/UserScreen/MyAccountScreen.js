import React from 'react';
import {View} from 'react-native';
import {Button} from 'native-base';
import UserDataComponent from "../../components/componentsUser/UserDataComponent";
import SessionController from "../../controllers/SessionController";
import HeaderComponent from "../../components/HeaderComponent";
import FormatterUtil from "../../utils/FormatterUtil";
import RowComponent from "../../components/RowComponent";
import CenterComponent from "../../components/CenterComponent";
import TextComponent from "../../components/TextComponent";

const formatterUtil = new FormatterUtil;

export default class MyAccountScreen extends React.Component{

    state = {
        usuario: {},
    };

    async componentDidMount(): void {
        let session = new SessionController;
        this.setState({
            usuario: await session.getSession("usuario-logado"),
        });
    }

    render() {
        return(
            <HeaderComponent
                iconLeft
                background={'#694fad'}
                title={'Minha Conta'}
                backgroundContent={'#ececec'}
                children={
                    <View>
                        <UserDataComponent
                            oneText={this.state.usuario.nome}
                            sizeTextOne={18}
                            colorTextOne={'#585858'}
                            twoText={this.state.usuario.email}
                            sizeTextTwo={16}
                            colorTextTwo={'#585858'}
                            colorTextThree={'#585858'}
                            threeText={this.state.usuario.dataNascimento}
                            sizeTextThree={16}
                            textFour={this.state.usuario.telefone}
                            sizeTextFour={16}
                            colorTextFour={'#585858'}
                            buttonRight={
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
                            }
                        />
                        <UserDataComponent
                            oneText={'Endereço'}
                            sizeTextOne={18}
                            colorTextOne={'#585858'}
                            twoText={'Estado: '+this.state.usuario.estado}
                            sizeTextTwo={16}
                            colorTextTwo={'#585858'}
                            colorTextThree={'#585858'}
                            threeText={'Cidade: ' + this.state.usuario.municipio}
                            sizeTextThree={16}
                            fourText={'Bairro: '+this.state.usuario.bairro}
                            sizeTextFour={16}
                            colorTextFour={'#585858'}
                            fiveText={'Rua: '+this.state.usuario.rua}
                            sizeTextFive={16}
                            colorTextFive={'#585858'}
                        />
                        <UserDataComponent
                            oneText={'Compras Realizadas'}
                            sizeTextOne={18}
                            colorTextOne={'#585858'}
                        />
                    </View>
                }
            />
        )
    }
}
