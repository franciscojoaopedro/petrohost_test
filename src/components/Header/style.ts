import { THEMES } from './../../themes/themes';
import styled from 'styled-components';
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366; 
  padding: 10px;
  flex-direction: column;
  
  `;

export const Logo = styled.img`
  height: 50px; 
  `;

export const Nav = styled.nav`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  
`;

export const NavItem = styled.li`
  margin: 0 10px;
  
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; 
  text-decoration: none;
  
`;

export const ContactInfoContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:  transparent; 
  padding: 10px;
  color: white; 
  border-bottom: 2px solid #fff;
  margin-bottom: 10px;

`;

export const EmailPhoneContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
  }

 
`;

export const PortalLink = styled.a`
  display: flex;
  align-items: center;
  color: white; 
  text-decoration: none;
  background: ${THEMES.colors.principal};
  border-radius: 8px;
  padding: 8px 32px;

`;