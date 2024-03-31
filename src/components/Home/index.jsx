import { useState } from 'react';
import './index.css';
import CardInfo from '../Cards';
import MeetingForm from '../Form';
import Stats from '../Stats';
import { ImageContainer ,ContentContainer} from './style'; 
import logoBranco from "../../assets/logo_white.png"
export const HomePage = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleMeetingFormSubmit = (event) => {
        event.preventDefault();
        setShowSuccessModal(true);
    };

    const LogoAzulUrl="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet.png"

    return (
        <div className='container'>
            <div>
                {/*

                <div className='info-container'>
                    <h2>Escolhe o seu pacote de Hospedagem</h2>
                    <p>Pacotes de hospedagem com recursos para suportar qualquer tipo de website</p>
                </div>
                <div className='cards-container'>
                    <CardInfo/>
                    <CardInfo/>
                    <CardInfo/>
                </div>
    */}
            </div>
             
                <div className='meeting-form-container'>
                <ImageContainer>
                <ContentContainer>
                    <img src={LogoAzulUrl} width={180}  />
                  <h2   style={{display:"flex", justifyContent:"flex-end"}} >Precisando de Suporte?</h2> 
                  <p>Estamos disponivel 24/24 Via Chat, E-mail.</p>
                </ContentContainer>
                
                </ImageContainer>
               
                    <MeetingForm onSubmit={handleMeetingFormSubmit} />
                    {showSuccessModal && (
                        <div className="success-modal"> 
                            <p>Marcação feita com sucesso!</p>
                            <button onClick={() => setShowSuccessModal(false)}>Fechar</button>
                        </div>
                    )}
                
            </div>
        </div>
    );
};