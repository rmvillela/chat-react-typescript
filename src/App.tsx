import React from 'react';

import EntradaTexto from './components/EntradaTexto';
import ListarMensagens from './components/ListarMensagens';

const App: React.FC = () => {
  return (
    <div className="App">
      <ListarMensagens />
      <EntradaTexto />
    </div>
  );
}

export default App;
