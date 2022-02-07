import React, { useState } from "react";

interface WindowTabsProps {
    data: {content: any}[]
}
 
const WindowTabs:React.FC<WindowTabsProps> = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);

    const activeStyle = {
        background: '#1e1e1e',
        color: '#fff'
    }

    return (  
        <div className="windowtab-container">
                <ul className="wt-topics-list">
                    {data.map((d: any, index: number) => {
                        return (
                            <li className="wt-tab" style={activeTab == index ? activeStyle : {}} onClick={() => setActiveTab(index)}>
                            <p>{d.label}</p>
                        </li>
                        )
                    })}
                </ul>
                <div className="wt-detail-content">
                    {activeTab === 0 ? 
                    <div className="wt-description-wrp">
                        <h3>{data[activeTab].content.h3}</h3>
                        <p>{data[activeTab].content.description}</p>
                        <ul>
                            {data[activeTab].content.list.map((i: string) => {
                                return <li>{i}</li>
                            })}
                        </ul>
                        <p>{data[activeTab].content.p}</p>
                    </div>: ''}
                    {activeTab === 1 ? 
                    <ul className="wt-specifications-wrp">
                        {data[activeTab].content.map((s: any) => {
                            return( 
                            <li>
                                <h4>{s.label}</h4>
                                <ul>
                                    {s.data.map((i: any) => {
                                        return <li className="wts-detail"><p>{i.label}</p><p>{i.data}</p></li>
                                    })}
                                </ul>
                            </li>)
                        })}
                    </ul>
                    : ''}
                    {activeTab === 2 ? 
                    <ul className="wt-specifications-wrp">
                        {console.log(data[activeTab].content)}
                        
                        {data[activeTab].content.map((s: any) => {
                            return( 
                            <li>
                                <h4>{s.label}</h4>
                                <a href="/#">{s.label}</a>
                            </li>)
                        })}
                    </ul>
                    : ''}       
                </div>
        </div>
    );
}
 
export default WindowTabs;