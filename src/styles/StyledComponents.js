import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
`;

export const Section = styled.section`
  width: 80%;
  margin: 20px 0;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  animation: fadeIn 0.5s ease-in;

  h1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const Card = styled.div`
  background: #fafafa;
  border-radius: 8px;
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 1.2rem;
    color: #007acc;
  }

  p {
    color: #555;
  }
`;
