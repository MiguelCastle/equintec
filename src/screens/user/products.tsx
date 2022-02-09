import React from 'react'
import ItemImgDetailsPreviewCard from '../../components/common/cards/itemImgDetailsPreviewCard';
import data from "../../data/products.json";

interface ProductsProps {
    handleAddToCart: (e:any) => void
}
 
const Products: React.FC<ProductsProps> = ({handleAddToCart}) => {
    return ( 
        <div id="products-container">
            <section className="imgb-td-template products-pgbckgrnd">
                <h1>{data.header}</h1>
                <p>{data.sub_header}</p>
            </section>
            <div className="prd-search-left">
                <p>Filters:</p>
                <button>Clean All</button>
                <ul className="prd-filter-list">
                    {data.filter_lista.map((option, index) => {
                        return (
                            <li key={option + "_" + index}>
                                <details className="prdf-option">
                                    <summary className='prdf-os'>{option.name}</summary>
                                    <ul className='prdf-ol'>
                                        {option.options.map((o, index) => {
                                            return (
                                                <li key={o + "_" + index}>{o}</li>
                                            )
                                        })}
                                    </ul>                        
                                </details>
                            </li>
                        )
                    })}
                  
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
                                {data.sort_by.map((s) => {
                                    return <option value={s}>{s}</option>
                                })}
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