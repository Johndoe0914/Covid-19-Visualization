import React,{useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import JumboTron from './components/Jumbotron';
import SearchBar from "./components/SearchBar";
import Chart from "./components/Chart";
import {GetByCountry} from './utils/Api';
import Badge from 'react-bootstrap/Badge'


import './App.css';

const App = () => {
  const [ChartData, SetChartData] = useState({})

  const [searchValue, setSearchValue] = useState('china')

  const handleChange = (event) => {
    const value = event.target.value
   setSearchValue(value)

   
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("butto clciked")
  
      GetByCountry(searchValue).then(res => {
        SetChartData(res)
        console.log("SearchedData", res.data)
      })
      .catch(err => console.log(err))
    


}

useEffect(() => {
  GetByCountry(searchValue).then(data => {
   
    SetChartData(data)
    console.log("SearchedData", data.data)
  })
  .catch(err => console.log(err))



}, [])



  return (
    <Container fluid>
      <Row>
        <Col>
        <JumboTron />
        </Col>
      </Row>

      <Row>
        <Col>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        
        </Col>
      </Row>
      <Row>
        <Col>
        <center>
 
       <ul style={{display:"inline-flex", listStyle:"none", marginBottom:'100px' }}>
         <li><h2 > <Badge variant="warning">Active Cases 9</Badge></h2></li>
         <li><h2 > <Badge variant="primary">Total Confirmed Cases 9</Badge></h2></li>
         <li><h2 > <Badge variant="danger">Total Confirmed Deaths 9</Badge></h2></li>
       </ul>
        </center>
        </Col>
      </Row>
      <Row>
       
        <Col>
      
        <Chart />
        {JSON.stringify(ChartData)}
        </Col>
      </Row>
    </Container>
  )
}

export default App;
