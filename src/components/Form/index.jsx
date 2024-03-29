import React, { useState } from 'react';
import "./index.css"

const MeetingForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && domain.trim() !== '') {
            onSubmit({ name, phone, email, domain });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <h3 style={{textAlign:"center"}}>Marcar uma reunião</h3>
        </div>
            <div className="form-group"> 
                <label>Nome:</label>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group"> 
                <label>Telefone:</label>
                <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group"> 
                <label>E-mail:</label>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group"> 
                <label>Domínio:</label>
                <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
        </>
    );
};

export default MeetingForm;