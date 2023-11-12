
import React, {useState, useEffect} from 'react'
import './style.scss'

import { useSelector } from 'react-redux'

import useFetch from '../../../hooks/useFetch'
import Img from '../../../componenets/layzLoadImage/Img'


const Banner = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const {data, loading} = useFetch("/movie/upcoming");

  
  useEffect(() => {
    const backgroundImg = url.backdrop + data?.results[Math.floor(Math.random() * 20)].backdrop_path;    
      
    console.log(backgroundImg)
    setBackground(backgroundImg);
  }, [data])

 
  
  return (
    <div className='banner'>
      {!loading && <div className='backdrop-img'>
        <Img src={background} />
        <div>{}</div>        
      </div>}
           
    </div>
  )
}

export default Banner