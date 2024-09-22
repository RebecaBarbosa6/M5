import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { Section, Card } from '../styles/StyledComponents';

const FoodValiditySection = () => {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    axios.get('/alimentos/validade-proxima')
      .then(response => setAlimentos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Section>
      <h1>Alimentos Próximos da Validade</h1>
      {alimentos.map(alimento => (
        <Card key={alimento.id}>
          <h2>{alimento.nome}</h2>
          <p>Validade: {new Date(alimento.validade).toLocaleDateString()}</p>
        </Card>
      ))}
    </Section>
  );
};

export default FoodValiditySection;
