import React, { Component } from 'react'
import Patients from './Patients'
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
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const Home = () => {

const [value, setValue] = React.useState('');

let newPost;
const firebaseData = firebase.database()

const riminiRef = firebaseData.ref('/99/');
const bergamoRef = firebaseData.ref('/83/');

const dispatch = useDispatch();


const data = useSelector( state => state.slideReducer.data );

var dataDim =[]
var dataBG =[]

function selectSlide()
{

  var i = 0;
  var promise = riminiRef.on('child_added',function(snapshot, prevChildKey) {

    newPost = snapshot.val();
    dataDim[i] = { x: new Date(newPost.x) , y: newPost.y };
    i = i + 1;

  });

  var i = 0;

  var promise = bergamoRef.on('child_added',function(snapshot, prevChildKey) {

    newPost = snapshot.val();
    dataBG[i] = { x: new Date(newPost.x) , y: newPost.y };
    i = i + 1;

  });

  dispatch({ type: "CHART", dataRN: dataDim, dataBG: dataBG});
}

  return (

    <div className='App'>
      <div className='App-header'>
        <h2>Infected Board Viz</h2>
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
        <Col xs="3">

        </Col>
        <Col xs="auto">
        <div className="App">

        <button className="Slide-Button" onClick={selectSlide}>
          CHART
        </button>


      </div>
      </Col>
        <Col xs="3">  </Col>
      </Row>
      <Row>
        <Col xs="6">

        Rimini

        <XYPlot xType="time" height={300} width={300}>
        <HorizontalGridLines />
          <LineSeries data={useSelector( state => state.slideReducer.dataRN )} />
          <XAxis />
          <YAxis />
        </XYPlot>

        </Col>
        <Col xs="6">
        Bergamo

        <XYPlot xType="time" height={300} width={300}>
        <HorizontalGridLines />
          <LineSeries data={useSelector( state => state.slideReducer.dataBG )} />
          <XAxis />
          <YAxis />
        </XYPlot></Col>
      </Row>
      <Row>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="4"></Col>
        <Col sm="4"></Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}> <h4> Number of infected </h4> </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        < Patients /> </Col>
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
