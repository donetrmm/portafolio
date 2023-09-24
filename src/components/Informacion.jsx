import Parrafo from "./atoms/Parrafo";
import "@/components/css/Informacion.css";
export default function Informacion(props) {
  const datos = props.data;
  return (
    <>
      <h2 id={props.id}>{props.titulo}</h2>
      {datos.map((dato) => (
        <article className="information" key={dato.seccion}>
          <Parrafo parrafo={dato.seccion} />
          <Parrafo parrafo={dato.respuesta} />
        </article>
      ))}
    </>
  );
}
