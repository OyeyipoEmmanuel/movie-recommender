import React from 'react'
import { ClipLoader } from 'react-spinners'


const Loading = (props) => {
  return (
    
    <ClipLoader loading={props.isLoadingProp} size={150} color='red'/>
  )
}

export default Loading