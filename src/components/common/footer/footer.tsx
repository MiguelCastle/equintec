import EquintecLogo from '../../../static/svg/equintecLogo';

import './style/footer.css';

export interface FooterProps {
    color: string,
    bckground: string   
}
 
const Footer: React.FC<FooterProps> = ({color, bckground}) => {
    return ( 
        <footer style={{color: color, background: bckground}}>
            <span>
                <EquintecLogo color={color} />
            </span>
            <div id="footer-social-medias-wrp">
                <a href="http://www.linkedin.com/company/equintec">
                <i className="fab fa-linkedin" style={{color: color}}></i>
                </a>
                <a href="https://www.youtube.com/channel/UCL9N7KqFlNqLtqsWqfsDWeQ" style={{color:color}}><i id="footer-youtube-icon" className="fab fa-youtube"></i></a>
                
            </div>
            <div id="footer-contact-info-wrp">
                <a style={{color: color}} href="tel:+56228403480" >+56 (22) 840 3480</a>
                <p style={{color: color}} >info@equintec.cl</p>
                <p style={{color: color}} > La Divisa 0340 bodega 1, San Bernardo</p>
            </div>
            
            <ul>
                <li>
                    <a style={{color: color}} href="/">about us</a>
                    {/* <ul className="footer-inner-options">
                        <li>our company</li>
                        <li>our team</li>
                        <li>map</li>
                    </ul> */}
                </li>
                <li>
                    <a style={{color: color}} href="/">sales and services</a>
                    <p>sales and consulting</p>
                    <ul className="footer-inner-inner-options">
                        <li>productivity consulting</li>
                        <li>demostrations and trainings</li>
                        <li>how to buy at equintec</li>
                    </ul>
                    <p>representations</p>
                    <ul className="footer-inner-inner-options">
                        <li>MAX USA Corp.</li>
                        <li>Alba</li>
                        <li>Enrollo</li>
                        <li>Simpedil</li>
                    </ul>
                </li>
                <li>
                    <a style={{color: color}} href="/">Products</a>
                    {/* <ul className="footer-inner-options">
                        <li>our company</li>
                        <li>our team</li>
                        <li>map</li>
                    </ul> */}
                </li>
                <li>
                    <a style={{color: color}} href="/">enfierradores</a>
                    <ul className="footer-inner-options">
                        <li>enfierradores en Chile</li>
                        <li>manual para enfierradores</li>
                        <li>presencia en obras</li>
                    </ul>
                </li>
                <li>
                    <a style={{color: color}} href="/contactus">contact</a>
                </li>
            </ul>
            <p>© 2021 - Equintec SpA - Todos los derechos reservados</p>
    </footer>
     );
}
 
export default Footer;