import React, { Component } from 'react';



import Sidebar from './Sidebar';
import Slider from './Slider';
import Articles from './Articles';

export default class Blog extends Component {

   
    

    render() {
        
        var buttonString = "Ir al Blog";
        return (

            <div id="blog">
                <Slider
                    title="BLOG"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">

                      <Articles />



                    </div>
                    <Sidebar blog="true" />
                </div>
            </div>
        )
    }
}