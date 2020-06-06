import React from 'react';
import TabComponent from '../components/TabComponent';
import ApiController from "../controllers/ApiController";

const url = "https://livraria-pdf.herokuapp.com/api/livro/findAll";
const urlLocal = "http://192.168.1.7:8080";

export default class TabListagemLivros extends React.Component{

    state = {
        livros: [],
        isEmpty: false,
        viewSpinner: false,
    };

    async componentDidMount(): void {
        this.setState({
            viewSpinner: true,
        })
        const livroController = new ApiController();
        const livros = await livroController.get(url);
        this.setState({
            viewSpinner: false,
            livros: livros,
            isEmpty: livroController.isEmpty(),
        });
    }

    onParcelamento = async (item)=>{
        console.log(item.id);
        const apiController = new ApiController;
        return await apiController.get("https://livraria-pdf.herokuapp.com/api/parcelamento/findOneLinkedLivro/"+item.id);
    };

    render() {
        return (
            <TabComponent
                isViewSpinner={this.state.viewSpinner}
                isEmpty={this.state.isEmpty}
                onParcelamento={this.onParcelamento}
                onDetalheLivro={this.props.onDetalheLivro}
                array={this.state.livros} />
        );
    }
}
