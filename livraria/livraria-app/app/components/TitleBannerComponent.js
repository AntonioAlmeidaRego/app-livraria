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
import StylesScreen from "../styles/StylesScreen";

export default class TitleBannerComponent extends React.Component{
    render(){
        return (
            <View style={StylesScreen.createContainer()}>
                <View style={[StylesScreen.createFlexDirection('row')]}>
                    <View style={[StylesScreen.createContainer(), StylesScreen.createBox(null, null, null,
                        '80%', '30%', 0)]}>
                        <View style={[StylesScreen.createBackground('#ffd410'), StylesScreen.createBorder('#000', 1, 0),
                            StylesScreen.createBox(
                                'center','center', 'center','150%', 85, 0),
                            StylesScreen.createSpaceLeft(270),
                            StylesScreen.createSpaceTop(5),
                            StylesScreen.createSpaceBottom(10)
                            ]}>
                            <Text style={[StylesScreen.createText('#000',
                                20, null, null, 'center',
                                'center', 'center', 'center'),
                                StylesScreen.createToLocaleUppercase()]}>
                                {this.props.title}
                            </Text>
                        </View>
                    </View>
                    <View style={[StylesScreen.createContainer(), StylesScreen.createBox(null, null, null,
                        '40%', '30%', 75)]}>
                        <View style={[StylesScreen.createBackground('#ffd410'), StylesScreen.createBox(
                            'center','center', 'center',100, 100, 50),
                            StylesScreen.createBorder('#000', 1, 75),
                            StylesScreen.createSpaceRight(500)]}>
                            <Thumbnail large style={[StylesScreen.createWidth(60), StylesScreen.createHeight(60)]}
                                       source={{uri: this.props.uri}} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}