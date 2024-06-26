import { FaFacebookF, FaInstagram, FaLinkedinIn,FaPhone } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { CiPhone,CiMail,CiLocationOn} from "react-icons/ci";


import {
Container,CopyrightText,
FooterContainer,Logo,Section,SectionLogo,
SocialMediaContainer
}from "./style.js"


export const Footer=()=> {
    return (
        <FooterContainer>
        <Container>
        <SectionLogo>
            <Logo src='https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet-2.png' alt='Logo da sua empresa' />
            <p
             style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
            >
            <CiMail size={20}  style={{marginRight:5}}  />
            comercial@petrohost.ao</p>
            <p
            style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
            >
                 <CiLocationOn size={30}  style={{marginRight:5}}  />
                 Av. Pedro de Castro Van - Dúnem Vila Ecompoce nº 76, Luanda, Angola
            </p>
            <p style={{fontSize:30,fontWeight:"bold",display:"flex",justifyContent:"flex-start",alignItems:"center"}} >
                <CiPhone size={30}  style={{marginRight:5}}  />
                +244 923 000 143
            </p>
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
        </Container>
        <SocialMediaContainer>
                <a href="https://web.facebook.com/petrohost?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FaFacebookF  size={24} color="#fff" /></a>
                <a href="https://www.instagram.com/petrohost/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} color="#fff" /></a>
                <a href="https://www.linkedin.com/company/apetrohost/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={24} color="#fff" /></a>
        </SocialMediaContainer>
        <CopyrightText>
            Copyright © 2015- 2024 Todos os direitos reservados PETROHOST, LDA | NIF 5000962961
        </CopyrightText>
        </FooterContainer>
    );
}
