import React, { Component } from "react";
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {
  contador = 0;
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  HolaMundo(nombre, edad) {
    var presentacion = (
      <div>
        <h2>Hola soy {nombre}</h2>
        <h3>Tengo {edad} </h3>
      </div>
    );
    return presentacion;
  }

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    var nombre = "El alumno, Joel Yantorno";
    return (
      <section id="content">
        <h2 class="subheader">Últimos articulos</h2>
        <p>Hola Bienvenidos a REACT de Programación 4</p>
        <h2 class="subheader">Funciones</h2>
        {this.HolaMundo(nombre, 48)}
        <h2 class="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
          <MiComponente />
        </section>
        <h2 class="subheader">Estado</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input type="button" value="sumar" onClick={this.sumar}></input>
          <input type="button" value="restar" onClick={this.restar}></input>
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
