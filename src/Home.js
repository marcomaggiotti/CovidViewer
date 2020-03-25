import React, { useRef, useEffect, Component } from 'react'
import Slides from './Slides'
import NewPatient from './NewPatient'
import ActualSlide from './ActualSlide'
import SearchComponent from './SearchComponent';
import firebase from 'firebase/app'

import { useSelector, useDispatch } from 'react-redux'

import NavBar from './NavBar';

import logo from './logo.svg'
import './App.css'
import { Container, Row, Col } from 'reactstrap';

import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';

const Home = () => {

const [value, setValue] = React.useState('');

var newPost;
let newPosto = [];
const dispatch = useDispatch();
const firebaseData = firebase.database().ref('/');

const data0 = useSelector( state => state.slideReducer.data );

function selectSlide()
{

  dispatch({ type: "CHART"})

}

     /*
   var x = 0;
   var y = 0;

   for(var i = 0; i < data.length; i++)
   {
     x = data[i].x;
     y = data[i].y;

    firebase.database().ref('/').push({
          x, y
      }).then((data)=>{
          //success callback
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
   }*/


  return (


    <div className='App'>
      <div className='App-header'>
        <h2>Patient Board Viz</h2>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='App-todos'>

      <Container>

      <Row>
        <Col><NavBar/></Col>
        <Col></Col>
        <Col><ActualSlide/></Col>

        <Col>
        <h4>
          Loaded From
          <span className='App-Url'>
            <a href='https://redux-firebasev3.firebaseio.com/'>
              Corona Board
            </a>
          </span>
        </h4>
        </Col>

      </Row>

      <Row>
        <Col xs="3"></Col>
        <Col xs="auto"><div className="App">

        <button className="Slide-Button" onClick={selectSlide}>
          CHART
        </button>

        <XYPlot height={300} width={300}>
          <LineSeries data={useSelector( state => state.slideReducer.data )} />
        </XYPlot>
      </div></Col>
        <Col xs="3">  </Col>
      </Row>
      <Row>
        <Col xs="6"></Col>
        <Col xs="6"></Col>
      </Row>
      <Row>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}> <h4>Slides List</h4> </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Slides /> </Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}><SearchComponent /></Col>
        <Col sm={{ size: 'auto', offset: 1 }}><NewPatient /></Col>
      </Row>
    </Container>

      </div>
    </div>
  )
}

export default Home
