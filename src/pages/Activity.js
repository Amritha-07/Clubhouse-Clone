import React from 'react'
import Subheader from '../components/Subheader'
import data from '../data/activity.json'
import style from '../style/activity.module.css'
import exploreStyle from '../style/explore.module.css'

export default function Activity() {
  return (
    <div className={style.ActivityContainer}>
      <div className={exploreStyle.Header}>
        <Subheader pageTitle='Activity'/>
      </div>
      <div className={style.Activities}>
        {data.map((item) => (
          <div key={item.id}>
            <div className='d-flex text-align-center'>
              <img src={`\\images\\${item.image[0]}`} className='ms-2' alt=''/>
              <div className='ms-2'>
                <p>
                  <span>{item.title}</span> {item.description}
                </p>
              </div>
            </div>
            <div>
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
