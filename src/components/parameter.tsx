import * as React from 'react'
import './index.css'

interface Props {
  parameter: string
  inputType: string
}

function Parameter({parameter, inputType = "text"}: Props) {
  return (
    <div>
      <code>{parameter}</code> = <input type={inputType}/>
    </div>
  )
}

export default Parameter