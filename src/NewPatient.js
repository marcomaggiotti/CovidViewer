import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'

function NewSlide() {
  const [inputVal, changeInput, simptoms, preSickness] = useState('')
  const firebase = useFirebase()

  function resetInput() {
    changeInput('')
  }

  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value)
  }

  function addSlide() {
    return firebase.push('slides', { text: inputVal || 'sample', done: false })
  }

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h4>New Patient</h4>
      età
      <input value={inputVal} onChange={onInputChange} />
      sintomi
      <input value={simptoms}  />
      malattie preesistenti
      <input value={preSickness}  />

      <button onClick={addSlide}>Add</button>
      <button onClick={resetInput}>Cancel</button>
    </div>
  )
}

export default NewSlide
