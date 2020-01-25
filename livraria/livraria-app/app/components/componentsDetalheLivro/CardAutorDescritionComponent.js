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

export default class CardAutorDescritionComponent extends React.Component{
    render() {
        console.log(this.props.autors);
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainerText(),
                    StylesScreen.createBox('center', 'center', 'center', '100%', '100%', 10,
                        20)
                ]}>
                    <FlatList
                        data={this.props.autors}
                        renderItem={({ item })=>
                            [<View style={StylesScreen.createFlexDirection('row')}>
                                <Thumbnail large source={{uri: 'https://livraria-pdf.herokuapp.com/autor/imagem/'+item.id}} />
                                <Text style={StylesScreen.createText('#000',
                                    22, 'bold', null, 'center',
                                    'center', 'center', 'center', 15)}> {item.nome}</Text>
                            </View>,
                            <View>
                                <Text style={StylesScreen.createText('#000',
                                    18, 'bold', null, null,
                                    null, null, null, 15)}>
                                    Descrição....
                                </Text>
                            </View>,
                            <View>
                                <ListItem itemDivider>
                                    <Text style={StylesScreen.createFontSize(16)}>
                                        {item.email}
                                    </Text>
                                </ListItem>
                            </View>
                            ]
                        }
                    />
                </View>
            </View>
        );
    }
}