export const metadata = {
  title: 'Mi Portafolio',
  description: 'CV Iskander',
}
import {Roboto} from 'next/font/google';
import Navbar from "@/components/NavBar";
import Informacion from '@/components/Informacion';
import Social from '@/components/SocialN';
import '@/app/home-main.css';
const roboto = Roboto({
  weight: ["300","400", "500","700"],
  style: ['italic', 'normal'],
  subsets: ['latin']
});
export default function RootLayout({ children }) {
 return (
    <html lang="es-MX">
      <body className={roboto.className}>
        <header>
          <Navbar datos={DataNav}/>
        </header>
        {children}
        <footer className='home'>
          <article className='boxInfo'>
            <Informacion data={contactoData} titulo="Contacto" id="contacto" />
          </article>
          <article className='boxSocial'>
            <Social data={socialData} />
          </article>
        </footer>
        </body>

    </html>
  )
}

const DataNav = {
  titulo: "Mi Portafolio",
  links: [
      {titulo: "Servicios", href:"/servicios"},
      {titulo: "Proyectos", href:"/proyectos"},
      {titulo: "Contacto", href:"#contacto"}
  ]
}
const contactoData = [
  {seccion:"Dirección: ", respuesta: "Calle Central #1070, Tuxtla Gutierrez, Chiapas"},
  {seccion:"Número: ", respuesta: "961 353 3655"},
  {seccion:"Email: ", respuesta: "iskanderramos8@gmail.com"},
];
const socialData = [
  {title:"Facebook", link:"https://www.facebook.com/donetrm?mibextid=ZbWKwL", width:"25", height:"25", src:"/facebook.svg"},
  {title:"Instagram", link:"https://instagram.com/donetrm?igshid=OGQ5ZDc2ODk2ZA==", width:"25", height:"25", src:"/instagram.svg"},
  {title:"GitHun", link:"https://github.com/donetrmm?tab=repositories", width:"25", height:"25", src:"/github.svg"},


]