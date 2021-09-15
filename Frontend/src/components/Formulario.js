import React, { Component } from 'react';
import Sidebar from './Sidebar';



import Slider from './Slider';

export default class Formulario extends Component {


    render() {
        var buttonString = "Ir al Blog";
        return (
            <div id="formulario">

                

                <div className="center">

                    <div id="content">
                        

                    </div>
                    <Sidebar blog= "false" />
                </div>
            </div>
        )
    }
}