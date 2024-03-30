import React from 'react';
import styled from 'styled-components';
import { FaUser, FaHome, FaRegistered, FaCheck } from 'react-icons/fa';

const StatsCard = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  gap: 20px;
`;

const Stat = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 16px;
  color: #666;
`;



function Stats() {
  const stats = [
    { value: '1220', label: 'Hospedagem', icon: FaHome },
    { value: '2490', label: 'Domínio registrado', icon: FaRegistered },
    { value: '5984', label: 'Suporte Resolvido', icon: FaCheck },
    { value: '8254', label: 'Cliente feliz', icon: FaUser },
  ];
  return (
    <StatsCard>
      {stats.map((stat, index) => (
        <div key={index}>
          <div>
            <stat.icon  color='#1e569d' size={30} />
          </div>
          <Stat>{stat.value}</Stat>
          <Label>{stat.label}</Label>
        </div>
      ))}
    </StatsCard>
  );
}

export default Stats;