import { useState } from 'react';
import './index.css';
import MeetingForm from '../Form';
import { ImageContainer ,ContentContainer} from './style'; 
export const HomePage = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleMeetingFormSubmit = (event) => {
      if(typeof event==HTMLFormElement){
        event.preventDefault();
      }
        setShowSuccessModal(true);
    };

    const LogoAzulUrl="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet.png"

    return (
        <div className='container'>
            <div>
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