import React from "react";
import { Link } from "react-router-dom";

interface ThirdMenuProps {
    data: any,
    handleClick: (index: number) => void,
    handleResetClick: () => void
}
 
const ThirdMenu: React.FC<ThirdMenuProps> = ({data, handleClick, handleResetClick}) => {
    return ( 
        <div className="third-menu-container">
            <h3>{data.label}</h3>
            <ul>
                {data.options.map((o: any, index: number) => {
                    if(o.url){
                        return <li onClick={() => handleResetClick()}> <Link to={o.url}>{o.label}</Link></li>
                    }
                    return <li onClick={() => handleClick(index)} onMouseEnter={() => handleClick(index)} >{o.label}</li>
                })}
            </ul>
        </div>
     );
}
 
export default ThirdMenu;