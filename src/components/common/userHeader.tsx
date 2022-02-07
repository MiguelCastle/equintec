import React from 'react';
import { Link } from 'react-router-dom';
import EquintecLogo from '../../static/svg/equintecLogo';
import { HamburgerBars, Profile, ShoppingCart } from '../icons';
import Menu from './menu/menu';

interface UserHeaderProps {
    
}
 
const UserHeader: React.FC<UserHeaderProps> = () => {
    return ( 
        <header id="userheader">
            <div id="hmenu-wrp">
                <Menu/>
            </div>
            <div id="hlogo-wrp">
                <Link to={'/'}>
                    <EquintecLogo color={'#fff'}/>
                </Link>
            </div>
            <ul>
                <li>
                    <a href="">
                        <ShoppingCart color={"#fff"}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Profile color={"#fcb941"}/>
                    </a>
                </li>
            </ul>
        </header>
     );
}
 
export default UserHeader;