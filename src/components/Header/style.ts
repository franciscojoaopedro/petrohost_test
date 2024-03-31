import { THEMES } from './../../themes/themes';
import styled from 'styled-components';
export const HeaderContainer = styled.header`

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:${THEMES.colors.principal}; 
  padding: 10px;
  flex-direction: column;
  margin: 0;
  box-shadow: 0.6px 0.9px 2px rgba(0,0,0,0.5);
  border-radius: 0px 0px 8px 8px ;

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