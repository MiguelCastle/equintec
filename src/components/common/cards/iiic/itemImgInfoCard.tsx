import React from 'react';

interface ItemImgInfoCardProps {
    sale? : boolean
}
 
const ItemImgInfoCard: React.FC<ItemImgInfoCardProps> = ({sale}) => {
    return (
        <div className="iiic-container">
            <div className="iiic-pimg">
                {sale? <p className="iiic-banner">venta por tiempo limitado</p> : ""}
                <img src="https://d-themes.com/react/molla/demo-22/images/home/featured/product-1.jpg" alt="" />
            </div>
            <article className="iiic-prdouct-details">
                <p>ahorrar $64.00</p>
                <h2 onClick={() => window.location.href = "/product/1234"}>dewalt dwe575SB</h2>
                <ul className="price-comparion-list">
                    <li>$79.00</li>
                    <li>era $143.00</li>
                </ul>
                <a href="/#">compra ahora</a>
            </article>
        </div>
      );
}
 
export default ItemImgInfoCard;