import styled from 'styled-components';
import {THEMES} from "../../themes/themes"
import Baner from "../../assets/banerOriginal.png"
export const ImageContainer = styled.div`
  width: 100%;
  height: 700px;
  max-width: 1000px;
  display: flex;
  justify-content: start; 
  align-items: flex-end; 
  background: url(${Baner});
  background-clip: content-box;
 background-size: cover;
 background-repeat: no-repeat;
background-position: 90px;
 z-index: -1;
 position: relative;



`;


export const ContentContainer = styled.div`
margin-left: 10px;
position: absolute;
display: flex;
justify-content: flex-start;
align-items: start;
flex-direction: column;
color: ${THEMES.colors.principal}; 
margin-bottom: 54px;

`;