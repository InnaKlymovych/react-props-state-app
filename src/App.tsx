import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './Componente/TudoApp';

function App() {
  return (
    <>
      <header>
        <h1>Tudo</h1>
      </header>
    <TodoApp/>
      <section>
        <div className="tudoList">
          <div className="tudoCard">
            <p>Labore sed alias, eos nisi sit deserunt natus quae magni rem reprehenderit minima, voluptates consectetur impedit odit ullam numquam dicta? Rem, neque.</p>
            <button>👎</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
