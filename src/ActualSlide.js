import React from 'react'
import { useSelector } from 'react-redux'
import {useFirebaseConnect, isLoaded } from 'react-redux-firebase'
import SlideItem from './SlideItem'
import { useFirebase } from 'react-redux-firebase'

import { useDispatch } from "react-redux";
import { Button } from 'reactstrap';
//import { useParams } from 'react-router-dom'

const slidesQuery =  {
  path: 'actual',
  queryParams: ['limitToLast=10']
}

function ActualSlide({ id }) {

  const firebase = useFirebase()

  //const { todoId } = useParams()

  const actualSlide = useSelector(state => state.slideReducer.slide[0].value)

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  useFirebaseConnect(() => [
    slidesQuery
  ])

  function setSlide() {

      //console.log( actualSlide )

      //return firebase.push('slides', { text: id  || 'sample', done: false })
  }



  const slides = useSelector( state => state.firebase.ordered.slides )
  //console.log(' slides : ' + slides.map())

  // data in reducers/slideReducers.js
  //const actualSlide = useSelector(state => state.slideReducer.slide[0].id)

  //console.log("ActualSlide "+ actualSlide )
  // Show a message while todos are loading
  if (!isLoaded(actualSlide)) {
    return 'Loading'
  }
//
  return (

    <div>
      <h4> Actual Slide </h4>
      {actualSlide || actualSlide.name}
      <Button color="danger" onClick={() => dispatch({ type: "ActualSlide", id:'BRAC03' , value: 'BRAC03'}) } >EDIT</Button>

    </div>
  )
}

export default ActualSlide
