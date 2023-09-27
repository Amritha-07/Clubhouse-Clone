import React from 'react'
import Header from '../components/Header'
import DailyInfoCard from '../components/DailyInfoCard'
import style from '../style/home.module.css'
import RoomInfoCard from '../components/RoomInfoCard'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs' 

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.HomeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.ActionButton} >
        <button>
          <AiOutlinePlus className='me-2'/>
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
    </>
  )
}
