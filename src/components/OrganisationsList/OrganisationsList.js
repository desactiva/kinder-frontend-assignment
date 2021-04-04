import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectOrganisations} from "../../features/organisations/organisationsSlice";
import {Card} from "../Card/Card";

export const OrganisationsList = () => {
    const result = useSelector(state => selectOrganisations(state));
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        setData(prevState => {
            return [...prevState, ...result.data]
        })
    },[result]);
    
    return (
        <ul className="card-container" >
            {data?.map(org => <Card key={org.uuid} data={org}/>)}
        </ul>
    );
};