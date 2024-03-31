import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: url("public/baner_one.jpg");
  background-clip: content-box;
 background-size: cover;
 background-repeat: no-repeat;
  background-position: center;
 z-index: -1;
 position: relative;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); 
  z-index: -1;
}
`;


export const ContentContainer = styled.div`
display: flex;
justify-content: start;
align-items: start;
flex-direction: column;
  z-index: 2;
  text-align: center;
  color: white; 
`;