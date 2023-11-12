import React from 'react'
import './style.scss'
import ContentWrappper from '../../componenets/contentWrapper/ContentWrapper'


const NotPage = () => {
  return (
    <div className='pageNotFound'>
      <ContentWrappper>
        <h1 className='bigText'>Page Not Found</h1>
        <p className="smallText">404 page not found...</p>
      </ContentWrappper>
    </div>
  )
}

export default NotPage