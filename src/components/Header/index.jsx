import './header.css';


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
                        <a href="#/">Portal do Cliente</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}