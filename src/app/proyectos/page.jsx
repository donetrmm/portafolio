import CardDescription from "@/components/CardDescription";
import '@/app/proyectos/proyectos.css';
export default function Proyectos(props) {
  return (
    <>
      <section className="card-desc">
        <CardDescription data={CardInfo} />
      </section>
    </>
  );
}

const CardInfo = [
  {
    title: "The Barber's",
    width: "400",
    height: "200",
    src: "/thebarberss.png",
    parrafo: "Sitio web de citas para una barbería",
    link: "https://github.com/donetrmm/thebarbers"
  },
  {
    title: "CINEMAUP",
    width: "400",
    height: "200",
    src: "/cinemaup.png",
    parrafo: "Sitio web de series y peliculas",
    link: "https://github.com/donetrmm/cinemaup-frontend"
  },

];
