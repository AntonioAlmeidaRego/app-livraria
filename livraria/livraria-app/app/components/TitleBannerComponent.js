import React from 'react';
import RowComponent from "./RowComponent";
import BoxContainerComponent from "./BoxContainerComponent";
import TextComponent from "./TextComponent";
import LeftComponent from "./LeftComponent";

export default class TitleBannerComponent extends React.Component{
    render(){
        return (
                <BoxContainerComponent

                    width={85} height={85} radius={20}
                >
                    <RowComponent>
                        <LeftComponent>
                            <TextComponent
                                size={20}
                                upper
                                color={'#694fad'}
                                text={this.props.title}
                            />
                        </LeftComponent>
                    </RowComponent>
                </BoxContainerComponent>
        );
    }
}
