import Imagen from "./atoms/Imagen";
import '@/components/css/Social.css';
export default function Social(props) {
  const datos = props.data;
  return (
    <>
      <div className="social">
        {datos.map((dato) => (
          <a
            key={dato.title}
            href={dato.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Imagen
                className="icon"
              key={dato.title}
              title={dato.title}
              width={dato.width}
              height={dato.height}
              src={dato.src}
            />
          </a>
        ))}
      </div>
    </>
  );
}
