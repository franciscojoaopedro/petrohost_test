import styled from 'styled-components';
export const DashboardContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;

gap: 10px;
margin-top: 5px;
position: relative;
`;

export const UserInfo = styled.div`
  margin-bottom: 20px;
`;

export const UserHeading = styled.div`

  width: 100%;
  background: #1e569d ;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 8px;





    font-size: 18px;
    font-weight: 400;
    color: #fff;
    font-weight: 350;

`;

export const AgendaList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AgendaItem = styled.li`
  margin-bottom: 5px;
`;

export const UserAside = styled.aside`
  width: 300px;  
  background: #1e569d;
  height: 600px;
  border-radius: 8px;
  padding: 10px;

  h2{
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    font-weight: 350;
  };
  p{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
    color: #fff;
    margin-top: 14px;
    font-size: 16px;
    font-weight: 400;
  }

`;


export const ContainerAgendas=styled.div`
width: 95%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;

height: 700px;
border-radius: 8px;

`

export const ContainerTable=styled.table`
width: 100%;
border-collapse: collapse;
thead{
  width: 100%;
}

`