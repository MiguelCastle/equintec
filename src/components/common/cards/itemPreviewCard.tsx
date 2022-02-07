import React from 'react';

interface ItemPreviewCardProps {
    sale?: boolean
}
 
const ItemPreviewCard: React.FC<ItemPreviewCardProps> = ({sale}) => {
    return (  
        <article className="itm-card-preview">
            {sale? <div className="sale-banner">
                sale
            </div> : ''}
            <img src="https://d-themes.com/react_asset_api/molla/uploads/product_1_16dee019e1.jpg" alt="" />
            <p>woodworking</p>
            <h4 onClick={() => window.location.href = "/product/1234"}>dewalt dwara 100</h4>
            <ul>
                <li>$23.35</li>
                <li>$40.99</li>
            </ul>
        </article>
    );
}
 
export default ItemPreviewCard;