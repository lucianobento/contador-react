// src/Counter.js
import React, { useState } from "react"; // Importa o React e o hook useState

/**
 * Componente funcional Counter.
 * 
 * Este componente exibe um contador com dois botões: um para incrementar o valor 
 * do contador e outro para decrementá-lo. O estado do contador é gerenciado com 
 * o hook useState do React.
 */
const Counter = () => {
  // Hook useState para gerenciar o valor do contador
  // count: valor atual do contador
  // setCount: função para atualizar o valor do contador
  const [count, setCount] = useState(0); // Estado inicial do contador é 0

  /**
   * Função para incrementar o valor do contador.
   * 
   * Ao ser chamada, a função incrementa o valor atual do estado count em 1.
   */
  const incrementar = () => {
    setCount(count + 1); // Atualiza o estado adicionando 1 ao valor atual
  };

  /**
   * Função para decrementar o valor do contador.
   * 
   * Ao ser chamada, a função decrementa o valor atual do estado count em 1.
   */
  const decrementar = () => {
    setCount(count - 1); // Atualiza o estado subtraindo 1 do valor atual
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador</h1>
      {/* Exibe o valor atual do contador */}
      <h2>{count}</h2>
      
      {/* Botão para incrementar o valor do contador */}
      <button onClick={incrementar} style={{ margin: "10px", padding: "10px" }}>
        Incrementar
      </button>
      
      {/* Botão para decrementar o valor do contador */}
      <button onClick={decrementar} style={{ margin: "10px", padding: "10px" }}>
        Decrementar
      </button>
    </div>
  );
};

export default Counter; // Exporta o componente para ser utilizado em outros arquivos
