import { useState } from 'react';
import './index.css';
import CardInfo from '../Cards';
import MeetingForm from '../Form';
import Stats from '../Stats';


export const HomePage = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleMeetingFormSubmit = (event) => {
        event.preventDefault();
        setShowSuccessModal(true);
    };

    return (
        <div className='container'>
            <div>
                <div className='info-container'>
                    <h2>Escolhe o seu pacote de Hospedagem</h2>
                    <p>Pacotes de hospedagem com recursos para suportar qualquer tipo de website</p>
                </div>
                <div className='cards-container'>
                    <CardInfo/>
                    <CardInfo/>
                    <CardInfo/>
                </div>
            </div>
            <div className='container2'>    
                <div className='meeting-form-container'>
                    <div className="card">
                        <h2>Petrohost - Soluções web e profissionais</h2>
                        <p>PETROHOST, é uma provedora de hospedagem de sites com a missão de promover o crescimento digital em Angola a todos que querem criar a sua identidade online, oferecemos um suporte profissional 24/7 todos os dias.</p>
                        <a href="#">Saiba mais</a>
                    </div>
                    <MeetingForm onSubmit={handleMeetingFormSubmit} />
                    {showSuccessModal && (
                        <div className="success-modal"> 
                            <p>Marcação feita com sucesso!</p>
                            <button onClick={() => setShowSuccessModal(false)}>Fechar</button>
                        </div>
                    )}
                </div>
            </div>
            <Stats/>
        </div>
    );
};