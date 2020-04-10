import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Container } from './styles';
import api from '../../services/api';

export default function List({list, setList}) {

  useEffect(() => {
    api.get('repositories').then(response => {
      setList(response.data);
    })
  }, []);

  async function handleRemoveRepository(id) {
    try {
      await api.delete(`repositories/${id}`);

      setList(list.filter(repository => repository.id !== id));
    } catch (err) {
      alert('Erro ao deletar repositório, tente novamente.')
    }
  };

  return (
    <Container>
      
        <ul data-testid="repository-list">
        { list.map(repository => (
        <li key={repository.id}>
          <strong>Nome:</strong>
          <p style={{ fontSize: 15, fontWeight: 500 }}>{repository.title}</p>

          <strong>URL:</strong>
          <p>{repository.url}</p>

          <strong>Tecnologias:</strong>
          <ul>
            {repository.techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <button type="button" onClick={() => handleRemoveRepository(repository.id)}>
              <FiTrash2 size={20} color='#ca4949' />
              <p>Remover</p>
          </button>
        </li>
        )) }
      </ul>
      

    </Container>
  );
}
