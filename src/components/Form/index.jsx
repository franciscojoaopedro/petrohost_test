import  { useState } from 'react';
import "./index.css"
import { THEMES } from '../../themes/themes';


const MeetingForm = ({ onSubmit }) => {
    const [formValue,setFormValue]=useState({
        nome:"",
        telefone:"",
        email:"",
        servicos:"",
        data: "",
        hora: "",
        funcionario:"",
        endereco:""
    })
    const [currentStep, setCurrentStep] = useState(1);
    const [invisible,setInvisible]=useState("")
    const nextStep = () => {
        if(currentStep==1){
            if(formValue.servicos=="" || undefined)return
            if(formValue.endereco==""|| undefined)return
            if(formValue.funcionario==""|| undefined)return
            setCurrentStep(currentStep + 1);
            setInvisible("")
        }
        if(currentStep==2){
            if(formValue.data==""|| undefined)return
            if(formValue.hora==""|| undefined)return
            setCurrentStep(currentStep + 1);
            setInvisible("")
        }
        if(currentStep==3){
            if(formValue.nome==""|| undefined)return
            if(formValue.email==""|| undefined)return
            if(formValue.telefone==""|| undefined)return
            
            setCurrentStep(currentStep + 1);
            setInvisible("invisbleButtonVoltar")


        }
        return
    };
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };




    const listaDeServicos = [
        " ",
        "Registro de domínio",
        "Hospedagem de sites",
        "E-mail Corporativo",
        "Servidor VPS",
        "Desenvolvimento Web",
        "Criação de Website",
        "Restruturação de Website",
        "Criação de Ecommerce",
        "Criação de Aplicativo",
        "Criação de API"
    ];

    const listaDeLocalizacao = [
        " ",
        "Talatona - Rua do Shopping Talatona nº 20",
        "Av. Pedro de Castro Van - Dúnem Vila Ecocampo nº 76, Luanda, Angola"
    ];

    const listaDeFuncionarios=[
        " ",
        "JOÃO DEV",
        "NGUNGA DEV",
        "FRANCISCO DEV",
        "PETRO HOST"
    ]



    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                  <>
            <div className="form-group"> 
                <label>Serviços</label>
                <select name='servicos' value={formValue.servicos}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    servicos:e.target.value
                }))} 
                >
                {listaDeServicos.map(servico => (<option key={servico} value={servico}>{servico}</option>))}
                        
                </select>
            </div>
            <div className="form-group"> 
                <label>Localização</label>
                <select name='endereco' value={formValue.endereco}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    endereco:e.target.value
                }))} 
                >
                {listaDeLocalizacao.map(endereco => (<option key={endereco} value={endereco}>{endereco}</option>))}
                </select>
            </div>
            <div className="form-group"> 
                <label>Funcionário</label>
                <select name='funcionario' value={formValue.funcionario}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    funcionario:e.target.value
                }))} 
                >
                {listaDeFuncionarios.map(funcionario => (<option key={funcionario} value={funcionario}>{funcionario}</option>))}
                </select>
            </div>
                  </>
                )
            case 2:
                return (
                    <>
                    <div className="form-group">
                        <label>Data</label>
                        <input
                            type="date"
                            name="data"
                            value={formValue.data}
                            onChange={(e) => setFormValue(prevState => ({
                                ...prevState,
                                data: e.target.value
                            }))}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora</label>
                        <input
                            type="time"
                            name="hora"
                            value={formValue.hora}
                            onChange={(e) => setFormValue(prevState => ({
                                ...prevState,
                                hora: e.target.value
                            }))}
                        />
                    </div>
                </>
                )
            case 3:
                return(
                    <>
                <div className="form-group"> 
                <label>Nome</label>
                <input name='nome' value={formValue.nome}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    nome:e.target.value
                }))} 
                /></div>
                 <div className="form-group"> 
                <label>Email</label>
                <input name='email' value={formValue.email}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    email:e.target.value
                }))} 
                /></div>
                 <div className="form-group"> 
                <label>Telefone</label>
                <input name='telefone' value={formValue.telefone}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    telefone:e.target.value
                }))} 
                /></div>
                    </>
                )
            case 4:
                return (
                    <div className="modal-overlay">
                    <div className="modal">
                        <h3 style={{color:`${THEMES.colors.principal}`}} >Confirmação</h3>
                        <div className="modal-content">
                            <div className="summary-item">
                                <strong>Nome:</strong> {formValue.nome}
                            </div>
                            <div className="summary-item">
                                <strong>Telefone:</strong> {formValue.telefone}
                            </div>
                            <div className="summary-item">
                                <strong>Email:</strong> {formValue.email}
                            </div>
                            <div className="summary-item">
                                <strong>Serviço:</strong> {formValue.servicos}
                            </div>
                            <div className="summary-item">
                                <strong>Data:</strong> {formValue.data}
                            </div>
                            <div className="summary-item">
                                <strong>Hora:</strong> {formValue.hora}
                            </div>
                            <div className="summary-item">
                                <strong>Funcionário:</strong> {formValue.funcionario}
                            </div>
                            <div className="summary-item">
                                <strong>Endereço:</strong> {formValue.endereco}
                            </div>
                        </div>

                        <div className='flex-button'>
                        <button type="submit" onClick={handleSubmit} >Confirmar</button>
                        </div>
                    </div>
                </div>
                
                )
            default:
                return (
                    <>   
            <div className="form-group"> 
                <label>Serviços</label>
                <select required name='servicos' value={formValue.servicos}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    servicos:e.target.value
                }))} 
                >
                {listaDeServicos.map(servico => (<option key={servico} value={servico}>{servico}</option>))}
                        
                </select>
            </div>
            <div className="form-group"> 
                <label>Localização</label>
                <select required name='endereco' value={formValue.endereco}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    endereco:e.target.value
                }))} 
                >
                {listaDeLocalizacao.map(endereco => (<option key={endereco} value={endereco}>{endereco}</option>))}
                </select>
            </div>
            <div className="form-group"> 
                <label>Funcionário</label>
                <select name='funcionario' value={formValue.funcionario}
                onChange={(e) => setFormValue((prevStat)=>({
                    ...prevStat,
                    funcionario:e.target.value
                }))} 
                >
                {listaDeFuncionarios.map(funcionario => (<option key={funcionario} value={funcionario}>{funcionario}</option>))}
                </select>
            </div>
                  </>
                )
        }
    };







    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValue.nome==""|| undefined ||
        formValue.data==""|| undefined
        || formValue.email==""|| undefined
        || formValue.servicos==""|| undefined
        ||formValue.hora==""||undefined
        ||formValue.funcionario==""|| undefined
        || formValue.telefone==""|| undefined
        ) {
            alert('Por favor, preencha todos os campos.');
            return
        }
        
            console.log({
                nome:formValue.nome,
                email:formValue.email,
                telefone:formValue.telefone,
                servicos:formValue.servicos,
                funcionario:formValue.funcionario,
                data: formValue.data,
                hora:formValue.hora,
                endereco:formValue.endereco,
            })
           onSubmit(formValue);


           function apagarCampos(){
            formValue.nome=""
            formValue.email=""
            formValue.telefone=""
            formValue.servicos=""
            formValue.funcionario=""
            formValue.data=""
            formValue.hora=""
            formValue.endereco=""
           }

           
           setTimeout(()=>{
               apagarCampos()
               
              setCurrentStep(1)

           },1000)
        } 
    

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <h3 style={{textAlign:"center"}}>Marcar uma reunião</h3>
        </div>
        {renderStep()}

                {
                    currentStep >1&&<button   className={invisible} type="button" onClick={prevStep}>Voltar</button>
                }
                
                {
                currentStep < 4 &&<button type="button" onClick={nextStep}>Próximo</button>
                }
        </form>
        </>
    );
};

export default MeetingForm;