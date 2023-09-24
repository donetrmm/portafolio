import Titulo from "./atoms/Titulo";
import Imagen from "./atoms/Imagen";
import Parrafo from "./atoms/Parrafo";
import '@/components/css/card-description.css'
export default function CardDescription(props) {
    const datos = props.data;
    return(
        <>
                        {
                datos.map(dato => (
                    <a href={dato.link} key={dato.title} target="_blank" rel="noopener noreferrer">
                    <article className="card-description">
                        <Imagen title={dato.title} width={dato.width} height={dato.height} src={dato.src}/>
                        <Titulo titulo={dato.title}/>
                        <Parrafo parrafo={dato.parrafo} />
                    </article>
                    </a>
                ))
            }
        </>
    );
}