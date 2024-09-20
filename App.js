import React from 'react';
import { FoodValiditySection, RecipeSuggestions } from './components';
import { Container } from './styles/StyledComponents';

const App = () => (
  <Container>
    <FoodValiditySection />
    <RecipeSuggestions />
  </Container>
);

export default App;
