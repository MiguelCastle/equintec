import React from 'react';
import { Calendar, Clock, Email, Location, Phone } from '../../components/icons';

interface ContactUsProps {
    
}
 
const ContactUs: React.FC<ContactUsProps> = () => {
    return ( 
        <div id="contactus-container">
            <section className="imgb-td-template contactus-pgbckgrnd">
                <h1>Contact Us</h1>
                <p>We're Here For You</p>
            </section>
            <article className='tp-template'>
                <h3>Contact Information</h3>
                <p>Es entrgar soluciones de valor, para la construccion y mineria, comercializando productos y servicios innovadores, seguros y de calidad, que contribuyan a mejorar la productividad de la enfierradura en chile.</p>
            </article>
            <ul>
                <li>
                    <h4>The Office</h4>
                    <ul>
                        <li>
                            <Location color={"#fcb941"} />
                            <p>La Divisa 0340 bodega 1, San Bernardo</p>
                        </li>
                        <li>
                            <Phone color={"#fcb941"}/>
                            <p>+92 423 567</p>
                        </li>
                        <li>
                            <Email color={'#fcb941'}/> 
                            <p>info@equintec.cl</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Office Hours</h4>
                    <ul>
                        <li>
                            <Clock color={'#fcb941'}/>
                            <p>
                                Monday-Saturday
                                <span className='gray-text'>11am-7pm ET</span>
                            </p>
                        </li>
                        <li>
                            <Calendar color={'#fcb941'}/>
                            <p>
                                Sunday
                                <span className="gray-text">11am-6pm ET</span>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div>
                <div className='tp-template'>
                    <h3>Got Any Questions?</h3>
                    <p>Use the form below to ge in touch with the sales team</p>
                </div>
                <form action="" id="contact-form-container">
                    <input type="text" placeholder='Name *' />
                    <input type="text" placeholder='Email *' />
                    <input type="text" placeholder='Phone *' />
                    <input type="text" placeholder='Subject *' />
                    <textarea placeholder='Message *' />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactUs;