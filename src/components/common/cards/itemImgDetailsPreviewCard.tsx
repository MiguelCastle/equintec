import React from 'react'
import product from '../../../static/images/product.jpeg';
import {useNavigate} from 'react-router-dom';
import { Star } from '../../icons';
interface ItemImgDetailsPreviewCardProps {
    handleClick: (e:any) => void
}
 
const ItemImgDetailsPreviewCard: React.FC<ItemImgDetailsPreviewCardProps> = ({handleClick}) => {
    const navigator = useNavigate();

    return ( 
        <article className='item-img-info-preview-card'>
            <img src={product} alt="product for sale" />
            <div className="iiipc-content">
                <p className='iiifpc-category'>Herramienta</p>
                <h3 className='iiifpc-name' onClick={() => navigator('/product/1234')}>Lazo Rotatorio ITALIA</h3>
                <p className='iiifpc-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime inventore officia odit nulla obcaecati.</p>
                <div className="iiipc-extra-content">
                    <p>$100.00</p>
                    <div className="iiiipc-ec-pd-rating">
                        <ul className="iiiipc-ec-stars-rating-list">
                            <li>
                                <Star color={'#fcb941'}/>
                            </li>
                            <li>
                            <   Star color={'#fcb941'}/>
                            </li>
                            <li>
                                <Star color={'#fcb941'}/>
                            </li>
                            <li>
                                <Star color={'#fcb941'}/>
                            </li>
                            <li>
                                <Star color={'#fcb941'}/>
                            </li>
                        </ul>
                        <p className='text-gray'>( 2 Reviews )</p>
                    </div>
                    <button className="add-wishlist-btn">
                        Agregar a favoritos
                    </button>
                </div>
                <button className='iiifpc-btn' onClick={(e) => handleClick(e)}>Add To Cart</button>
            </div>
        </article>
     );
}
 
export default ItemImgDetailsPreviewCard;