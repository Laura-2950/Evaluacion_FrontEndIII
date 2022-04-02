import { Component } from "react";
import Layout from "./components/Layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }
  }

  onChangePantalla() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div className="App">
        {this.state.contador < 6 && <Layout onChange={() => this.onChangePantalla} />}
      </div>
    );
  }
}

export default App;
