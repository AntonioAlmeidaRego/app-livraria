import React from 'react';
import {Icon} from 'native-base';
import IconInfo from "react-native-vector-icons/Octicons";

export default class IconHomeComponent extends React.Component{
    render(){
        return (
            <Icon>
                <IconInfo name={'info'} color={'#000'} size={30} />
            </Icon>
        );
    }
}
