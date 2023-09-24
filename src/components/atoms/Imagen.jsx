import Image from "next/image";
import "@/components/css/Imagen.css";
export default function Imagen(props) {
  return (
    <Image
      className="png"
      width={props.width}
      height={props.height}
      alt={props.title}
      src={props.src}
      priority
    />
  );
}
