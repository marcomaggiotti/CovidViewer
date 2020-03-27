import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import PatientItem from './PatientItem'

const slidesQuery =  {
  path: 'slides',
  queryParams: ['limitToLast=10']
}

function Patients() {

  // Attach slides listener
  useFirebaseConnect(() => [

    slidesQuery

  ])

  const dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
      (a, i) => "Record " + (i + 1)
    );

  const pageSize = 50;
  const pagesCount = Math.ceil(dataSet.length / pageSize);

  // Get todos from redux state
  const actualSlide = useSelector( state => state.slideReducer.slide[0].id )
  const slides = useSelector( state => state.firebase.ordered.slides )

  // Show a message while todos are loading
  if (!isLoaded(slides)) {
    return 'Loading'
  }

  // Show a message if there are no todos
  if (isEmpty(slides)) {
    return 'Slide list is empty'
  }

  return slides.reverse().map(({ value: slide, key }, ind) => (
     <React.Fragment>

    < PatientItem
      key={`${key}-${ind}`}
      id={key}
      {...slide}
    />
        
    </React.Fragment>
  ))
}

export default Patients
