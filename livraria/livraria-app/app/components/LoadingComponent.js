import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'native-base';

export default class LoadingComponent extends React.Component{
    render() {
        return (
            <View>
                { this.props.isViewSpinner &&(
                    <Spinner color={'#694fad'}/>
                )}
                {!this.props.isViewSpinner&&(
                    this.props.children
                )}
            </View>
        );
    }
}
