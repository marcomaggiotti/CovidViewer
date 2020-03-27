import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import './Slide.css'
import { useDispatch } from "react-redux";

function PatientItem({ id }) {

  const slide = useSelector(state => state.firebase.data.slides[id])
  const firebase = useFirebase()
  const actualSlide = useSelector(state => state.slideReducer.slide[0].value)
  const dispatch = useDispatch();

  function toggleDone() {
    firebase.update(`slides/${id}`, { done: !slide.done })
  }

  function selectSlide()
  {

    console.log(" selected slide id : " + slide.text)
    dispatch({ type: "ActualSlide", id:id , value: slide.text })
    return firebase.push('actual', { text: id || 'sample', done: true })

  }

  function deleteSlide() {
    //console.log("delete slide id : " + id + " data : " + slide.toSource())
    return firebase.remove(`slides/${id}`)
  }

  console.log(actualSlide)

  return (

    <li className="Slide">
      <input
        className="Slide-Input"
        type="checkbox"
        checked={slide.done}
        onChange={toggleDone}
      />

      {slide.text || slide.name}

      <button className="Slide-Button" onClick={deleteSlide}>
        Delete
      </button>

      <button className="Slide-Button" onClick={selectSlide}>
        Select
      </button>

    </li>
  )
}

PatientItem.propTypes = {
  id: PropTypes.string.isRequired
}

export default PatientItem
