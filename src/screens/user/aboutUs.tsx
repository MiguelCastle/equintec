import React from 'react';
import TeamMember from '../../components/common/teamMember/teamMember';

const teamMemberList = [
    {
        name: 'ignacio munoz r.',
        position: 'director comercial',
        cell: '+569 9433 8334',
        email: 'imunoz@equintec.cl',
        extension: '+562 2840 3480x101',
        additional_info: {linked: 'https://www.linkedin.com/in/imunozr/', education: 'PUC civil builder'}
    },
    {
        name: 'Karina Arriagada E.',
        position: 'gerente general',
        cell: '+569 4209 5077',
        email: 'karina.arriagada@equintec.cl',
        extension: '+562 2840 3480x100',
        additional_info: {linked: 'https://www.linkedin.com/in/karina-arriagada-espinoza-a14a99114/', education: ''}
    },
    {
        name: 'ventas oficina santiago',
        position: 'representante comercial',
        cell: '+569 9641 6090',
        email: 'ventas.scl@equintec.cl',
        extension: '+562 2840 3480x103',
        additional_info: {linked: '', education: ''}
    },
    {
        name: 'rodrigo neira r.',
        position: 'representante comercial',
        cell: '+569 4205 6430',
        email: 'rneira@equintec.cl',
        extension: '+562 2840 3480x104',
        additional_info: {linked: 'https://www.linkedin.com/in/rodrigo-neira-152a431ab/', education: ''}
    },
    {
        name: 'carlos sanchez c.',
        position: 'servicio tecnico',
        cell: '+569 8341 9591',
        email: 'servicio@equintec.cl',
        extension: '+562 2840 3480x102',
        additional_info: {linked: '', education: ''}
    },
    {
        name: 'claudio gonzalez r.',
        position: 'bodega y despacho',
        cell: '+569 3428 1273',
        email: 'bodega@equintec.cl',
        extension: '+562 2840 3480',
        additional_info: {linked: '', education: ''}
    },
]
interface AboutUsProps {
    
}
 
const AboutUs: React.FC<AboutUsProps> = () => {
    return (  
        <div id="aboutus-container">
            <section id="aboutus-pgbckgrnd" className="imgb-td-template">
                <h1>Acercade Nosotros</h1>
                <p>quienes somos</p>
            </section>
            <article className='tp-template'>
                <h3>Nuestra Misión</h3>
                <p>Es entrgar soluciones de valor, para la construccion y mineria, comercializando productos y servicios innovadores, seguros y de calidad, que contribuyan a mejorar la productividad de la enfierradura en chile.</p>
            </article>
            <section id="what-we-do">
                <h2>Que Hacemos</h2>
                <ul>
                    <li>
                        <i className="fas fa-toolbox"></i>
                        <p>Comercializamos equipamiento para el rubro de enfierradura en construcción y minería.</p>
                    </li>
                    <li>
                        <i className="fas fa-hdd"></i>
                        <p>Ofrecemos asesoramiento en la incorporación de nuevas tecnologías.</p>
                    </li>
                    <li>
                        <i className="fas fa-file-contract"></i>
                        <p>Somos vanguardistas en la búsqueda e introducción de soluciones.</p>
                    </li>
                    <li>
                        <i className="fas fa-industry"></i>
                        <p>Contamos con un respaldo directo de las fábricas representadas.</p>
                    </li>
                    <li>
                        <i className="fas fa-city"></i>
                        <p>Apoyamos el emprendimiento y tecnificación de los enfierradores.</p>
                    </li>
                </ul>
            </section>
            <section id="our-team">
                    <h2>Nuestro Equipo</h2>
                    <ul>
                        <li>
                            <TeamMember teamMember = {teamMemberList[0]}/>
                        </li>
                        <li>
                            <TeamMember teamMember = {teamMemberList[1]}/>
                        </li>
                        <li>
                            <TeamMember teamMember = {teamMemberList[2]}/>
                        </li>
                        <li>
                            <TeamMember teamMember = {teamMemberList[3]}/>
                        </li>
                        <li>
                            <TeamMember teamMember = {teamMemberList[4]}/>
                        </li>
                        <li>
                            <TeamMember teamMember = {teamMemberList[5]}/>
                        </li>
                    </ul>
            </section>
        </div>
    );
}
 
export default AboutUs;