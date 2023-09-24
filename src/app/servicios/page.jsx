import '@/app/servicios/servicios.css';

import Card from '@/components/Card';
export default function Servicios(prop) {
    return(
        <>
            <section className='servicios-cards'>
                <Card data={serviciosData}/>
            </section>
        </>
    );
}

const serviciosData = [
    {title: "Sitios Web", width: "50", height: "50", src:"/desktop.svg"},
    {title: "Backend", width: "50", height: "50", src:"/backend.svg"},
    {title: "Bases de datos", width: "50", height: "50", src:"/database.svg"},
    {title: "Aplicaciones de escritorio", width: "50", height: "50", src:"/desktop.svg"},
]