import React from 'react';
import { Calendar, Clock, Email, Location, Phone } from '../../components/icons';
import data from "../../data/contactUs.json";

interface ContactUsProps {
    
}
 
const ContactUs: React.FC<ContactUsProps> = () => {
    return ( 
        <div id="contactus-container">
            <section className="imgb-td-template contactus-pgbckgrnd">
                <h1>{data.header}</h1>
                <p>{data.sub_header}</p>
            </section>
            <article className='tp-template'>
                <h3>{data.first_section_title}</h3>
                <p>{data.first_section_description}</p>
            </article>
            <ul>
                <li>
                    <h4>The Office</h4>
                    <ul>
                        <li>
                            <Location color={"#fcb941"} />
                            <p>{data.office_info_list.address}</p>
                        </li>
                        <li>
                            <Phone color={"#fcb941"}/>
                            <p>{data.office_info_list.phone}</p>
                        </li>
                        <li>
                            <Email color={'#fcb941'}/> 
                            <p>{data.office_info_list.email}</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Office Hours</h4>
                    <ul>
                        <li>
                            <Clock color={'#fcb941'}/>
                            <p>
                                {data.office_hours[0].days}
                                <span className='gray-text'> {data.office_hours[0].time}</span>
                            </p>
                        </li>
                        <li>
                            <Calendar color={'#fcb941'}/>
                            <p>
                                {data.office_hours[1].days}
                                <span className='gray-text'> {data.office_hours[1].time}</span>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div>
                <div className='tp-template'>
                    <h3>{data.form_header}</h3>
                    <p>{data.form_subheader}</p>
                </div>
                <form action="" id="contact-form-container">
                    <input type="text" placeholder='Name *' />
                    <input type="text" placeholder='Email *' />
                    <input type="text" placeholder='Phone *' />
                    <input type="text" placeholder='Subject *' />
                    <textarea placeholder='Message *' />
                    <button type="submit">{data.form_button_label}</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactUs;