import React, { useState, useEffect } from 'react';
import {AgendaItem,AgendaList,DashboardContainer,UserHeading,UserInfo,UserAside, ContainerAgendas, ContainerTable} from "./style"
import { Header } from '../../components/Header';
import { CiMail,CiUser } from "react-icons/ci";
import { API } from '../../api/api';





export const Dashboard = () => {
  const [dados, setDados] = useState([
    {
      nome: "João Silva",
      telefone: "99999-9999",
      email: "joao@example.com",
      servicos: ["Corte", "Barba"],
      data: "2023-04-01",
      hora: "14:00",
      funcionario: "Carlos",
      endereco: "Rua Exemplo, 123"
    },
    // Adicionando mais 9 agendas
    {
      nome: "Maria Oliveira",
      telefone: "99999-8888",
      email: "maria@example.com",
      servicos: ["Coloração"],
      data: "2023-04-02",
      hora: "10:00",
      funcionario: "Ana",
      endereco: "Rua Exemplo, 456"
    },
    {
      nome: "Pedro Martins",
      telefone: "99999-7777",
      email: "pedro@example.com",
      servicos: ["Corte", "Pedicure"],
      data: "2023-04-02",
      hora: "11:30",
      funcionario: "Carlos",
      endereco: "Rua Exemplo, 789"
    },
    {
      nome: "Ana Beatriz",
      telefone: "99999-6666",
      email: "ana@example.com",
      servicos: ["Manicure"],
      data: "2023-04-03",
      hora: "09:00",
      funcionario: "Julia",
      endereco: "Rua Exemplo, 101"
    },
    {
      nome: "Lucas Souza",
      telefone: "99999-5555",
      email: "lucas@example.com",
      servicos: ["Barba"],
      data: "2023-04-03",
      hora: "14:00",
      funcionario: "Carlos",
      endereco: "Rua Exemplo, 202"
    },
    {
      nome: "Fernanda Lima",
      telefone: "99999-4444",
      email: "fernanda@example.com",
      servicos: ["Corte", "Hidratação"],
      data: "2023-04-04",
      hora: "16:00",
      funcionario: "Ana",
      endereco: "Rua Exemplo, 303"
    },
    {
      nome: "Roberto Carlos",
      telefone: "99999-3333",
      email: "roberto@example.com",
      servicos: ["Corte"],
      data: "2023-04-05",
      hora: "10:00",
      funcionario: "Carlos",
      endereco: "Rua Exemplo, 404"
    },
    {
      nome: "Camila Queiroz",
      telefone: "99999-2222",
      email: "camila@example.com",
      servicos: ["Manicure", "Pedicure"],
      data: "2023-04-06",
      hora: "13:00",
      funcionario: "Julia",
      endereco: "Rua Exemplo, 505"
    },
    {
      nome: "Tiago Iorc",
      telefone: "99999-1111",
      email: "tiago@example.com",
      servicos: ["Barba", "Corte"],
      data: "2023-04-07",
      hora: "15:00",
      funcionario: "Carlos",
      endereco: "Rua Exemplo, 606"
    },
    {
      nome: "Priscila Alcântara",
      telefone: "99999-0000",
      email: "priscila@example.com",
      servicos: ["Coloração", "Corte"],
      data: "2023-04-08",
      hora: "17:00",
      funcionario: "Ana",
      endereco: "Rua Exemplo, 707"
    }
  ]);
  const listAgendas=[]
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
            {"Francisco Pedro"}</p>
          <p>
            <CiMail size={30} style={{marginRight:10}} />
            {"francisco.pedro@petrohost.ao"}
          </p>
        </UserAside>
    
    <ContainerAgendas>

        <UserHeading>Agendas Marcadas </UserHeading>
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
                      <td>{agenda.servicos.join(', ')}</td>
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