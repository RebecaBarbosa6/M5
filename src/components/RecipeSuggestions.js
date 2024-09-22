import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { Section, Card } from '../styles/StyledComponents';

const RecipeSuggestions = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    axios.get('/receitas/sugestoes')
      .then(response => setReceitas(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Section>
      <h1>Sugestões de Receitas</h1>
      {receitas.map(receita => (
        <Card key={receita.nome}>
          <h2>{receita.nome}</h2>
          <p>Ingredientes: {receita.ingredientes.join(', ')}</p>
        </Card>
      ))}
    </Section>
  );
};

export default RecipeSuggestions;
