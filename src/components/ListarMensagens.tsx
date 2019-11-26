import React, { Component } from 'react';
import { appSocket } from './appSocket';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface State {
  mensagens: MensagemPayload[];
}

export default class ListarMensagens extends Component<{}, State> {
  state: State = {
    mensagens: [{ nome: "Roosevelt", mensagem: "Teste Aleatório" }]
  };

  componentDidMount() {
    appSocket.on("mensagens", (mensagens: MensagemPayload[]) => {
      this.setState({
        mensagens
      });
    });
  }

  renderMensagens = () => {
    return this.state.mensagens.map(mensagem => <Mensagem {...mensagem} key={Math.random()}/>)
  }

  render() {
    return <ul>{this.renderMensagens()}</ul>;
  }
}

const Mensagem = ({ mensagem, nome }: MensagemPayload) => {
  return (
    <li>
      <p>
        {mensagem} -
        <small>
          <i>{nome}</i>
        </small>
      </p>
    </li>
  );
}