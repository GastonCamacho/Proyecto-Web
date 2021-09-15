import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    var random = Math.floor(Math.random() * 3);
    alert(random);
    peliculas[random].titulo = "Joker Parte 2";
    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("Favorita Marcada");
    console.log(pelicula, indice);

    this.setState({ favorita: pelicula });
  };

  componentWillMount() {
    // alert("Se va a mostrar el componente");
    this.setState({
      peliculas: [
        {
          titulo: "Joker",
          image: "https://pmcvariety.files.wordpress.com/2019/04/joker-trailer.jpg?w=1000",
        },
        {
          titulo: "Batman vs Superman",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic2.businessinsider.com%2Fimage%2F51b238e6eab8ea774a000007%2Fthe-two-potential-titles-for-the-batmansuperman-movie-are-lame.jpg&f=1&nofb=1",
        },
        {
          titulo: "Terminator",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMapi8zeNgfI%2Fmaxresdefault.jpg&f=1&nofb=1",
        },
        {
          titulo: "Top Gun",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FW-s_oZ7zF2M%2Fmaxresdefault.jpg&f=1&nofb=1",
        },
        {
          titulo: "Looper",
          image: "https://sleeplessthought.files.wordpress.com/2014/09/looper01.jpg",
        },
      ],
      nombre: "Joel Yantorno",
      favorita: {},
    });
  }
  componentDidMount() {
    // alert("Ya se mostro el componente");
  }
  componentWillUnmount() {
    // alert("");
  }

  render() {
    var pStyle = {};
    var favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={{ background: "green", color: "white", padding: "10px" }}>
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = <p>No hay pelicula favorita</p>;
    }

    return (
      <div id="content" className="Peliculas">
        <h2 className="subheader">Peliculas</h2>
        <p>Peliculas favoritas de {this.state.nombre}</p>
        <p>
          <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
        </p>

        {favorita}

        {/*    {this.state.favorita.titulo ? (
          <p className="favorita" style={{ background: "green", color: "white", padding: "10px" }}>
            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>No hay pelicula favorita</p>
        )}
        */}
        {/** Crear el componente de pelicula **/}
        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula key={i} pelicula={pelicula} indice={i} marcarFavortia={this.favorita} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Peliculas;
