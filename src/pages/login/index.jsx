import { useRef, useState } from "react";
import {Button,Form,Input,LoginContainer,Title,ButtonContainer} from "./style"

export const Login = () => {



    const inputEmail = useRef(null);
    const inputSenha=useRef(null)

     function deleterCampos(){
      inputEmail.current.value=""
      inputSenha.current.value=""
     }
    const handerLogin=(e)=>{
      if( inputEmail.current.value==""||inputSenha.current.value==""){
        alert("OS CAMPOS ESTAO VAZIOS")
        return
      }
      
      const emailValido=inputEmail.current.value.includes("@petrohost.ao")
      if(!emailValido){
        alert("E-mail invalido")
        return
      }
      if(inputEmail.current.value)
        e.preventDefault()
        const data={
            email:inputEmail.current.value,
            senha:inputSenha.current.value
        }

        console.log(data)
        deleterCampos()
    }
    return (
      <LoginContainer>
        <Title>Login</Title>
        <Form onSubmit={handerLogin}>
          <Input ref={inputEmail}   type="text" placeholder="E-mail" />
          <Input ref={inputSenha}   type="password" placeholder="Senha" security="************"  />
          <ButtonContainer>
          <Button type="submit">Entrar</Button>

          </ButtonContainer>
        </Form>
      </LoginContainer>
    );
  };