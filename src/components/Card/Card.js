import React from 'react';
import "./Card.scss"
import {FaSeedling} from "react-icons/fa"

export const Card = ({data}) => {
    const background = data.images.data[0].files.data[0].url;
    const logo = data.logo?.data?.files?.data[0]?.url;
    const categories = data.categories.data.map(c => c.name);
    const {
        name,
        tagline,
        hasPassedPreliminary,
        publishedAt,
        website
    } = data;
    
    return (
        <div className="card">
            
            {
                hasPassedPreliminary && publishedAt !== null
                    ?
                    <a href={website} target="_blank">
                        <div className="images-container">
                            <div className="logo-container">
                                {logo ? <img src={logo} alt="organisation logo"/> : null}
                            </div>
                            <div
                                className="background"
                                style={{backgroundImage: `url("${background}")`}}
                                alt="image of organisation"/>
                        </div>
                    </a>
                    : null
            }
            
            
            <div className="container">
                <span>Organisation</span>
                <h4 className="name"><b>{name}</b></h4>
                <p className="tagline">{tagline}</p>
                <p className="categories">{categories.join(' . ')}</p>
            </div>
            
            
            {
                hasPassedPreliminary && publishedAt !== null
                    ? null
                    :
                    <div className="not-approved">
                        <h5><span><FaSeedling height={10}/></span><b>Membership pending</b></h5>
                        <p>This organisation has no published profile</p>
                    </div>
            }
            
            
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