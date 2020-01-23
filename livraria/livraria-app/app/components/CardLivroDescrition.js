import React from 'react';
import {View, Text, Image} from 'react-native';
import {Header, Body, Content, Container, Tabs, Tab, Title, Left, Item, CardItem, Thumbnail, Card, Button, Right, Icon, ListItem} from 'native-base';
import StylesScreen from "../styles/StylesScreen";
import IconInfo from 'react-native-vector-icons/Octicons';
export default class CardLivroDescrition  extends React.Component{
    render() {
        return(
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainer()]}>
                    <View style={StylesScreen.createFlexDirection('row')}>
                        <Left>
                            <Thumbnail square style={[StylesScreen.createWidth(150), StylesScreen.createHeight(200)]}
                                       source={{uri: 'https://livraria-pdf.herokuapp.com/livro/imagem/'+this.props.id}} />
                        </Left>
                        <Right>
                            <Text style={[
                                StylesScreen.createToLocaleUppercase(),
                                StylesScreen.createText('#000', 18, 'bold', null, null, null, null, null)]}>
                                {this.props.title}
                            </Text>
                            <Text style={[
                                StylesScreen.createToLocaleUppercase(),
                                StylesScreen.createText('#000', 15, null, null, null, null, null, null)
                            ]}>
                                {this.props.subtitle}
                            </Text>
                            <View style={[StylesScreen.createSpaceTop()]}>

                            </View>
                            <View style={[StylesScreen.createFlexDirection('row'), StylesScreen.createMarginRight(50)]}>
                                <Image
                                    style={[StylesScreen.createWidth(40), StylesScreen.createHeight(40)]}
                                    source={require('../../images/price.png')}
                                />
                                <Text style={StylesScreen.createText('#000', 20, null, null, null, null, null, null)
                                }>
                                    R$ {this.props.price}
                                </Text>
                            </View>
                            <View style={[StylesScreen.createSpaceBottom()]}>

                            </View>
                            <Button onPress={() => this.props.onDetalheLivro(this.props.livro)} rounded style={[StylesScreen.createButtonColor('#D8D636'), StylesScreen.createSpaceRight()]}>
                                <Icon>
                                    <IconInfo name={"info"} size={30}/>
                                </Icon>
                                <Body>
                                    <Text style={[
                                        StylesScreen.createText('#fff', 15, null, null,
                                            null, null, null, null),
                                        StylesScreen.createToLocaleUppercase()]}>Detalhe</Text>
                                </Body>
                            </Button>
                            <View style={StylesScreen.createSpaceBottom()}>

                            </View>
                        </Right>
                    </View>
                </View>
            </View>
        );
    }
}