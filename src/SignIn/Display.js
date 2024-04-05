import React from 'react';
import './Display.css'
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Display = () => {
    const location=useLocation();
    const data=location.state;
    return (
        <div>
            <div className='out'>
                <h1 className='head'>Get info For Employee or intern certificate</h1>
                <div className='ava'>
                    <Avatar   src={data.Profile_pic} sx={{ width: 200, height: 200 }}/>
                </div>
                <div>
                    <h1 className='a1'>{data.Name}</h1>
                    <h1 className='a2'>{data.Work_ID}</h1>
                    <h1 className='a3'>{data.Role}</h1>
                    <h1 className='a4'>{data.NI_Description}</h1>
                    <h1 className='a5'>{data.Certificate}</h1>
                    <h1 className='a6'>{data.Work_Rating}</h1>
                    <h1 className='a7'>{data.Service_Year_NI}</h1>
                </div>
                   
            </div>
        </div>
    );
}

export default Display;
