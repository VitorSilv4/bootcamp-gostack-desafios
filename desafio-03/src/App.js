import React, { useState } from "react";

import Header from './components/Header';
import List from './components/List';
import New from './components/New';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  return (
    <div>
      <Header />
      <div style={{ padding: 20 }}>
      <New repositories={repositories} setRepositories={setRepositories}/>
      
      <List list={repositories} setList={setRepositories}/> 
      </div>
    </div>
  );
}

export default App;
