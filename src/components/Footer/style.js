import styled from 'styled-components';
import { THEMES } from '../../themes/themes';
export const FooterContainer = styled.footer`
width: 100%;
  background-color: ${THEMES.colors.principal};
  color: white;
  border-radius: 16px 0px 16px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  bottom: 0;
  
`;





export const Container=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 20px 0;
gap: 10px;
`
export const CopyrightText = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
`;
export const Logo = styled.img`
  width: 180px;
  height: auto;
`;
export const Section = styled.div`
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
export const SectionLogo = styled.div`
width: 300px;
text-align: justify;
margin-bottom: 20px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; 
`;
