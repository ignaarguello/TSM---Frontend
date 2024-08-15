import React from 'react'
import '../../styles/TextAreaFormTask.css'

export default function TextAreaFormTask() {
  return (
    <div id='Contenedot-TextArea_TAFT'>
        <label htmlFor="description-task">Remarks</label>
        <textarea name="description-task" id="TextArea_TAFT" placeholder='Remarks...'></textarea>
    </div>
  )
}
