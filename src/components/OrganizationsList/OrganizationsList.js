import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectOrganizations} from "../../features/organizations/organizationsSlice";

export const OrganizationsList = () => {
    const result = useSelector(state => selectOrganizations(state));
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        setData(prevState => {
            console.log(prevState)
            return [...prevState, ...result.data]
        })
    },[result]);
    
    return (
        <ul>
            {data?.map(org => <li key={org.name}>{org.name}</li>)}
        </ul>
    );
};