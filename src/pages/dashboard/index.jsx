import React, { useState, useEffect } from 'react';
import {AgendaItem,AgendaList,DashboardContainer,UserHeading,UserInfo,UserAside, ContainerAgendas, ContainerTable} from "./style"
import { Header } from '../../components/Header';
import { CiMail,CiUser } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";

import { API } from '../../api/api';





export const Dashboard = () => {
  const [dados, setDados] = useState([]);
  const[servicos,setServicos]=useState([])


    const fetchDashboardData = async() => {
      await API.get("/agenda/agendas")
      .then( async(response)=>{

        const data=await response.data
        const servicos =await data.agendas.map((agenda,index)=>agenda);
        const listServicos=await servicos.map((agenda)=>agenda.servicos);
        console.log(servicos)
        setServicos(listServicos)
        setDados(servicos)
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
            {"Francisco Pedro"}</p>
          <p>
            <CiMail size={30} style={{marginRight:10}} />
            {"francisco.pedro@petrohost.ao"}
          </p>
        </UserAside>
    
    <ContainerAgendas>

        <UserHeading>Agendas Marcadas
        <IoMdNotifications  color='#ef4444' size={24} />
       <span style={{fontWeight:500}}>{dados.length}</span>
        </UserHeading>
        <AgendaList>
          <ContainerTable border={1}  >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Serviços</th>
                  <th>Funcionários</th>
                  <th>Data</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                
              {dados.map((agenda, index) => (
                    <tr key={index}>
                      <td>{agenda.nome}</td>
                      <td>{agenda.email}</td>
                      <td>{agenda.telefone}</td>
                      <td style={{wordWrap:"break-word"}}   >{
                          (() => {try {return JSON.parse(agenda.servicos).join(', ');} 
                          catch (e) {console.error('Erro ao analisar servicos:', e);
                          return 'Erro ao carregar serviços';}})()}
                      </td>
                      <td>{agenda.funcionario}</td>
                      <td>{agenda.data}</td>
                      <td>{agenda.hora}</td>
                    </tr>
              ))}
              </tbody>
          </ContainerTable>


    
        </AgendaList>
     
    </ContainerAgendas>
    </DashboardContainer>
  
    </>
  );
};