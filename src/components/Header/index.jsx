import React from 'react';
import {HeaderContainer,Logo,Nav,NavItem,NavLink,NavList,
    ContactInfoContainer,EmailPhoneContainer,PortalLink} from "./style"
import { FaWordpress, FaEnvelope, FaGlobe, FaNetworkWired,FaServer } from "react-icons/fa";
import { CiLock,CiMail,CiPhone } from "react-icons/ci";

const UrlLogoTipo = "https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet.png";


export const Header = () => {
  return (
    <HeaderContainer>

<ContactInfoContainer>
        <EmailPhoneContainer>
          <span> <CiMail size={24} style={{ marginRight: 10 }} /> comercial@petrohost.ao</span>
          <span> <CiPhone size={24} style={{ marginRight: 10 }} />  +244 923 000 143</span>
        </EmailPhoneContainer>
        <PortalLink href="#/">
          Portal Do Cliente
          <CiLock size={24} style={{ marginLeft: 10 }} />
        </PortalLink>
      </ContactInfoContainer>
        
            
      <Nav>
      <div className="logo">
        <Logo src={UrlLogoTipo} alt="Logotipo" />
      </div>
        <NavList>
          <NavItem>
            <NavLink href="#/">
              <FaNetworkWired size={24} style={{ marginRight: 10 }} />
              Dominios
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/">
              <FaGlobe size={24} style={{ marginRight: 10 }} />
              Alojamento Web
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/">
              <FaEnvelope size={24} style={{ marginRight: 10 }} />
             Email
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/">
              <FaWordpress size={24} style={{ marginRight: 10 }} />
             WordPress Dedicado
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/">
              <FaServer size={24} style={{ marginRight: 10 }} />
              Servidor VPS
            </NavLink>
          </NavItem>
          {/* Adicione mais itens de navegação conforme necessário */}
        </NavList>
      </Nav>
       
    </HeaderContainer>
  );
};


/*import './header.css';
import {FaUser,FaLock} from "react-icons/fa"
import { CiLock } from "react-icons/ci";


const UrlLogoTipo="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet.png"
export const Header=()=>{
    return(
        <header className="header">
           <div className="logo"> 
                <img src={UrlLogoTipo} alt="Logotipo" /> 
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#/"  style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                            Portal do Cliente
                            <CiLock size={24} style={{marginLeft:10}} />
                        </a>
                       
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
*/