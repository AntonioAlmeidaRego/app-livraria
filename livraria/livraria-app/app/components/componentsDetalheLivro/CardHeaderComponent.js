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
    Right,
    Button, Icon
} from 'native-base';
import StylesScreen from "../../styles/StylesScreen";
import IconInfo from "react-native-vector-icons/Octicons";

export default class CardHeaderComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createSpaceTop(), StylesScreen.createSpaceRight(), StylesScreen.createSpaceLeft(), StylesScreen.createContainer()]}>
                <View style={[StylesScreen.createContainer()]}>
                    <Body>
                        <Thumbnail square style={[StylesScreen.createWidth(300), StylesScreen.createHeight(350)]}
                                   source={{uri: this.props.uri}} />
                        <View style={StylesScreen.createSpaceTop()}>
                            <Text style={[StylesScreen.createText('#000', 24, 'bold',
                                null, 'center', 'center', 'center', 'center')
                            ,
                                StylesScreen.createToLocaleUppercase()
                            ]}>{this.props.title}</Text>
                        </View>
                    </Body>
                </View>
            </View>
        );
    }
}
