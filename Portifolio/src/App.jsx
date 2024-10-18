import React from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Developments from './components/Developments.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      <main>
        {/* Seção de introdução */}
        <Introduction />

        {/* Seção de projetos */}
        <Developments />

        {/* Seção de certificados */}
        <Certificates />

        {/* Seção de contato */}
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
