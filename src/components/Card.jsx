import Imagen from "./atoms/Imagen";
import Titulo from "./atoms/Titulo";
import '@/components/css/Card.css'
export default function Card(props) {
    const datos = props.data;
    return(
        <>
            {
                datos.map(dato => (
                    <article className="card" key={dato.title}>
                        <Imagen title={dato.title} width={dato.width} height={dato.height} src={dato.src}/>
                        <Titulo titulo={dato.title}/>
                    </article>
                ))
            }
        </>
    );
}