import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Moment from 'react-moment';
import 'moment/locale/es';

import { Url } from './Url';
import ImgDefault from '../assets/images/images.png'

export default class Articles extends Component {


    state = {
        articles: {},
        status: null
    }

    componentWillMount() {
        const home = this.props.home;
        const search = this.props.search;

        if (home === 'true') {
            this.getLastArticles();
        } else if (search && search != null && search != undefined) {
            this.getArticlesBySearch(search)
        } else {
            this.getArticles();
        }
    }

    getLastArticles = async () => {
        const { data: { articles } } = await axios.get(Url + 'articles/last');
        this.setState({ articles: articles, status: "success" });
    }



    getArticles = async () => {
        const { data: { articles } } = await axios.get(Url + 'articles/');
        this.setState({ articles: articles, status: "success" });
    }


    getArticlesBySearch = (searched) => {
        axios.get(Url + 'search/' + searched)
            .then(res => {

                this.setState({ articles: res.data.articles, status: "success" });
            })
            .catch(err => {
                this.setState({ articles: [], status: "success" });
            })
        
        }


    render() {
        if (this.state.articles.length >= 1) {
            return (

                <div >
                    {/* <h1>Artículos</h1> */}
                    {
                        this.state.status === "success" &&
                        <div  className="articles-margin-top">
                            {
                                this.state.articles.map((article) => (


                                    <article className="article-item" id="article-template" key={article._id}>
                                        <div className="image-wrap" >

                                            {
                                                article.image !== null
                                                    ? <img
                                                        src={Url + 'get-image/' + article.image}
                                                        alt={article.title}
                                                    />
                                                    : <img
                                                        src={ImgDefault}
                                                        alt={article.title}
                                                    />
                                            }

                                        </div>
                                        <h2> {article.title}  </h2>
                                        <span className="date">
                                            <Moment fromNow>
                                                {article.date}
                                            </Moment>

                                        </span>
                                        <Link to={`/blog/articulo/${article._id}`}>Leer mas</Link>
                                        <div className="clearfix"></div>



                                    </article>



                                ))
                            }

                        </div>


                    }
                </div>
            )
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles" >
                    <h2 className="subheader">No hay artículos para mostrar</h2>
                    <p>Todavia no hay contenido en esta seccion</p>
                </div>
            )
        } else {
            return (
                <div id="articles" >
                    <h2 className="subheader">Cargando....</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            )
        }


    }

}



