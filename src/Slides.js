import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import SlideItem from './SlideItem'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const slidesQuery =  {
  path: 'slides',
  queryParams: ['limitToLast=10']
}

function Slides() {

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
     <div className="pagination-wrapper">

         <Pagination aria-label="Page navigation example">
    <SlideItem
      key={`${key}-${ind}`}
      id={key}
      {...slide}
    />
    </Pagination>

       </div>
    </React.Fragment>
  ))
}

export default Slides
