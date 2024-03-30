import styled from 'styled-components';

const FooterContainer = styled.footer`
width: 100%;
  background-color: #0284c7;
  color: white;
  border-radius: 16px 0px 16px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  bottom: 0;
  
`;





const Container=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 20px 0;
gap: 10px;
`
const CopyrightText = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
`;
const Logo = styled.img`
  width: 180px;
  height: auto;
`;
const Section = styled.div`
display: flex;
justify-content: center;
align-items: start;
text-align: justify;
flex-direction: column;
ul{
    padding-left: 0;
    margin-top: 0;
    list-style-type: none;
    margin-bottom: 20px;
}
h3 {
    margin-bottom: 10px;
}
`;
const SectionLogo = styled.div`
width: 300px;
text-align: justify;
margin-bottom: 20px;
`;


export const Footer=()=> {
    return (
        <FooterContainer>
        <Container>
        <SectionLogo>
            <Logo src='https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet-2.png' alt='Logo da sua empresa' />
            <p>Email: comercial@petrohost.ao</p>
            <p>Endereço: Av. Pedro de Castro Van - Dúnem Vila Ecompoce nº 76, Luanda, Angola</p>
            <p>Telefone: +244 923 000 143</p>
        </SectionLogo>
        <Section>
            <h3>Serviços Web</h3>
                <ul >
                    <li>Registro de Domínio</li>
                    <li>Hospedagem de site compartilhada</li>
                    <li>Revenda de Hospedagem</li>
                    <li>Certificado SSL</li>
                </ul>
        </Section>
        <Section>
                <h3>Domínios</h3>
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
                <h3>Links úteis & Suporte</h3>
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
