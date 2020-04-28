import React from 'react';
import { BarChart, Bar, XAxis, YAxis} from 'recharts';
import Container from "react-bootstrap/Container"


const Chart = () => {
 
    
    const data = [
        {name: 'Cases in this country', uv: 400, pv: 2400, amt: 2400},
        {name: `Total Cases in ${100}`},
        {name: `Total Confirmed Cases in ${200}`},
        {name: `Total deaths in ${200}`}
        
    ]; 
    return (

        <Container fluid>
         <center>
         <BarChart width={730} height={250} data={data}>
            <Bar dataKey="uv" barSize={30} fill="#8884d8" />
        <XAxis dataKey="name"type='category'/>
        <YAxis dataKey="" />
            </BarChart>
         </center>
        </Container>
   
    )
}

export default Chart