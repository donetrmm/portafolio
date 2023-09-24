import Imagen from "./atoms/Imagen";
import Parrafo from "./atoms/parrafo";
import '@/components/css/Banner.css';
export default function Banner(props) {
    return (
        <>
            <section className="banner">
                <Imagen title={props.data.title} width={props.data.width} height={props.data.height} src={props.data.src} />
                <article className="informacion">
                    <Parrafo parrafo={props.data.saludo}/>
                    <Parrafo parrafo={props.data.estudioAct} />
                    <Parrafo parrafo={props.data.especialidad} />
                </article>
            </section>
        </>
    );

}