
import React from 'react';
import {View, Text, Image} from 'react-native';
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
    ListItem, Right
} from 'native-base';
import StylesScreen from '../../styles/StylesScreen';

export default class CardSinopsieComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createBorder('#000', 1, 15), StylesScreen.createContainerText(),
                    StylesScreen.createBox(null, null, null, '100%', '100%', 10,
                        20)
                ]}>
                    <View>
                         <Text style={[StylesScreen.createToLocaleUppercase(),
                            StylesScreen.createText('#000', 18, 'bold', null,
                                'justify', 'center', 'center', 'center'),
                            StylesScreen.createLineHeight(25)
                         ]}>{this.props.sinopsie}</Text>
                    </View>

                </View>
            </View>
        );
    }
}