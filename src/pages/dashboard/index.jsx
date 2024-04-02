import React, { useState, useEffect } from 'react';
import {AgendaItem,AgendaList,DashboardContainer,UserHeading,UserInfo,UserAside, ContainerAgendas, ContainerTable} from "./style"
import { Header } from '../../components/Header';
import { CiMail,CiUser } from "react-icons/ci";
import { API } from '../../api/api';





export const Dashboard = () => {
  const [dados, setDados] = useState();
  
    const fetchDashboardData = async() => {


      await API.get("/agenda/agendas")
      .then( async(response)=>{
        const agendas=await response.data
        setDados(agendas)
      })
    };
  
  useEffect(() => {
    fetchDashboardData()

  }, []);

  return (
    <>
    <Header/>
    <DashboardContainer>
        <UserAside>
          <h2>Informações do Usuário</h2>
          <p>
            <CiUser size={30} style={{marginRight:10}} />
            {dados.usuario.nome}</p>
          <p>
            <CiMail size={30} style={{marginRight:10}} />
            {dados.usuario.email}
          </p>
        </UserAside>
    
    <ContainerAgendas>

        <UserHeading>Agendas Marcadas </UserHeading>
        <p>Número de Agendas: {dados.agendas.length}</p>
        <AgendaList>
          <ContainerTable border={1}  >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Servicos</th>
                  <th>Funcionarios</th>
                  <th>Data</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                
                {}
                    <tr>
                      <td>Francisco</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                    </tr>
                    <tr>
                      <td>Joao</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                      <td>oi</td>
                    </tr>
                    
              </tbody>
          </ContainerTable>


    
        </AgendaList>
     
    </ContainerAgendas>
    </DashboardContainer>
  
    </>
  );
};