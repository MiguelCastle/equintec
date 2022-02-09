import React from 'react';
import TeamMember from '../../components/common/teamMember/teamMember';
import data from "../../data/acercade.json";

interface AboutUsProps {
    
}
 
const AboutUs: React.FC<AboutUsProps> = () => {
    return (  
        <div id="aboutus-container">
            <section id="aboutus-pgbckgrnd" className="imgb-td-template">
                <h1>{data.header}</h1>
                <p>{data.sub_header}</p>
            </section>
            <article className='tp-template'>
                <h3>{data.first_section_title}</h3>
                <p>{data.first_section_description}</p>
            </article>
            <section id="what-we-do">
                <h2>{data.second_section_title}</h2>
                <ul>
                    <li>
                        <i className="fas fa-toolbox"></i>
                        <p>{data.second_section_list[0]}</p>
                    </li>
                    <li>
                        <i className="fas fa-hdd"></i>
                        <p>{data.second_section_list[1]}</p>
                    </li>
                    <li>
                        <i className="fas fa-file-contract"></i>
                        <p>{data.second_section_list[2]}</p>
                    </li>
                    <li>
                        <i className="fas fa-industry"></i>
                        <p>{data.second_section_list[3]}</p>
                    </li>
                    <li>
                        <i className="fas fa-city"></i>
                        <p>{data.second_section_list[4]}</p>
                    </li>
                </ul>
            </section>
            <section id="our-team">
                    <h2>Nuestro Equipo</h2>
                    <ul>
                        {data.nuestro_equipo_data_list.map((member) => {
                            return (
                                <li>
                                    <TeamMember teamMember = {member}/>
                                </li>
                            )
                        })}
                    </ul>
            </section>
        </div>
    );
}
 
export default AboutUs;