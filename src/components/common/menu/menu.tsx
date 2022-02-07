import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseX, HamburgerBars } from '../../icons';
import data from '../../../data/menuOptions.json';
import SecondaryMenu from './secondaryMenu';

interface MenuProps {
    
}
 
const Menu: React.FC<MenuProps> = () => {
    const [menuInView, setMenuInView] = useState(false);
    const [miniMenuInView, setMiniMenuInView] = useState(false);

    const handleBackClick = () => {
        alert('app handle back click')
    }

    const handleReset =() => {
        setMenuInView(!menuInView);
    }

    return (
        <div id="menu-container">
            <button id="menu-btn" onClick={() => setMenuInView(!menuInView)}>
                {
                    menuInView ? 
                    <CloseX color={'#fcb941'}/>
                    :
                    <HamburgerBars color={'#fcb941'}/>
                }
            </button>
            <nav id="menu-options-wrp" className={menuInView ? 'menu-inview' : 'menu-notinview'}>
                {data.map((d, index) => {
                    if(d.url){
                        return <Link key={`${d.label}_${index}`}  className='main-menu-option' to={d.url} onClick={() => setMenuInView(!menuInView)}>{d.label}</Link>
                    } else{
                        return <SecondaryMenu data={d} handleBack={handleBackClick} handleReset={handleReset}/>
                    }
                })}
            </nav>
        </div>
      );
}
 
export default Menu;