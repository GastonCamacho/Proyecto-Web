import React, { Component } from 'react';
import Sidebar from './Sidebar';



import Slider from './Slider';
import Articles from './Articles';

export default class Home extends Component {


    render() {
        var buttonString = "Ir al Blog";
        return (

            <div id="home">
                <Slider title="Bienvenido al BLOG de NSLP" btn={buttonString} />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader"> Últimos Artículos </h1>
                        <Articles home="true" />
                    </div>
                    <Sidebar blog= "false" />
                </div>
            </div>
        )
    }
}