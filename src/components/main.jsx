import React from 'react'

import Home from './Home'
import Emp_form from './Emp_form'

const Main = ({child}) => {
  return (
    <div>
      <Home/>

      {child}
    </div>
  )
}

export default Main