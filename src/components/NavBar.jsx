import Links from "./atoms/Links";
import Titulo from "./atoms/Titulo";
import '@/components/css/Nav.css'

export default function Navbar(props) {
    const datos = props.datos.links;
    return(
        <>  
        <div className="navbar">
            <Links href="/">
                <Titulo titulo={props.datos.titulo}/>
            </Links>           
            {
                datos.map(dato => (
                    <Links key={dato.titulo} href={dato.href}>{dato.titulo}</Links>
                ))
            }
            
        </div>

        </>
    );
}