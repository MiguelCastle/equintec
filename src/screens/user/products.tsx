import React from 'react'
import ItemImgDetailsPreviewCard from '../../components/common/cards/itemImgDetailsPreviewCard';

interface ProductsProps {
    handleAddToCart: (e:any) => void
}
 
const Products: React.FC<ProductsProps> = ({handleAddToCart}) => {
    return ( 
        <div id="products-container">
            <section className="imgb-td-template products-pgbckgrnd">
                <h1>Products</h1>
                <p>shop for high quality</p>
            </section>
            <div className="prd-search-left">
                <p>Filters:</p>
                <button>Clean All</button>
                <ul className="prd-filter-list">
                    <li>
                        <details className="prdf-option">
                            <summary className='prdf-os'>Category</summary>
                            <ul className='prdf-ol'>
                                <li>Furniture</li>
                                <li>Coffe & Tables</li>
                                <li>Lighting</li>
                                <li>Decoration</li>
                            </ul>                        
                        </details>
                    </li>
                    <li>
                        <details className="prdf-option">
                            <summary className='prdf-os'>Size</summary>
                            <ul className='prdf-ol'>
                                <li>Extra Small</li>
                                <li >Small</li>
                                <li>Medium</li>
                                <li>Large</li>
                            </ul>                        
                        </details>
                    </li>
                    <li>
                        <details className="prdf-option">
                            <summary className='prdf-os'>Brand</summary>
                            <ul className='prdf-ol'>
                                <li>Apple</li>
                                <li >Microsoft</li>
                                <li>Android</li>
                            </ul>                        
                        </details>
                    </li>
                </ul>
            </div>
            <div className="products-showing-wrp">
                <div id="prd-pginfo-wrp">
                    <p>Showing <b>5 of 49</b> Products</p>
                    <form action="">
                        <label htmlFor="">
                            Sort By:
                            <select>
                                <option value="default">default</option>
                                <option value="default">most popular</option>
                                <option value="default">most rated</option>
                            </select>
                        </label>
                    </form>
                </div>
                <ul className="srow-item-list">
                    <li>
                        <ItemImgDetailsPreviewCard handleClick={handleAddToCart}/>
                    </li>
                    <li>
                        <ItemImgDetailsPreviewCard handleClick={handleAddToCart}/>
                    </li>
                    <li>
                        <ItemImgDetailsPreviewCard handleClick={handleAddToCart}/>
                    </li>
                    <li>
                        <ItemImgDetailsPreviewCard handleClick={handleAddToCart}/>
                    </li>
                    <li>
                        <ItemImgDetailsPreviewCard handleClick={handleAddToCart}/>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Products;