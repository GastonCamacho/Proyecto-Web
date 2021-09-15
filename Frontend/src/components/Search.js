import React, { Component } from 'react';



import Sidebar from './Sidebar';
import Slider from './Slider';
import Articles from './Articles';

export default class Search extends Component {




    render() {

        const searched = this.props.match.params.search;
        const buttonString = "Ir al Blog";

        return (

            <div id="blog">
                <Slider
                    title={'Busqueda: ' + searched}
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">

                        <Articles search={searched} />



                    </div>
                    <Sidebar blog="true" />
                </div>
            </div>
        )
    }
}