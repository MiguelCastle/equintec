import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import ThirdMenu from './thirdMenu';

interface SecondaryMenuProps {
    data: any,
    handleBack: () => void,
    handleReset: () => void,
}
 
const SecondaryMenu: React.FC<SecondaryMenuProps> = ({data, handleBack, handleReset}) => {
    let navigator = useNavigate();
    const ITEM_LIST_HEIGHT = 6; // matches with CSS value 
    const [inview, setInview] = useState(false);
    const [activeThirdMenu, setActiveThirdMenu] = useState(-1);
    const [innerActiveMenu, setInnerActiveMenu] = useState(-1);

    const [depth, setDepth] = useState<number[]>([]);

    const handleBackClick = () => {
        if(depth.length > 0){
            depth.pop()
            setDepth([...depth])
            // handleBack()
        } else {
            setInview(!inview) 
        }
    }
    // this handles the secondary main menu options click
    const handleOptionClick = (index: number) => {
        // console.log(data.options)
        // setActiveThirdMenu(index)
        setDepth([index])
    }

    const handleInnerOptionClick = (index: number) => {
        // setInnerActiveMenu(index)
        setDepth([...depth, index])
    }

    const handleResetSM = () => {
        setDepth([])
        setInview(false);
        handleReset()
    }
    const calculateStyle = (l: number, index: number) => {
        const t =  ITEM_LIST_HEIGHT * (index + 1) + "vh";
        const styles = {
            top: t,
            zIndex: index + 1,
        }
        return styles;
    }
    return (
        <div className="secondary-menu-container">
            <button className='main-menu-option' onClick={() => setInview(!inview)} onMouseEnter={() => setInview(true)} onMouseLeave={() => setInview(false)}>{data.label}</button>
            <section onMouseEnter={() => setInview(true)} onMouseLeave={() => setInview(false)}  className='sm-content' style={inview ? {display:'flex'} : {display: 'none'}}>
                <button onClick={handleBackClick}>Back</button>
                <h5 onClick={() =>navigator('/products')}>{data.label}</h5>
                <ul className='sm-list'>
                    {data.options.map((d: {label: string}, index: number) =>{
                        return <li onMouseEnter={() => handleOptionClick(index)} onClick={() => handleOptionClick(index)}>{d.label}</li>
                    })}
                </ul>
                {depth.length > 0 ? 
                    <ul className='thirdmenu-list' onMouseLeave={() => handleBackClick()} >
                        <li>
                            <ThirdMenu 
                                data={data.options[depth[0]]} 
                                handleClick={handleInnerOptionClick} 
                                handleResetClick={handleResetSM}/>
                        </li>
                        {depth.slice(1).map((i, index) => {
                            console.log(data.options[depth[0]].options[index]);
                            return (
                            <li 
                                style={calculateStyle(data.options[depth[0]].options[i].options.length, index)}
                            >
                                <ThirdMenu 
                                    data={data.options[depth[0]].options[i]} 
                                    handleClick={handleInnerOptionClick} 
                                    handleResetClick={handleResetSM}
                                />
                            </li>)
                        })}
                    </ul>
                : ""}
            </section>
        </div>
      );
}
 
export default SecondaryMenu;