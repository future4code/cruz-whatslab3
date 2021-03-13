import React from "react";
import styled from "styled-components";

const AppSection = styled.section`
  max-width: 600px;
  min-height: 100vh;
  border: 1px solid black;
  display: flex;
  flex: 1 1 0%;
  background-image: linear-gradient(
      rgba(229, 221, 213, 0.92),
      rgba(229, 221, 213, 0.92)
    ),
    url("https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png");

  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
`;

const MessagensSection = styled.section`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const MensagemUsuario = styled.div`
  max-width: 60%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: left;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
  overflow-wrap: break-word;
`;

const MensagemEu = styled.div`
  max-width: 60%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: right;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  background-color: rgb(220, 248, 198);
  box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
  overflow-wrap: break-word;
`;

const Formulario = styled.section`
  display: grid;
  grid-template-columns: 100px 1fr 75px;
  gap: 10px;
  height: 40px;
  padding: 10px;
`;

const InputUsuario = styled.input`
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

const InputMensagem = styled.input`
  flex: 1 1 0%;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

const ButtonEnviar = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

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
      mensagens: [...this.state.mensagens, novaMensagem],
      entradaUsuario: "",
      entradaMensagem: "",
    });
  };

  render() {
    let mensagensEnviadas = this.state.mensagens.map((texto) => {
      if (texto.usuario !== "" || texto.mensagem !== "")
        return (
          <Mensagem>
            <MensagemUsuario>
              <div>
                <strong>{texto.usuario}</strong>
              </div>
              <div>{texto.mensagem}</div>
            </MensagemUsuario>
          </Mensagem>
        );
    });
    return (
      <AppSection>
        <MessagensSection>{mensagensEnviadas}</MessagensSection>
        <Formulario>
          <InputUsuario
            onChange={this.novoUsuario}
            value={this.state.entradaUsuario}
            placeholder={"Usuário"}
          />
          <InputMensagem
            onChange={this.novaMensagem}
            value={this.state.entradaMensagem}
            placeholder={"Mensagem"}
          />
          <ButtonEnviar onClick={this.enviarMensagem}>Enviar</ButtonEnviar>
        </Formulario>
      </AppSection>
    );
  }
}

export default App;
