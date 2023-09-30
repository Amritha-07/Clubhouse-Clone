import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import { Link } from 'react-router-dom'
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'

export default function Profile() {
  return (
    <>
      <div className={style.ProfileContainer}>
        <div className={exploreStyle.Header}>
          <div className={`${exploreStyle.Head} text-end mb-0`}>
            <Link to='/home'>
              <img src='/images/arrow.png' className={exploreStyle.ArrowIcon} alt='' />
            </Link>
            <div className={style.ActionButton}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src='/images/user-img.jpg' className={style.ProfileImage} alt='' />
        <h4>Rafeh Qazi</h4>
        <p>@cleverqazi</p>
        <div className={style.Follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className='mb-4'>
          <button>
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button>
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.Nominated}>
          <img src='/images/user-img.jpg' alt='' />
          <div>
            <p>Joined 14-July-2020</p>
            <p>Nominated by <span>Anton Alarcon</span></p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.AddMemberButton}>
          <BsPlus />
        </button>
      </div>   
    </>
  )
}
