import './header.css';
import {FaUser,FaLock} from "react-icons/fa"
import { CiLock } from "react-icons/ci";


const UrlLogoTipo="https://www.petrohost.ao/resources/uploads/logo/2024-01-04/petrohost-hospedagem-de-sites-seu-negocio-na-internet.png"
export const Header=()=>{
    return(
        <header className="header">
           <div className="logo"> 
                <img src={UrlLogoTipo} alt="Logotipo" /> 
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#/"  style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                            Portal do Cliente
                            <CiLock size={24} style={{marginLeft:10}} />
                        </a>
                       
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}