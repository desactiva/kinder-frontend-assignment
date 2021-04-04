import React from 'react';
import "./Card.scss"

export const Card = ({data}) => {
    const background = data.images.data[0].files.data[0].url;
    const logo = data.logo?.data?.files?.data[0]?.url;
    
    const categories = data.categories.data.map(c => c.name);
    const {name, tagline, hasPassedPreliminary, publishedAt} = data;
    // categories.data[0].name
    
    console.log(data, publishedAt);
    
    return (
        <div className="card">
            
            <div className="images-container">
                <div className="logo-container">
                    {logo ? <img src={logo} alt="organisation logo"/> : null}
                </div>
                <div className="background" style={{backgroundImage: `url("${background}")`}}
                     alt="image of organisation"/>
            </div>
            
            <div className="container">
                <span>Organisation</span>
                <h4 className="name"><b>{name}</b></h4>
                <p className="tagline">{tagline}</p>
                <p className="categories">{categories.join(' . ')}</p>
            </div>
            
            <div className="state-container">
                <div className={
                    !hasPassedPreliminary
                        ? "state-one active"
                        : null
                }/>
                <div className={
                    hasPassedPreliminary && !publishedAt
                        ? "state-two active"
                        : null
                }/>
                <div className={
                    hasPassedPreliminary && publishedAt !== null
                        ? "state-three active"
                        : null
                }/>
            
            </div>
        </div>
    );
};