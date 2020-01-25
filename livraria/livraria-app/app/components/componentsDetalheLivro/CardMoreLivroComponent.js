import React from 'react';
import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import {
    Header,
    Body,
    Content,
    Container,
    Tabs,
    Tab,
    Title,
    Left,
    CardItem,
    Thumbnail,
    Card,
    Button,
    Icon, Right, Item, Input, ListItem
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardMoreLivroComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainerText(),
                    StylesScreen.createBox(null, null, null, '100%', '100%', 10,
                        20)
                ]}>
                    <View>
                        <ListItem itemDivider>
                            <Left>
                                <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createFontWeight('bold'),
                                    StylesScreen.createFontSize(16)]}>Ano</Text>
                            </Left>
                            <Right>
                                <Text style={[StylesScreen.createFontSize(16), StylesScreen.createPaddingRight(0)]}>{this.props.ano}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createFontWeight('bold'),
                                    StylesScreen.createFontSize(16)]}>peso</Text>
                            </Left>
                            <Right>
                                <Text style={[StylesScreen.createFontSize(16), StylesScreen.createPaddingRight(0)]}>{this.props.peso}</Text>
                            </Right>
                        </ListItem>
                        <ListItem itemDivider>
                            <Left>
                                <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createFontWeight('bold'),
                                    StylesScreen.createFontSize(16)]}>largura</Text>
                            </Left>
                            <Right>
                                <Text style={[StylesScreen.createFontSize(16), StylesScreen.createPaddingRight(0)]}>{this.props.largura}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={[StylesScreen.createToLocaleUppercase(), StylesScreen.createFontWeight('bold'),
                                    StylesScreen.createFontSize(16)]}>altura</Text>
                            </Left>
                            <Right>
                                <Text style={[StylesScreen.createFontSize(16), StylesScreen.createPaddingRight(0)]}>{this.props.altura}</Text>
                            </Right>
                        </ListItem>
                    </View>

                </View>
            </View>
        );
    }
}