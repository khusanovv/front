import React from 'react'
import { useParams } from 'react-router-dom'

const Exchange = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>exchange</div>
  )
}

export default Exchange