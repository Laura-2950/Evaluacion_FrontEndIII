import { Component } from "react";
import Option from "./Option";
import Recordatorio from "./Recordatorio";
import data from "./data"
import Swal from 'sweetalert2'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      arrayRespuestas: [],
      respuestaAnterior: "",
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.counter !== this.state.counter) {
      this.state.arrayRespuestas.push(this.state.respuestaAnterior);
    }
  }

  componentWillUnmount() {
    Swal.fire({
      html: `<h1 style="background:White">The End...</h1>`,
      timer: 3000,
      showConfirmButton: false,
      showCancelButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
    })
  }
  handleClick = (e) => {
    const id = e.target.id;
    if (id === 'A' && this.state.respuestaAnterior !== 'A') {
      this.setState({
        counter: this.state.counter + 1,
        respuestaAnterior: 'A',
      });
    } else if (id === 'A' && this.state.respuestaAnterior === 'A') {
      this.setState({
        counter: this.state.counter + 2,
      });
    } else if (id === 'B' && this.state.respuestaAnterior === 'A') {
      this.setState({
        counter: this.state.counter + 3,
        respuestaAnterior: 'B',
      });
    } else if (id === 'B') {
      this.setState({
        counter: this.state.counter + 2,
        respuestaAnterior: 'B',
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.counter].historia}</h1>
        <div className="opciones">
          <Option key="boton1" id="A" textOption={data[this.state.counter].opciones.a} handleClick={this.handleClick} />
          <Option key="boton2" id="B" textOption={data[this.state.counter].opciones.b} handleClick={this.handleClick} />
        </div>
        <Recordatorio
          seleccionAnterior={this.state.respuestaAnterior}
          historial={this.state.arrayRespuestas.map((item, i) => <li key={i}>{item}</li>, data[this.state.counter].id)} />
      </div>
    );
  }
}

export default Layout;
