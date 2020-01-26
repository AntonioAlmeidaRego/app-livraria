import React from 'react';
import {View, Text, Image, Modal, ActivityIndicator} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, ListItem, Form} from 'native-base';
import StylesScreen from "../styles/StylesScreen";

export default class LoadingCepModal extends React.Component{
    render() {
        return (
            <Modal visible={this.props.visible} onRequestClose={() => {}} transparent>
                <View style={StylesScreen.createContainer()}>
                    <View style={[StylesScreen.createBox('center',
                        'center', 'center', '78%', '30%', 10), StylesScreen.createColorBackground('#694fad')]}>
                        <View style={[StylesScreen.createWidth('90%'), StylesScreen.createMargin(15), StylesScreen.createAlignSelf('center')]}>
                            <Text style={[StylesScreen.createText(
                                '#fff', 30, 'bold',
                                null, 'center', 'center',
                                null, 'center', 20
                            ), StylesScreen.createToLocaleUppercase()]}>
                                Aguarde...
                            </Text>
                        </View>
                        <View style={StylesScreen.createContainer()}>
                            <ActivityIndicator color={"#fff"} size={30} />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}