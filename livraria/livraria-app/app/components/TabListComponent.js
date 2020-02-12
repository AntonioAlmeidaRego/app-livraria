import React, {} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button, Spinner, List, ListItem, Container, Content, Card, CardItem, Item, Thumbnail, Left, Right, Body} from 'native-base';
import EmptyComponent from "./componentsEmpty/EmptyComponent";


export default class TabListComponent extends React.Component{

    state={
       viewSpinner: true,
    };

    componentDidMount(): void {
        setInterval(()=>{
            this.setState({
                viewSpinner: false,
            });
        }, 8000);
    }


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
                            [
                                <ListItem thumbnail>
                                    <Body>
                                        <Text>{item.nome}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={() => this.props.onDetalhe(item)} transparent>
                                            <Text>Detalhe</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            ]
                        }
                    />
                </Content>
            </Container>
        );
    }
}
