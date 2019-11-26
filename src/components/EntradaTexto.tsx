import React, { ChangeEvent, Component } from 'react';
import { appSocket } from './appSocket';

interface State {
  mensagem: string;
}

class EntradaTexto extends Component<{}, State> {
  state: State = {
    mensagem: ""
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      mensagem: e.currentTarget.value
    });
  }

  handleClick = () => {
    appSocket.emit("nova-mensagem", {
      nome: "Roosevelt",
      mensagem: this.state.mensagem
    });

    this.setState({
      mensagem: ""
    });
  }
  
  render() {
    return(
      <div>
        <textarea onChange={this.handleChange} value={this.state.mensagem}/>
  
        <div>
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default EntradaTexto;