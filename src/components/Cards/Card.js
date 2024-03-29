import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

export const Price = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: #000;
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Feature = styled.li`
  font-size: 1em;
  color: #000;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;