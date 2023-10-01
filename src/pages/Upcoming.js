import React from 'react'
import style from '../style/upcoming.module.css'
import exploreStyle from '../style/explore.module.css'
import Subheader from '../components/Subheader'
import data from '../data/upcomingCard.json'
import { BellOutlined } from '@ant-design/icons'

export default function Upcoming() {
  return (
    <div className={style.UpcomingContainer}>
        <div className={exploreStyle.Header}>
            <Subheader pageTitle='Upcoming'/>
        </div>
        <h6>Today</h6>
        <div className={style.UpcomingCardContainer}>
            {data.map((item, index) => (
                <div key={index}>
                    <div className={style.UpcomingTime}>
                        <p>{item.time}</p>
                        <BellOutlined />
                    </div>
                    <h4>{item.title}</h4>
                    <div>
                        <img src={`\\images\\${item.images[0]}`} className='me-2' alt=''/>
                        <img src={`\\images\\${item.images[1]}`} className='me-2' alt=''/>
                        <img src={`\\images\\${item.images[2]}`} className='me-2' alt=''/>
                        <img src={`\\images\\${item.images[3]}`} className='me-2' alt=''/>
                    </div>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
