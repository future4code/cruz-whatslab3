import React from "react";

export class App extends React.Component {
  state = {
    mensagens: [],
    entradaUsuario: "",
    entradaMensagem: "",
  };

  novoUsuario = (event) => {
    this.setState({ entradaUsuario: event.target.value });
  };

  novaMensagem = (event) => {
    this.setState({ entradaMensagem: event.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.entradaUsuario,
      mensagem: this.state.entradaMensagem,
    };

    this.setState({
      mensagens: [novaMensagem, ...this.state.mensagens],
      // entradaUsuario: "",
      // entradaMensagem: "",
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.mensagens.map((texto, index) => {
            return (
              <p key={index}>
                <strong>{texto.usuario}</strong> {texto.mensagem}
              </p>
            );
          })}
        </div>
        <div>
          <input
            onChange={this.novoUsuario}
            value={this.state.entradaUsuario}
            placeholder={"Usuário"}
          />
          <input
            onChange={this.novaMensagem}
            value={this.state.entradaMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default App;
