import React, { forwardRef } from 'react'

const MyInput = forwardRef(function MyInput(props,ref){
  const{label,...otherProps} = props
  return(
    <div>
      {label}
       <input ref={ref} {...otherProps}/>
    </div>
  )
})
export default MyInput;