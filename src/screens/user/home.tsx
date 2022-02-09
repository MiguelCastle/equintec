import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemImgInfoCard from '../../components/common/cards/iiic/itemImgInfoCard';
import ItemPreviewCard from '../../components/common/cards/itemPreviewCard';
import maxLogo from '../../static/images/max-logo.jpg';
import data from "../../data/home.json";

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    let navigate = useNavigate();
    return ( 
        <div id="home-container">
            <div id="intro-section">
                <section>
                    <h1>
                        {data.header}
                    </h1>
                    <p>{data.sub_header}</p>
                </section>
            </div>
            <div id="shop-by-brand-section">
                <h2>Compra Por Marca</h2>
                <ul>
                    <li>
                        <img src="https://d-themes.com/react/molla/demo-22/images/brands/6.png" alt="brand logo" />
                    </li>
                    <li>
                        <img src="https://d-themes.com/react/molla/demo-22/images/brands/7.png" alt="brand logo" />
                    </li>
                </ul>
            </div>
            <div className="itm-bnr-itmlst-tempate" id="till">
                <article className="title-banner">
                    <h3>Desctacados</h3>
                    <p>nuestros productos destacados</p>
                </article>
                <ItemImgInfoCard/>
                <ul className="itm-prv-list">
                    <li>
                        <ItemPreviewCard sale={true}/>
                    </li>
                    <li>
                        <ItemPreviewCard sale={true}/>
                    </li>
                    <li>
                        <ItemPreviewCard/>
                    </li>
                    <li>
                        <ItemPreviewCard/>
                    </li>
                    <li>
                        <ItemPreviewCard/>
                    </li>
                    <li>
                        <ItemPreviewCard/>
                    </li>
                </ul>
            </div>
            <section id="subscribe-section">
                <h3>{data.newsletter_header}</h3>
                <p>{data.newsletter_subheader}</p>
                <form action="" id="subscribe-newsletter">
                    <input type="email" required placeholder='Por favor introduzca su correo'/>
                    <button type="submit" className='subscribe-btn'>subscribir ahora</button>
                </form>
            </section>
            <div className="itm-bnr-itmlst-tempate" id="popular-products-section">
                <div className="sectiontitle-link">
                    <h2>{data.secondary_product_list_header}</h2>
                    <a href="/#">see all products</a>
                </div>
                <ul className="itm-prv-list">
                    <li>
                        <ItemPreviewCard sale={true}/>
                    </li>
                    <li>
                        <ItemPreviewCard />
                    </li>
                    <li>
                        <ItemPreviewCard sale={true}/>
                    </li>
                    <li>
                        <ItemPreviewCard />
                    </li>
                    <li>
                        <ItemPreviewCard />
                    </li>
                    <li>
                        <ItemPreviewCard />
                    </li>
                </ul>
            </div>
            <div id="blog-section">
                <div className="sectiontitle-link">
                    <h2>Noticias</h2>
                    <a href="/#">Ver Todas Noticias</a>
                </div>
                <article className="blog-preview-card">
                    <img src={maxLogo} alt="" />
                    <p>January 04, 2021</p>
                    <h3>Max Co. Ltd</h3>
                </article>
                <ul className="dots-carousel">
                    <li><span className="dot"></span></li>
                    <li><span className="dot"></span></li>
                    <li><span className="dot"></span></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Home;