import React from 'react';
import {Dimensions} from 'react-native';
import {Button} from 'native-base';
import BoxContainerComponent from "../BoxContainerComponent";
import BorderComponent from "../BorderComponent";

export default class CardButtomComponent extends React.Component{
    render() {
        return (
            <BoxContainerComponent
                width={'100%'} height={'100%'} radius={15} padding={15}>
                <BorderComponent color={"#c2c0c7"} borderTop={true} borderBottom={true} borderWidth={0.9} width={Dimensions.get('window').width} height={'100%'} padding={2}>
                    <Button transparent>
                        {this.props.renderIconLeft}
                        {this.props.textComponent}
                        {this.props.renderIconRight}
                    </Button>
                </BorderComponent>
            </BoxContainerComponent>
        );
    }
}
