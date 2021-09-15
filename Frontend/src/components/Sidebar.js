import React, { Component } from "react";
import { Redirect } from "react-router-dom";



class Sidebar extends Component {

  searchRef = React.createRef();

  state = {
    search: "",
    redirect: false
  }


  redirectToSearch = (e) => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true,
    }); 

  }



  render() {

    if(this.state.redirect){
      return(
        <Redirect to={'/redirect/'+this.state.search} />
      );
    }


    return (
      <aside id="sidebar">
        {
          this.props.blog === "true" &&

          <div id="nav-blog" className="sidebar-item">
            <h3>Podes hacer esto</h3>
            <a href="#" className="btn btn-success">
              Crear artículo
          </a>
          </div>
        }
        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encontra el articulo</p>
          <form onSubmit={this.redirectToSearch}>
            <input type="text" name="search" placeholder="Articulo a buscar" ref={this.searchRef}/>
            <input type="submit" name="submit" value="buscar" className="" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
