import React from 'react'
import { useParams } from 'react-router-dom'



const Catalog = () => {

  const {category} = useParams();
  console.log(category);

  return (
    <div>Category</div>
  )
}

export default Catalog