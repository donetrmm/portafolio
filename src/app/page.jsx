import Banner from "@/components/Banner";
import Informacion from "@/components/Informacion";
import '@/app/home-main.css';
export default function Home() {
    return(
        <>
            <section className="about">
                <Banner data={BannerData}/>   
            </section>
            <section className="about">
                <Informacion data={InformacionData} titulo="Información" />
            </section>
        </>
    );
}

const BannerData = {
    title:"banner",
    width:200,
    height: 200,
    src:"/banner.png",
    saludo: "Hola! Soy Iskander",
    estudioAct: "Estudiante en la Univesidad Politecnica de Chiapas",
    especialidad: "Programador backend y aprendiz de frontend"
}
const InformacionData = [
    {seccion:"Edad: ", respuesta: "18 años"},
    {seccion:"Ultimo grado de estudios: ", respuesta: "Universitario (en curso)"},
    {seccion:"Lenguajes: ", respuesta: "C++, JavaScript, Java"},
    {seccion:"Frameworks: ", respuesta: "React.js, Next.js, Express"},
    {seccion:"Skills: ", respuesta: "Trabajo colaborativo, comunicación, etc."},
    {seccion:"Idiomas: ", respuesta: "Español, Ingles"},
];
