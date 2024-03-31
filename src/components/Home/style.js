import styled from 'styled-components';
import {THEMES} from "../../themes/themes"
import Baner from "../../assets/baner_2.png"
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  display: flex;
  justify-content: start; 
  align-items: flex-end; 
  background: url(${Baner});
  background-clip: content-box;
 background-size: cover;
 background-repeat: no-repeat;
background-position: 120px;
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



`;