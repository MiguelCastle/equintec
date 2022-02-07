import React from 'react';
import WindowTabs from '../../components/common/windowTabs/windowTabs';
import { Expand, Star } from '../../components/icons';
import data from "../../data/productDetail.json";

interface ProductDetailsProps {
    handleAddToCart: (e:any) => void
}
 
const ProductDetails: React.FC<ProductDetailsProps> = ({handleAddToCart}) => {
    return (
        <div id="product-details-container">
            <div className="pd-img-side">
                <div className="img-zoom-wrp">
                    <img src="https://d-themes.com/react_asset_api/molla/uploads/product_1_16dee019e1.jpg" alt="" />
                    <button className="img-zoom-btn">
                        <Expand color={'gray'}/>
                    </button>
                </div>
                <ul className="pd-img-list">
                    <li>
                        <img src="https://d-themes.com/react_asset_api/molla/uploads/product_1_16dee019e1.jpg" alt="" />
                    </li>
                </ul>
            </div>
            <div className="pd-details-wrp">
                <h3>{data.name}</h3>
                <div className="pd-rating">
                    <ul className="stars-rating-list">
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
                <ul className="pd-price">
                    <li>
                        ${data.discount_price}
                    </li>
                    <li>
                        ${data.price}
                    </li>
                </ul>
                <p>{data.description}</p>
                <form action="" className="pd-quantity-form">
                    <label htmlFor="">
                        Cant: <input type="number" name="pd-quantity" id="" value="1"/>
                    </label>
                    <button onClick={(e) => handleAddToCart(e)}>Agregar a cotización</button>
                </form>
                <button className="add-wishlist-btn">
                    Agregar a favoritos
                </button>
                <hr />
                <p>Category: Woodworking</p>
            </div>
            <WindowTabs data={data.all_details}/>
            <div className="you-may-also-like">
                <h2>También podría gustarte</h2>
                <ul className="mal-list">
                    <li>
                        <article className="itm-card-preview">
                                <img src="https://d-themes.com/react_asset_api/molla/uploads/product_1_16dee019e1.jpg" alt="" />
                                <p>woodworking</p>
                                <h4>dewalt dwara 100</h4>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default ProductDetails;