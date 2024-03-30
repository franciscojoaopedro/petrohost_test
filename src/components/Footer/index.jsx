import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  border-radius: 16px 0px 16px 0px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

const Section = styled.div`
display: flex;
flex-direction: column;

`;




const Container=styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`
const CopyrightText = styled.p`
    font-size: 14px;
    color: #666;
`;

const Title=styled.h3`
text-align: start;
`
const ContainerTitle=styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
export const Footer=()=> {
    return (
        <FooterContainer>

<Container>
            <Section>
                <ContainerTitle>
                <Title>Contato</Title>
                </ContainerTitle>
                <p>Email: comercial@petrohost.ao</p>
                <p>Endereço: Av. Pedro de Castro Van - Dúnem Vila Ecompoce nº 76, Luanda, Angola</p>
                <p>Telefone: +244 923 000 143</p>
            </Section>
            <Section>
                <Title>Serviços Web</Title>
                <ul style={{
                    display:"flex",
                    justifyContent:"flex-start",
                    flexDirection:"column"
                }}  >
                    <li>Registro de Domínio</li>
                    <li>Hospedagem de site compartilhada</li>
                    <li>Revenda de Hospedagem</li>
                    <li>Certificado SSL</li>
                </ul>
            </Section>
            <Section>
               
                <Title>Domínios</Title>
                <ul>
                    <li>Registro de domínio .ao</li>
                    <li>Registro de domínio .co.ao</li>
                    <li>Registro de domínio .com</li>
                    <li>Registro de domínio .pt</li>
                    <li>Registro de domínio .com.br</li>
                    <li>Registro de domínio .org</li>
                </ul>
            </Section>

    
            <Section>
                <Title>Links úteis & Suporte</Title>
                <ul>
                    <li>Criar Ticket</li>
                    <li>Telefones</li>
                </ul>
                
            </Section>
        </Container>
        <CopyrightText>
            Copyright © 2015- 2024 Todos os direitos reservados PETROHOST, LDA | NIF 5000962961
        </CopyrightText>
        </FooterContainer>
    );
}
