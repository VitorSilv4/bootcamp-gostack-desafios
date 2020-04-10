import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function New({ repositories, setRepositories }) {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [techs, setTechs] = useState('');

  async function handleAddRepository(e) {
    e.preventDefault();
   
      let techArray = techs.replace(/ /g, "").split(",")
      const repository = {
        title,
        url,
        techs: techArray,
      };
  
      const response = await api.post('repositories', repository);
      setRepositories([...repositories, response.data]);
      setTitle('');
      setTechs('');
      setUrl('');
  }

  return (
    <>
    
      <Container>
          <form onSubmit={(e) => handleAddRepository(e)}>
        <input
          id="title"
          placeholder="Digite o título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          id="url"
          placeholder="Digite a url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <input
          id="techs"
          placeholder="Digite as tecnologias, separadas por vírgula"
          onChange={(e) => setTechs(e.target.value)}
          value={techs}
        />
        <button type="submit">Adicionar</button>
      </form>
    
      </Container>
    
    </>
  );
}
