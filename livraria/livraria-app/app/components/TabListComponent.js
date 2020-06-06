import React from 'react';
import {FlatList, Text} from 'react-native';
import {Body, Button, Container, Content, ListItem, Right, Spinner, Icon, Item, Left, List, Row} from 'native-base';
import EmptyComponent from "./componentsEmpty/EmptyComponent";
import StylesScreen from '../styles/StylesScreen';
import RowComponent from './RowComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import TextComponent from './TextComponent';
import SpaceTopComponent from './componentsSpace/SpaceTopComponent';


export default class TabListComponent extends React.Component{

    state={
       viewSpinner: this.props.isViewSpinner,
    };

    showViewSpinner(){
        if(this.state.viewSpinner){
            return (
                <Spinner color={'#694fad'}/>
            )
        }
        else if(this.props.isEmpty){
            return(
                <EmptyComponent
                    uri={'https://png.pngtree.com/svg/20160616/category_59688.png'}
                    title={'Sem Categorias'}
                />
            );
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        ListEmptyComponent={
                            this.showViewSpinner()
                        }
                        data={this.props.array}
                        renderItem={({ item }) =>
                            <List> 
                                <ListItem>
                                    <Left>
                                        <TextComponent color={"#000"} upper alignText={"center"} text={item.nome}></TextComponent>
                                    </Left>
                                    <Right>
                                        <Button danger rounded onPress={() => this.props.onDetalhe(item)}>
                                            <Icon name={"ios-information-circle"} size={30} color={"#000"}/>
                                        </Button>
                                    </Right>
                                </ListItem>                       
                            </List>
                        }
                    />
                </Content>
            </Container>
        );
    }
}
